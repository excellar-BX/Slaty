const express = require("express");
const router = express.Router();
const axios = require("axios");
const initFirebase = require("../firebase");
const admin = require("firebase-admin");

router.post("/", async (req, res) => {
  try {
    const db = initFirebase();
    const { reference, linkId, studentId } = req.body || {};

    if (!reference || !linkId || !studentId) {
      return res.status(400).json({ error: "reference, linkId, studentId required" });
    }

    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` }
    });

    const data = response.data;
    if (data.status !== true || data.data.status !== "success") {
      return res.status(400).json({ error: "Payment not verified" });
    }

    const amount = data.data.amount / 100;

    const linkRef = db.collection("referralLinks").doc(linkId);
    const linkSnap = await linkRef.get();
    if (!linkSnap.exists) return res.status(404).json({ error: "Link not found" });

    const linkData = linkSnap.data();
    if (amount !== linkData.amount) {
      return res.status(400).json({ error: "Amount mismatch" });
    }

    const enrollRef = await db.collection("enrollments").add({
      linkId,
      tutorId: linkData.tutorId,
      classId: linkData.classId,
      studentId,
      paymentId: reference,
      amount,
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
