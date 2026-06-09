import process from "node:process";

export default async function handler(
  req: any,
  res: any
) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const appsScriptUrl = process.env['GOOGLE_APPS_SCRIPT_URL'];
  console.log('GOOGLE_APPS_SCRIPT_URL:', process.env['GOOGLE_APPS_SCRIPT_URL']);

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

    return res.status(200).json({
      ok: true,
      response: text,
    });
  } catch (error) {
    console.error('RSVP submit failed:', error);

    return res.status(500).json({
      ok: false,
      message: 'RSVP submit failed',
    });
  }
}