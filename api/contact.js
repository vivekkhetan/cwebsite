const RESEND_API_URL = "https://api.resend.com/emails";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const companyEmail = process.env.COMPANY_NOTIFICATION_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !companyEmail) {
    console.error("Missing RESEND_API_KEY or COMPANY_NOTIFICATION_EMAIL env var");
    return res.status(500).json({ error: "Email service not configured" });
  }

  const { name, company, email, phone, heardAbout, sector, message } = req.body || {};

  if (!name || !company || !email || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const rows = [
    ["Name", name],
    ["Company", company],
    ["Email", email],
    ["Phone", phone],
    ["Heard about us via", heardAbout || "—"],
    ["Sector", sector || "—"],
    ["Message", message || "—"],
  ];
  const summaryHtml = `<table cellpadding="0" cellspacing="0">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#5c6d93;font-weight:600;">${escapeHtml(
          k,
        )}</td><td style="padding:4px 0;">${escapeHtml(v)}</td></tr>`,
    )
    .join("")}</table>`;

  const send = (payload) =>
    fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

  try {
    const [notifyRes, clientRes] = await Promise.all([
      send({
        from: `Cachemere Cloud <${fromEmail}>`,
        to: [companyEmail],
        reply_to: email,
        subject: `New lead: ${company} (${name})`,
        html: `<h2>New "Talk to Us" submission</h2>${summaryHtml}`,
      }),
      send({
        from: `Cachemere Cloud <${fromEmail}>`,
        to: [email],
        subject: "We've got your message — Cachemere Cloud",
        html: `<p>Hi ${escapeHtml(name)},</p><p>Thanks for reaching out to Cachemere Cloud. Here's a summary of what you submitted — someone from our team will be in touch shortly.</p>${summaryHtml}<p>If anything above isn't right, just reply to this email.</p><p>— The Cachemere Cloud team</p>`,
      }),
    ]);

    if (!notifyRes.ok || !clientRes.ok) {
      const [notifyBody, clientBody] = await Promise.all([notifyRes.text(), clientRes.text()]);
      console.error("Resend error", { notifyBody, clientBody });
      return res.status(502).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Email send failed", err);
    return res.status(502).json({ error: "Failed to send email" });
  }
}

function escapeHtml(str = "") {
  return String(str).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );
}
