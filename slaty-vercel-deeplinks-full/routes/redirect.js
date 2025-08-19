const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.AbasifrekeEyo.slaty";

  res.redirect(
    302,
    `intent://class/${id}#Intent;scheme=slaty;package=com.AbasifrekeEyo.slaty;S.browser_fallback_url=${encodeURIComponent(
      PLAY_STORE_URL
    )};end`
  );
});

module.exports = router;
