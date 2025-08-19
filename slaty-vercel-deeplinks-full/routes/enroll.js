const express = require("express");
const router = express.Router();
const initFirebase = require("../firebase");
const admin = require("firebase-admin");

router.post("/", async (req, res) => {
  try {
    const db = initFirebase();
    const { linkId, studentId, paymentId, amount } = req.body || {};

    if (!linkId || !studentId || !paymentId) {
      return res.status(400).json({ error: "linkId, studentId and paymentId required" });
    }

    const linkRef = db.collection("referralLinks").doc(linkId);
    const linkSnap = await linkRef.get();
    if (!linkSnap.exists) return res.status(404).json({ error: "Link not found" });

    const linkData = linkSnap.data();

    if (amount && amount !== linkData.amount) {
      return res.status(400).json({ error: "Amount mismatch" });
    }

    const enrollRef = await db.collection("enrollments").add({
      linkId,
      tutorId: linkData.tutorId,
      classId: linkData.classId,
      studentId,
      paymentId,
      amount: linkData.amount,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    await linkRef.update({
      enrollments: admin.firestore.FieldValue.increment(1)
    });

    res.json({ success: true, enrollmentId: enrollRef.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
