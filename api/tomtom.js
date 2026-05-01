export default async function handler(req, res) {
  const { key, direction } = req.query;
  const from = direction === "work" ? "41.9474,-87.6386" : "41.8827,-87.6356";
  const to   = direction === "work" ? "41.8827,-87.6356" : "41.9474,-87.6386";
  const url = `https://api.tomtom.com/routing/1/calculateRoute/${from}:${to}/json?key=${key}&traffic=true&travelMode=car`;
  try {
    const r = await fetch(url);
    const text = await r.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (!r.ok) {
      return res.status(200).json({ error: `TomTom ${r.status}`, detail: text.slice(0, 300), url });
    }
    res.status(200).json(JSON.parse(text));
  } catch (e) {
    res.status(200).json({ error: e.message });
  }
}
