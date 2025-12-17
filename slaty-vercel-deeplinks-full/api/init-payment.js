const initFirebase = require('../firebase');
const admin = require('firebase-admin');
const axios = require('axios');

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { linkId, studentId, email } = req.body || {};

    if (!linkId || !studentId || !email) {
      return res.status(400).json({
        error: 'linkId, studentId and email are required'
      });
    }

    const db = initFirebase();

    // 🔎 Validate class link
    const linkRef = db.collection('referralLinks').doc(linkId);
    const linkSnap = await linkRef.get();

    if (!linkSnap.exists) {
      return res.status(404).json({ error: 'Link not found' });
    }

    const linkData = linkSnap.data();

    // ❌ Prevent duplicate enrollment
    const existingEnrollment = await db
      .collection('enrollments')
      .where('linkId', '==', linkId)
      .where('studentId', '==', studentId)
      .limit(1)
      .get();

    if (!existingEnrollment.empty) {
      return res.status(409).json({
        error: 'Student already enrolled'
      });
    }

    // 💰 Amount is locked on backend (Paystack expects kobo)
    const amountInKobo = Math.round(Number(linkData.amount) * 100);

    // 🔐 Initialize Paystack payment
    const paystackRes = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email,
        amount: amountInKobo,
        metadata: {
          linkId,
          studentId
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const paymentData = paystackRes.data?.data;

    if (!paymentData?.authorization_url || !paymentData?.reference) {
      return res.status(500).json({
        error: 'Failed to initialize payment'
      });
    }

    // 🧾 Save pending payment
    await db.collection('pendingPayments').doc(paymentData.reference).set({
      reference: paymentData.reference,
      linkId,
      studentId,
      email,
      amount: linkData.amount,
      status: 'pending',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // ✅ Send checkout URL to client
    res.status(200).json({
      success: true,
      authorizationUrl: paymentData.authorization_url,
      reference: paymentData.reference
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Server error' });
  }
};
