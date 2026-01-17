import admin from "firebase-admin";
import axios from "axios"; // You'll need axios for paystack request

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
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token, email } = req.body;

  if (!token || !email) {
    return res.status(400).json({ error: "Missing token or email" });
  }

  try {
    // 2. Fetch class from Firestore
    const classRef = db.collection("classes").doc(token);
    const classDoc = await classRef.get();

    if (!classDoc.exists) {
      return res.status(404).json({ error: "Class not found or expired" });
    }

    const classData = classDoc.data();
    
    // Optional: Check if class is still active/valid
    if (classData.expiresAt && Date.now() > classData.expiresAt) {
      return res.status(410).json({ error: "Class link has expired" });
    }

    const amountInKobo = classData.amount * 100; // Paystack takes kobo
    
    // 3. Initialize Paystack Transaction
    const paystackResponse = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount: amountInKobo,
        // Paystack callback URL (where they return after payment)
        callback_url: "https://slaty-backend.vercel.app/api/verify-payment", 
        metadata: {
          classToken: token, // Pass token through metadata to verify later
          custom_fields: [
            { display_name: "Class ID", variable_name: "class_id", value: classData.classId }
          ]
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const { authorization_url, reference } = paystackResponse.data.data;

    // 4. Save pending payment to Firestore (instead of memory)
    await db.collection("payments").doc(reference).set({
      reference,
      classToken: token,
      email,
      amount: classData.amount,
      status: "pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // 5. Redirect or return URL
    // If called from the HTML form, we might want to redirect:
    // res.redirect(authorization_url);
    
    // If called via AJAX/JSON:
    res.status(200).json({ authorizationUrl: authorization_url });

  } catch (err) {
    console.error("PAYMENT INIT ERROR:", err?.response?.data || err);
    res.status(500).json({ error: "Payment initialization failed" });
  }
}
