export default async function handler(req, res) {
  const { key, stpid } = req.query;
  const url = `https://www.ctabustracker.com/bustime/api/v2/getpredictions?key=${key}&stpid=${stpid}&rt=135&format=json`;
  try {
    const r = await fetch(url);
    const data = await r.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
