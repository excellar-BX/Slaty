const initFirebase = require('../firebase');
const { v4: uuidv4 } = require('uuid');

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const db = initFirebase();
    const { tutorId, title, description, amount } = req.body || {};

    if (!tutorId || !title || !description || !amount) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const classId = uuidv4();
    await db.collection('classes').doc(classId).set({
      tutorId,
      title,
      description,
      amount,
      createdAt: new Date()
    });

    // Generate linkId
    const linkId = uuidv4();
    const deepLink = `https://slaty-backend.vercel.app/api/r/${linkId}`;

    await db.collection('referralLinks').doc(linkId).set({
      referrerId: tutorId,
      classId,
      amount,
      enrollments: 0,
      createdAt: new Date()
    });

    res.status(200).json({ success: true, deepLink, classId, linkId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
