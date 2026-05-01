export default async (req) => {
  const url = new URL(req.url);
  const key = url.searchParams.get("key");
  const direction = url.searchParams.get("direction");
  const from = direction === "work" ? "41.9474,-87.6386" : "41.8827,-87.6356";
  const to   = direction === "work" ? "41.8827,-87.6356" : "41.9474,-87.6386";
  const ttUrl = `https://api.tomtom.com/routing/1/calculateRoute/${from}:${to}/json?key=${key}&traffic=true&travelMode=car`;
  try {
    const r = await fetch(ttUrl);
    const text = await r.text();
    return new Response(text, {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export const config = { path: "/api/tomtom" };
