const initFirebase = require('../firebase');

module.exports = async (req, res) => {
  try {
    const { linkId } = req.query;
    if (!linkId) return res.status(400).send('Missing linkId');

    const db = initFirebase();
    const linkRef = db.collection('referralLinks').doc(linkId);
    const linkSnap = await linkRef.get();
    if (!linkSnap.exists) return res.status(404).send('Link not found');

    const linkData = linkSnap.data();
    const appLink = `slaty://class/${linkId}`;
    const fallback = process.env.PLAY_STORE_URL || "https://play.google.com/store/apps/details?id=com.AbasifrekeEyo.slaty";

    res.writeHead(302, { Location: `${appLink}?fallback=${encodeURIComponent(fallback)}` });
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
