# Slaty Deep Links Backend (Full)

This project provides serverless endpoints to generate and resolve referral deep links for the Slaty mobile app,
and to record enrollments/payments tied to a referral link.

## Endpoints

### POST /api/link/create
Create a referral link.
Body (JSON):
{
  "referrerId": "tutor_123",
  "classId": "class_456",
  "classTitle": "Intro to Math",
  "price": 5000, // optional, currency handled in app
  "expiresAt": "2025-12-31T23:59:59Z" // optional ISO date
}

Response:
{ "link": "https://<your-domain>/link/<id>", "id": "<id>" }

---

### GET /link/:id
Resolves the link, logs a click, and attempts to open the mobile app:
myapp://register?referrerId=...&classId=...&linkId=...

Falls back to Play Store.

---

### POST /api/enroll
Used by your app (after successful payment) or payment webhook to record enrollment.
Body (JSON):
{
  "linkId": "<id>",
  "studentId": "<uid>",
  "paymentId": "<payment-provider-id>",
  "amount": 5000
}

Response:
{ "success": true, "enrollmentId": "<id>" }

---

## Deployment (Vercel)

1. Upload this repo to GitHub and import to Vercel (or upload directly).
2. Set environment variables in Vercel:
   - FIREBASE_ADMIN_KEY — paste your Firebase service account JSON (string)
   - ANDROID_PACKAGE_NAME — e.g. com.slaty.app (optional)
   - PLAY_STORE_URL — optional, default derived from package name
   - MOBILE_URI_SCHEME — optional, e.g. myapp
   - BASE_URL — optional, if VERCEL_URL isn't set and you want a custom host
3. Deploy.

## App Integration

- Ensure your Android app handles the URI scheme (MOBILE_URI_SCHEME) and the `/register` path, parsing referrerId, classId and linkId.
- After payment completes, app should POST to `/api/enroll` to record enrollment and increment counters.
- You can set up server-side payment webhooks to call `/api/enroll` instead of the app if you prefer.

