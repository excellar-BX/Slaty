import crypto from "crypto";
import { classes } from "../lib/db.js";

export default function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        error: "Method not allowed",
      });
    }

    const { tutorId, classId, amount } = req.body || {};

    if (!tutorId || !classId || !amount) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    const token = crypto.randomBytes(16).toString("hex");

    classes[token] = {
      tutorId,
      classId,
      amount,
      createdAt: Date.now(),
      expiresAt: Date.now() + 60 * 60 * 1000, // 1 hour
    };

    return res.status(200).json({
      success: true,
      deepLink: `${process.env.BASE_URL}/class/${token}`,
    });
  } catch (err) {
    console.error("Create link error:", err);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}
