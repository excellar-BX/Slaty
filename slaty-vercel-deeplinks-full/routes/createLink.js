const express = require("express");
const router = express.Router();
const initFirebase = require("../firebase");
const { v4: uuidv4 } = require("uuid");

router.post("/", async (req, res) => {
  try {
    const db = initFirebase();
    const { tutorId, classId, amount } = req.body;

    if (!tutorId || !classId || !amount) {
      return res.status(400).json({ error: "tutorId, classId, and amount required" });
    }

    const linkId = uuidv4();

    await db.collection("referralLinks").doc(linkId).set({
      tutorId,
      classId,
      amount,
      createdAt: new Date().toISOString(),
      enrollments: 0
    });

    const link = `https://slaty-backend.vercel.app/l/${linkId}`;

    res.json({ success: true, linkId, link });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
