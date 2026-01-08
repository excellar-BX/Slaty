export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        error: "Method not allowed",
      });
    }

    let body = req.body;

    // Vercel sometimes sends body as string
    if (typeof body === "string") {
      body = JSON.parse(body);
    }

    const { tutorId, classId, amount } = body || {};

    if (!tutorId || !classId || !amount) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    const token = Math.random().toString(36).substring(2, 15);

    return res.status(200).json({
      success: true,
      deepLink: `https://slaty-backend.vercel.app/api/class?token=${token}`,
    });
  } catch (err) {
    console.error("CREATE LINK ERROR:", err);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}
