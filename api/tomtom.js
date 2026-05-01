export default async function handler(req, res) {
  const { key, from, to } = req.query;
  const url = `https://api.tomtom.com/routing/1/calculateRoute/${from}:${to}/json?key=${key}&traffic=true&travelMode=car`;
  try {
    const r = await fetch(url);
    const data = await r.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
