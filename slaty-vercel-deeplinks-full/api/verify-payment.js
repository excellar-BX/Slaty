import { payments } from "../lib/db.js";
import { verifyPaystack } from "../lib/paystack.js";

export default async function handler(req, res) {
  const { reference } = req.body;
  const token = payments.get(reference);
  if (!token) return res.json({ success: false });

  const verification = await verifyPaystack(reference);
  if (verification.data.status !== "success")
    return res.json({ success: false });

  res.json({
    success: true,
    joinUrl: `https://meet.jit.si/Slaty-${token}-student#config.disableDeepLinking=true`
  });
}
