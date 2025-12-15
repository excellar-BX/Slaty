const initFirebase = require('../firebase');
const admin = require('firebase-admin');

const JITSI_BASE_URL = 'https://meet.yourplatform.com'; // change later
// later → https://play.google.com/store/apps/details?id=your.app

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const db = initFirebase();
    const { linkId, studentId, paymentId, amount } = req.body || {};

    if (!linkId || !studentId || !paymentId) {
      return res.status(400).json({
        error: 'linkId, studentId and paymentId are required'
      });
    }

    const linkRef = db.collection('referralLinks').doc(linkId);
    const linkSnap = await linkRef.get();

    if (!linkSnap.exists) {
      return res.status(404).json({ error: 'Link not found' });
    }

    const linkData = linkSnap.data();

    if (amount && amount !== linkData.amount) {
      return res.status(400).json({
        error: 'Invalid amount tampering detected'
      });
    }

    // 1️⃣ Save enrollment (payment confirmed)
    const enrollRef = await db.collection('enrollments').add({
      linkId,
      referrerId: linkData.referrerId,
      classId: linkData.classId || null,
      studentId,
      paymentId,
      amount: linkData.amount,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    await linkRef.update({
      enrollments: admin.firestore.FieldValue.increment(1)
    });

    // 2️⃣ Build Jitsi join URL (NOW)
    const roomName = `class-${linkData.classId || linkId}`;
    const joinUrl = `${JITSI_BASE_URL}/${roomName}`;

    // 3️⃣ Respond with redirect target
    res.status(200).json({
      success: true,
      enrollmentId: enrollRef.id,
      redirectUrl: joinUrl
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
