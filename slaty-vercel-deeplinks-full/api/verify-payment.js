const initFirebase = require('../firebase');
const admin = require('firebase-admin');
const axios = require('axios');

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const { reference, linkId, studentId } = req.body || {};
    if (!reference || !linkId || !studentId) {
      return res.status(400).json({ error: 'reference, linkId, studentId are required' });
    }

    const db = initFirebase();
    const linkRef = db.collection('referralLinks').doc(linkId);
    const linkSnap = await linkRef.get();
    if (!linkSnap.exists) return res.status(404).json({ error: 'Link not found' });

    const linkData = linkSnap.data();

    // Verify with Paystack
    const paystackRes = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` }
    });

    const verification = paystackRes.data;
    if (!verification.status || verification.data.status !== 'success') {
      return res.status(400).json({ error: 'Payment verification failed' });
    }

    // Auto-enroll
    const enrollRef = await db.collection('enrollments').add({
      linkId,
      referrerId: linkData.referrerId,
      classId: linkData.classId || null,
      studentId,
      paymentId: reference,
      amount: linkData.amount,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    await linkRef.update({
      enrollments: admin.firestore.FieldValue.increment(1)
    });

    res.status(200).json({ success: true, enrollmentId: enrollRef.id });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Server error' });
  }
};
