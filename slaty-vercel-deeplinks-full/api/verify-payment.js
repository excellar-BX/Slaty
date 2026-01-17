import admin from "firebase-admin";

// 1. Initialize Firebase
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    ),
  });
}

const db = admin.firestore();

export default async function handler(req, res) {
  // Paystack sends a GET request for callbacks (redirects)
  // or a POST for webhooks. If you are using this as the "callback_url", it's usually a GET with ?reference=...
  const reference = req.query.reference || req.body.reference;

  if (!reference) {
    return res.status(400).json({ success: false, error: "No reference provided" });
  }

  try {
    // 2. Look up the payment in Firestore
    const paymentRef = db.collection("payments").doc(reference);
    const paymentDoc = await paymentRef.get();

    if (!paymentDoc.exists) {
      return res.status(404).json({ success: false, error: "Payment record not found" });
    }

    const paymentData = paymentDoc.data();
    const token = paymentData.classToken;

    // 3. Verify with Paystack
    const verifyResponse = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.status || verifyData.data.status !== "success") {
      return res.status(400).json({ success: false, error: "Payment verification failed" });
    }

    // 4. Update status in Firestore
    await paymentRef.update({
      status: "success",
      paidAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // 5. Success! Return the Jitsi link
    const jitsiUrl = `https://meet.jit.si/Slaty-${token}-student#config.disableDeepLinking=true`;
    
    // Check request method to determine response type
    // If browser redirect (GET), we might want to show a success page or redirect to Jitsi
    if (req.method === "GET") {
       res.send(`
         <html>
           <body style="font-family:sans-serif;text-align:center;padding:50px;">
             <h1 style="color:green">Payment Successful!</h1>
             <p>Redirecting you to class...</p>
             <script>window.location.href = "${jitsiUrl}";</script>
             <a href="${jitsiUrl}">Click here if not redirected</a>
           </body>
         </html>
       `);
    } else {
       // Using JSON for API usage
       res.json({ success: true, joinUrl: jitsiUrl });
    }

  } catch (error) {
    console.error("VERIFY ERROR:", error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
}
