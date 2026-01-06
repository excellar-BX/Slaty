import { v4 as uuid } from "uuid";
import { classes, payments } from "../lib/db.js";
import { initPaystack } from "../lib/paystack.js";

export default async function handler(req, res) {
  const { token, email } = req.body;
  const cls = classes.get(token);

  if (!cls || !cls.active) return res.status(404).json({ error: "Invalid class" });

  const reference = uuid();
  payments.set(reference, token);

  const pay = await initPaystack(email, cls.amount, reference);
  res.json({ authorizationUrl: pay.data.authorization_url });
}
