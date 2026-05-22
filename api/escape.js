export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'No text' });
  const escaped = JSON.stringify(text).slice(1, -1);
  return res.status(200).json({ escaped });
}