import { db } from "../lib/db.js";

export default async function handler(req, res) {
  const { token } = req.query;

  if (!token) return res.send("<h2>Invalid link</h2>");

  const doc = await db.collection("classes").doc(token).get();

  if (!doc.exists) {
    return res.send("<h2>Class not found</h2>");
  }

  const data = doc.data();

  if (Date.now() > data.expiresAt) {
    return res.send("<h2>Class expired</h2>");
  }

  res.send(`
    <html>
      <body style="font-family:sans-serif;text-align:center;padding:40px">
        <h2>${data.classId}</h2>
        <p>₦${data.amount}</p>

        <form action="/api/init-payment" method="POST">
          <input type="hidden" name="token" value="${token}" />
          <input name="email" type="email" required />
          <br/><br/>
          <button>Pay & Join Class</button>
        </form>
      </body>
    </html>
  `);
}
