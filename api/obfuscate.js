export default function handler(req, res) {
  if (req.method === "POST") {
    let { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: "No code provided" });
    }

    // Add header
    const obfuscatedCode = `--[[ Made By Hiroshi ]]---- Obfuscated By Hiroshi\n\n${code}`;

    // Set file download
    res.setHeader("Content-Disposition", "attachment; filename=obfuscated.lua");
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(obfuscatedCode);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
