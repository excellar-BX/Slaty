const initFirebase = require('../firebase');

module.exports = async (req, res) => {
  try {
    const { linkId } = req.query;
    if (!linkId) return res.status(400).send('Missing linkId');

    const db = initFirebase();
    const linkRef = db.collection('referralLinks').doc(linkId);
    const linkSnap = await linkRef.get();
    if (!linkSnap.exists) return res.status(404).send('Link not found');

    // Android Intent URL (this is the key)
    const intentUrl =
      `intent://class/${linkId}` +
      `#Intent;scheme=slaty;package=com.AbasifrekeEyo.slaty;` +
      `S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.AbasifrekeEyo.slaty;end`;

    res.writeHead(302, { Location: intentUrl });
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
