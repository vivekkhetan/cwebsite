const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const tenantId = process.env.MS_TENANT_ID;
  const clientId = process.env.MS_CLIENT_ID;
  const clientSecret = process.env.MS_CLIENT_SECRET;
  const senderEmail = process.env.MS_SENDER_EMAIL;
  const companyEmail = process.env.COMPANY_NOTIFICATION_EMAIL || senderEmail;

  if (!tenantId || !clientId || !clientSecret || !senderEmail) {
    console.error(
      "Missing one of MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, MS_SENDER_EMAIL env vars",
    );
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

  try {
    const tokenRes = await fetch(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          scope: "https://graph.microsoft.com/.default",
          grant_type: "client_credentials",
        }),
      },
    );

    if (!tokenRes.ok) {
      console.error("Microsoft token request failed", await tokenRes.text());
      return res.status(502).json({ error: "Failed to send email" });
    }

    const { access_token: accessToken } = await tokenRes.json();

    const sendRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(senderEmail)}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: `New lead: ${company} (${name})`,
            body: { contentType: "HTML", content: `<h2>New "Talk to Us" submission</h2>${summaryHtml}` },
            toRecipients: [{ emailAddress: { address: companyEmail } }],
            replyTo: [{ emailAddress: { address: email } }],
          },
          saveToSentItems: true,
        }),
      },
    );

    if (!sendRes.ok) {
      console.error("Microsoft Graph sendMail failed", await sendRes.text());
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
