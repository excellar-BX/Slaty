import fetch from "node-fetch";

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;

export async function initPaystack(email, amount, reference) {
  const res = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      amount: amount * 100,
      reference
    })
  });
  return res.json();
}

export async function verifyPaystack(reference) {
  const res = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    { headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` } }
  );
  return res.json();
}