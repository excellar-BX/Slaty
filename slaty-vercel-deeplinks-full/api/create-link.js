import { v4 as uuid } from "uuid";
import { classes } from "../lib/db.js";

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method not allowed");

  const { tutorId, classId, amount } = req.body;
  if (!tutorId || !classId || !amount)
    return res.status(400).json({ error: "Missing fields" });

  const token = uuid();
  classes.set(token, {
    tutorId,
    classId,
    amount,
    expiresAt: Date.now() + 60 * 60 * 1000,
    active: true
  });

  res.json({
    deepLink: `https://slaty-backend.vercel.app/class/${token}`
  });
}
