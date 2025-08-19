const initFirebase = require('../firebase');
const { v4: uuidv4 } = require('uuid');

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const db = initFirebase();
    const { tutorId, classId, amount } = req.body || {};

    if (!tutorId || !classId || !amount) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const linkId = uuidv4();
    const deepLink = `https://slaty-backend.vercel.app/api/r/${linkId}`;

    await db.collection('referralLinks').doc(linkId).set({
      referrerId: tutorId,
      classId,
      amount,
      enrollments: 0,
      createdAt: new Date()
    });

    res.status(200).json({ success: true, deepLink, linkId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
