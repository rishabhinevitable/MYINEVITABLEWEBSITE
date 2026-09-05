export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  const auth = req.headers.authorization
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // Placeholder automation endpoint. Connect this to your chosen AI/news provider
  // once its API key is added to Vercel Environment Variables.
  return res.status(200).json({
    ok: true,
    message: 'Daily finance blog job is ready.',
    nextStep: 'Connect an AI/news API to generate and publish the article.'
  })
}
