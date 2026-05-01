export default async function handler(req, res) {
  const { key, stpid, rt } = req.query;
  const url = `https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${key}&stpid=${stpid}&rt=${rt}&outputType=JSON`;
  try {
    const r = await fetch(url);
    const data = await r.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
