import admin from "firebase-admin";

// 1. Initialize Firebase (Singleton pattern to prevent crashes)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    ),
  });
}

const db = admin.firestore();

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { token, email } = req.body;

  if (!token || !email) {
    return res.status(400).json({ error: "Missing required fields: token and email." });
  }

  try {
    // 2. Validate Class Token in Firestore
    const classRef = db.collection("classes").doc(token);
    const classDoc = await classRef.get();

    if (!classDoc.exists) {
      return res.status(404).json({ error: "Class not found." });
    }

    const classData = classDoc.data();

    // Check expiration
    if (classData.expiresAt && Date.now() > classData.expiresAt) {
      return res.status(410).json({ error: "This class link has expired." });
    }

    const amountInKobo = Math.round(classData.amount * 100);

    // 3. Initialize Paystack Transaction
    const paystackResponse = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        amount: amountInKobo,
        callback_url: "https://slaty-backend.vercel.app/api/verify-payment",
        metadata: {
          classToken: token, 
          custom_fields: [
            { display_name: "Class ID", variable_name: "class_id", value: classData.classId }
          ]
        }
      })
    });

    const paystackData = await paystackResponse.json();

    if (!paystackResponse.ok || !paystackData.status) {
      console.error("PAYSTACK ERROR:", paystackData);
      return res.status(400).json({ 
        error: "Payment initialization failed", 
        details: paystackData.message 
      });
    }

    const { authorization_url, reference } = paystackData.data;

    // 4. Save Pending Payment to Firestore
    await db.collection("payments").doc(reference).set({
      reference,
      classToken: token,
      email,
      amount: classData.amount,
      status: "pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // 5. Redirect user directly to Paystack
return res.redirect(authorization_url);
    
  } catch (err) {
    console.error("SERVER ERROR:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
