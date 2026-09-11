// Shared form-validation rules for the "Talk to Us" form.
// Imported by both the frontend (ContactSection.jsx) and the serverless
// function (api/contact.js) so a request that skips the browser's JS still
// gets the same checks applied server-side.

// Common free/consumer webmail providers — not an exhaustive list, but
// covers the large majority of personal addresses people would type in.
export const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.in",
  "yahoo.co.uk",
  "ymail.com",
  "rocketmail.com",
  "hotmail.com",
  "hotmail.co.in",
  "hotmail.co.uk",
  "outlook.com",
  "outlook.co.in",
  "live.com",
  "live.in",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "gmx.com",
  "gmx.net",
  "web.de",
  "mail.com",
  "inbox.com",
  "yandex.com",
  "yandex.ru",
  "mail.ru",
  "rediffmail.com",
  "rediff.com",
  "zoho.com",
  "fastmail.com",
  "tutanota.com",
  "hey.com",
  "qq.com",
  "163.com",
  "126.com",
  "sina.com",
  "comcast.net",
  "verizon.net",
  "att.net",
  "sbcglobal.net",
  "cox.net",
  "btinternet.com",
]);

export function isBusinessEmail(email) {
  const domain = String(email).split("@")[1]?.toLowerCase().trim();
  if (!domain) return false;
  return !PERSONAL_EMAIL_DOMAINS.has(domain);
}

// Requires at least a first and last name: two or more whitespace-separated
// tokens, each with at least one letter.
export function isValidFullName(name) {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  return parts.length >= 2 && parts.every((p) => /[a-zA-Z]/.test(p));
}
