const admin = require('firebase-admin');

/* -------------------- Firebase Init -------------------- */
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

/* -------------------- Payment Check -------------------- */
async function hasPaid(db, linkId) {
  const snap = await db
    .collection('enrollments')
    .where('linkId', '==', linkId)
    .limit(1)
    .get();

  return !snap.empty;
}

/* -------------------- Main Handler -------------------- */
// GET /link/:id
module.exports = async (req, res) => {
  try {
    const db = initFirebase();
    const id = req.query.id;

    if (!id) return res.status(400).send('Missing link id');

    const docRef = db.collection('referralLinks').doc(id);
    const doc = await docRef.get();

    if (!doc.exists) return res.status(404).send('Link not found');

    const data = doc.data();

    /* -------- Expiry Check -------- */
    if (
      data.expiresAt &&
      data.expiresAt.toDate &&
      data.expiresAt.toDate() < new Date()
    ) {
      return res.status(410).send('Link expired');
    }

    /* -------- Analytics -------- */
    await docRef.update({
      clicks: admin.firestore.FieldValue.increment(1),
      lastClickAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    try {
      await db.collection('referralClicks').add({
        linkId: id,
        referrerId: data.referrerId,
        classId: data.classId || null,
        userAgent: req.headers['user-agent'] || null,
        ip:
          req.headers['x-forwarded-for'] ||
          req.connection.remoteAddress ||
          null,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });
    } catch (e) {
      console.error('Failed to log click:', e);
    }

    /* -------- Payment Enforcement -------- */
    const paid = await hasPaid(db, id);

    const paymentUrl =
      `${process.env.PAYMENT_PAGE_URL}?linkId=${encodeURIComponent(id)}`;

    // 👉 CURRENT (Jitsi Web)
    const jitsiRoom =
      `https://meet.yourplatform.com/class-${data.classId || id}`;

    // 👉 LATER (Play Store / App Deep Link)
    // const jitsiRoom =
    //   `${process.env.MOBILE_URI_SCHEME}://join?classId=${data.classId}`;

    if (!paid) {
      // ❌ Not paid → redirect to payment
      return res.redirect(302, paymentUrl);
    }

    /* -------- Device Detection -------- */
    const ua = req.headers['user-agent'] || '';
    const isMobile = /android|iphone|ipad/i.test(ua);

    /* -------- Final Redirect -------- */
    if (isMobile) {
      // Mobile → open Jitsi (or app later)
      res.setHeader('Content-Type', 'text/html');
      return res.send(`<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Joining Class</title>
    <script>
      window.location = "${jitsiRoom}";
    </script>
  </head>
  <body>
    <p>Joining your class…</p>
  </body>
</html>`);
    }

    // Desktop → browser join
    return res.redirect(302, jitsiRoom);

  } catch (err) {
    console.error(err);
    return res.status(500).send('Server error');
  }
};
