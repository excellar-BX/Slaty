const { v4: uuidv4 } = require('uuid');
const initFirebase = require('../firebase');

module.exports = async (req, res) => {
  // ✅ Always return JSON
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // ✅ Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ ok: true });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // ✅ Defensive body parsing
    const body = typeof req.body === 'string'
      ? JSON.parse(req.body)
      : req.body;

    const { tutorId, classId, amount } = body || {};

    if (!tutorId || !classId || !amount) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const db = initFirebase(); // may throw — now safely inside try

    const linkId = uuidv4();
    const deepLink = `https://slaty-backend.vercel.app/api/r/${linkId}`;

    await db.collection('referralLinks').doc(linkId).set({
      tutorId,
      classId,
      amount: Number(amount),
      enrollments: 0,
      active: true,
      createdAt: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      linkId,
      deepLink,
    });

  } catch (err) {
    console.error('Create class error:', err);

    // ✅ ALWAYS return JSON
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal server error',
    });
  }
};
