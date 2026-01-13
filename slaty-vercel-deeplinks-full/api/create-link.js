import admin from "firebase-admin";
import { randomBytes } from "crypto";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    ),
  });
}

const db = admin.firestore();

export default async function handler(req, res) {
  try {
    res.setHeader("Content-Type", "application/json");

    if (req.method !== "POST") {
      return res.status(405).json({ success: false, error: "Method not allowed" });
    }

    const { tutorId, classId, amount } = req.body || {};

    if (!tutorId || !classId || !amount) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    const token = randomBytes(8).toString("hex");

    const expiresAt = Date.now() + 60 * 60 * 1000; // 1 hour

    await db.collection("classes").doc(token).set({
      token,
      tutorId,
      classId,
      amount,
      status: "active",
      enrollments: 0,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      expiresAt,
    });

    return res.status(200).json({
      success: true,
      deepLink: `https://slaty-backend.vercel.app/api/class?token=${token}`,
    });
  } catch (err) {
    console.error("CREATE LINK ERROR:", err);
    return res.status(500).json({ success: false, error: "Server crashed" });
  }
}
