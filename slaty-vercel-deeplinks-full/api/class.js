import { classes } from "../lib/db.js";

export default function handler(req, res) {
  const { token } = req.query;

  if (!token) {
    return res.send("<h2>Invalid class link</h2>");
  }

  const data = classes[token];

  if (!data) {
    return res.send("<h2>Class not found</h2>");
  }

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
          <input name="email" type="email" placeholder="Email" required />
          <br/><br/>
          <button>Pay & Join Class</button>
        </form>
      </body>
    </html>
  `);
}
