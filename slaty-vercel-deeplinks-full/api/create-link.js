module.exports = async function (req, res) {
  try {
    // ✅ Always JSON
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // ✅ Preflight
    if (req.method === "OPTIONS") {
      return res.status(200).json({ ok: true });
    }

    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        error: "Method not allowed",
      });
    }

    let body = req.body;

    if (!body) body = {};

    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({
          success: false,
          error: "Invalid JSON body",
        });
      }
    }

    const { tutorId, classId, amount } = body;

    if (!tutorId || !classId || !amount) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    // 🔑 generate token
    const token = Math.random().toString(36).slice(2);

    return res.status(200).json({
      success: true,
      deepLink: `https://slaty-backend.vercel.app/api/class?token=${token}`,
    });

  } catch (err) {
    console.error("CREATE LINK CRASH:", err);

    return res.status(500).json({
      success: false,
      error: "Server crashed",
    });
  }
};
