export default async (req) => {
  const url = new URL(req.url);
  const key = url.searchParams.get("key");
  const stpid = url.searchParams.get("stpid");
  const ttUrl = `https://www.ctabustracker.com/bustime/api/v2/getpredictions?key=${key}&stpid=${stpid}&rt=135&format=json`;
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

export const config = { path: "/api/bus" };
