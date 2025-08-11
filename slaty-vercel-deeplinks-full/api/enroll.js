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

// POST /api/enroll
// body: { linkId, studentId, paymentId, amount }
module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const db = initFirebase();
    const { linkId, studentId, paymentId, amount } = req.body || {};

    if (!linkId || !studentId || !paymentId) {
      return res.status(400).json({ error: 'linkId, studentId and paymentId are required' });
    }

    const linkRef = db.collection('referralLinks').doc(linkId);
    const linkSnap = await linkRef.get();
    if (!linkSnap.exists) return res.status(404).json({ error: 'Link not found' });

    const linkData = linkSnap.data();

    // create enrollment record
    const enrollRef = await db.collection('enrollments').add({
      linkId,
      referrerId: linkData.referrerId,
      classId: linkData.classId || null,
      studentId,
      paymentId,
      amount: amount || null,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // increment enrollments counter
    await linkRef.update({
      enrollments: admin.firestore.FieldValue.increment(1)
    });

    // Optionally: credit tutor, send notification, etc. (left to your app logic)

    res.status(200).json({ success: true, enrollmentId: enrollRef.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
