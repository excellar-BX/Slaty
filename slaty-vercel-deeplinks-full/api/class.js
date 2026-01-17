import admin from "firebase-admin";

// ✅ Fix: Initialize Firebase if it hasn't been initialized yet
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    ),
  });
}

const db = admin.firestore();

export default async function handler(req, res) {
  const { token } = req.query;

  if (!token) {
    return res.status(400).send("<h2>Invalid class link</h2>");
  }

  try {
    const doc = await db.collection("classes").doc(token).get();

    if (!doc.exists) {
      return res.status(404).send("<h2>Class not found</h2>");
    }

    const data = doc.data();

    if (Date.now() > data.expiresAt) {
      return res.status(410).send("<h2>Class expired</h2>");
    }

    // ✅ Improved UI
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #f0f2f5; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; max-width: 400px; width: 90%; }
            h2 { color: #1a1a1a; margin-bottom: 0.5rem; text-transform: capitalize; }
            .amount { font-size: 1.5rem; color: #2563eb; font-weight: bold; margin: 1rem 0; }
            input { width: 100%; padding: 12px; margin: 8px 0; border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box; }
            button { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 1rem; }
            button:hover { background: #1d4ed8; }
          </style>
        </head>
        <body>
          <div class="card">
            <h2>${data.classId.replace(/-/g, ' ')}</h2>
            <div class="amount">₦${data.amount.toLocaleString()}</div>
            <p style="color: #666; margin-bottom: 1.5rem;">Enter your email to join this class.</p>
            
            <form action="/api/init-payment" method="POST">
              <input type="hidden" name="token" value="${token}" />
              <input type="email" name="email" placeholder="student@example.com" required />
              <button type="submit">Pay & Join Class</button>
            </form>
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    console.error("PAGE ERROR:", error);
    res.status(500).send("<h2>System Error</h2>");
  }
}
