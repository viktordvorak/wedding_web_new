const allowedOrigins = [
  'http://localhost:4200',
  'http://localhost:3000',
  'https://www.baruaviktor.cz',
  'https://baruaviktor.cz',
];

module.exports = async function handler(req, res) {
  const origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      message: 'Method not allowed',
    });
  }

  const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!appsScriptUrl) {
    return res.status(500).json({
      ok: false,
      message: 'GOOGLE_APPS_SCRIPT_URL is not configured',
    });
  }

  try {
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();

    if (!response.ok || text.includes('<!DOCTYPE html>')) {
      return res.status(500).json({
        ok: false,
        message: 'Apps Script failed or returned HTML',
        status: response.status,
        response: text.slice(0, 500),
      });
    }

    return res.status(200).json({
      ok: true,
      response: text,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'RSVP submit failed',
      error: error && error.message ? error.message : String(error),
    });
  }
};