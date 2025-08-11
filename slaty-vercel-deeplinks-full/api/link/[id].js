const admin = require('firebase-admin');

function initFirebase() {
  if (!admin.apps.length) {
    const key = process.env.FIREBASE_ADMIN_KEY;
    if (!key) throw new Error('FIREBASE_ADMIN_KEY is not set');
    const serviceAccount = JSON.parse(key);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
  return admin.firestore();
}

// GET /link/:id  (serves redirect page that opens app and falls back to Play Store)
module.exports = async (req, res) => {
  try {
    const db = initFirebase();
    const id = req.query.id;
    if (!id) return res.status(400).send('Missing link id');

    const docRef = db.collection('referralLinks').doc(id);
    const doc = await docRef.get();
    if (!doc.exists) return res.status(404).send('Link not found');

    const data = doc.data();

    // check expiry
    if (data.expiresAt && data.expiresAt.toDate && data.expiresAt.toDate() < new Date()) {
      return res.status(410).send('Link expired');
    }

    // increment click stats and log
    await docRef.update({
      clicks: admin.firestore.FieldValue.increment(1),
      lastClickAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Log click details
    try {
      await db.collection('referralClicks').add({
        linkId: id,
        referrerId: data.referrerId,
        classId: data.classId || null,
        userAgent: req.headers['user-agent'] || null,
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || null,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
      });
    } catch (e) {
      console.error('Failed to log click:', e);
    }

    const deepParams = `?referrerId=${encodeURIComponent(data.referrerId)}&classId=${encodeURIComponent(data.classId)}&linkId=${encodeURIComponent(id)}${data.price ? '&price=' + encodeURIComponent(data.price) : ''}`;
    const deepLink = `${process.env.MOBILE_URI_SCHEME || 'myapp'}://register${deepParams}`;
    const playStore = process.env.PLAY_STORE_URL || `https://play.google.com/store/apps/details?id=${process.env.ANDROID_PACKAGE_NAME || 'com.slaty.app'}`;

    const ua = req.headers['user-agent'] || '';
    const isMobile = /android|iphone|ipad/i.test(ua);

    if (isMobile) {
      // Serve HTML that attempts to open app, then fallback to Play Store
      res.setHeader('Content-Type', 'text/html');
      res.send(`<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Open Slaty</title>
    <script>
      (function() {
        var deep = "${deepLink}";
        var fallback = "${playStore}";
        // Try to open the app
        window.location = deep;
        // After 1.2s, redirect to Play Store
        setTimeout(function() { window.location = fallback; }, 1200);
      })();
    </script>
  </head>
  <body>
    <p>Opening the Slaty app... If nothing happens, <a href="${playStore}">install from Play Store</a>.</p>
  </body>
</html>`);
    } else {
      // Desktop: show info and link to Play Store
      res.setHeader('Content-Type', 'text/html');
      res.send(`<html><body><h1>Open Slaty</h1><p>This link is intended for mobile devices. <a href="${playStore}">Get the app on Play Store</a>.</p></body></html>`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
