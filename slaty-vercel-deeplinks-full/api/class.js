import { classes } from "../lib/db.js";
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const token = req.query[0];
  const data = classes.get(token);

  if (!data || !data.active) return res.status(404).send("Class not found");
  if (Date.now() > data.expiresAt) return res.status(410).send("Class expired");

  const html = fs.readFileSync(
    path.join(process.cwd(), "public/payment.html"),
    "utf8"
  );

  res.send(html.replace("{{TOKEN}}", token).replace("{{AMOUNT}}", data.amount));
}
