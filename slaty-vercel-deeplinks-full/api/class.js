const initFirebase = require("../firebase");

module.exports = async function (req, res) {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).send("Invalid class link");
    }

    const db = initFirebase();
    const doc = await db.collection("classes").doc(token).get();

    if (!doc.exists) {
      return res.status(404).send("Class not found");
    }

    const classData = doc.data();

    // ✅ TEMP RESPONSE (later: redirect to payment)
    return res.status(200).json({
      success: true,
      class: classData,
    });
  } catch (err) {
    console.error("CLASS FETCH ERROR:", err);
    return res.status(500).send("Server error");
  }
};
