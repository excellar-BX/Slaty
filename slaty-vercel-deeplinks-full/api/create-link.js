module.exports = function (req, res) {
  res.setHeader("Content-Type", "application/json");

  return res.status(200).json({
    success: true,
    message: "Backend is alive",
  });
};


    let body = req.body;

    if (!body) {
      body = {};
    }

    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch (e) {
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
