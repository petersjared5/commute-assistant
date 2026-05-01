export default async (req) => {
  const url = new URL(req.url);
  const key = url.searchParams.get("key");
  const stpid = url.searchParams.get("stpid");
  const rt = url.searchParams.get("rt");
  const ttUrl = `https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${key}&stpid=${stpid}&rt=${rt}&outputType=JSON`;
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

export const config = { path: "/api/train" };
