const admin = require('firebase-admin');

function initFirebase() {
  if (!admin.apps.length) {
    const key = process.env.FIREBASE_ADMIN_KEY;
    if (!key) throw new Error('FIREBASE_ADMIN_KEY is not set');
    const serviceAccount = JSON.parse(key);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
  return admin.firestore();
}

module.exports = initFirebase;
