import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const smtpUser = process.env.GOOGLE_SMTP_USER;
  const smtpPass = process.env.GOOGLE_SMTP_APP_PASSWORD;
  const companyEmail = process.env.COMPANY_NOTIFICATION_EMAIL || smtpUser;

  if (!smtpUser || !smtpPass) {
    console.error("Missing GOOGLE_SMTP_USER or GOOGLE_SMTP_APP_PASSWORD env var");
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

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    await Promise.all([
      transporter.sendMail({
        from: `Cachemere Cloud <${smtpUser}>`,
        to: companyEmail,
        replyTo: email,
        subject: `New lead: ${company} (${name})`,
        html: `<h2>New "Talk to Us" submission</h2>${summaryHtml}`,
      }),
      transporter.sendMail({
        from: `Cachemere Cloud <${smtpUser}>`,
        to: email,
        subject: "We've got your message — Cachemere Cloud",
        html: `<p>Hi ${escapeHtml(name)},</p><p>Thanks for reaching out to Cachemere Cloud. Here's a summary of what you submitted — someone from our team will be in touch shortly.</p>${summaryHtml}<p>If anything above isn't right, just reply to this email.</p><p>— The Cachemere Cloud team</p>`,
      }),
    ]);

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
