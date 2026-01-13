import admin from "firebase-admin";

const db = admin.firestore();

export default async function handler(req, res) {
  const { token } = req.query;

  if (!token) {
    return res.status(400).send("<h2>Invalid class link</h2>");
  }

  const doc = await db.collection("classes").doc(token).get();

  if (!doc.exists) {
    return res.status(404).send("<h2>Class not found</h2>");
  }

  const data = doc.data();

  if (Date.now() > data.expiresAt) {
    return res.status(410).send("<h2>Class expired</h2>");
  }

  res.send(`
    <html>
      <body style="font-family:sans-serif;text-align:center;padding:40px">
        <h2>${data.classId}</h2>
        <p>Amount: ₦${data.amount}</p>

        <form action="/api/init-payment" method="POST">
          <input type="hidden" name="token" value="${token}" />
          <input type="email" name="email" placeholder="Email" required />
          <br/><br/>
          <button>Pay & Join Class</button>
        </form>
      </body>
    </html>
  `);
}
