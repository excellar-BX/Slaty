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

// POST /api/link/create
module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const db = initFirebase();
    const { referrerId, classId, classTitle, price, expiresAt } = req.body || {};

    if (!referrerId || !classId) {
      return res.status(400).json({ error: 'referrerId and classId are required' });
    }

    const docRef = await db.collection('referralLinks').add({
      referrerId,
      classId,
      classTitle: classTitle || null,
      price: price || null,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      expiresAt: expiresAt ? admin.firestore.Timestamp.fromDate(new Date(expiresAt)) : null,
      clicks: 0,
      enrollments: 0
    });

    const shortCode = docRef.id;
    const host = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : (process.env.BASE_URL || 'https://slaty-links.vercel.app');
    const link = `${host}/link/${shortCode}`;

    res.status(200).json({ link, id: shortCode });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
