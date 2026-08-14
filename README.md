# Cachemere Cloud — Marketing Website

Pre-launch marketing site for a sovereign cloud infrastructure & AI-enabled
software company serving SMBs in India's tier 2/3 cities. Built with React,
React Router, Vite, and Tailwind CSS.

Brand name, tagline, and contact details live in `src/data/content.js`.

## Structure

- `/` — Home (hero, why-us, condensed product/solutions overview, security
  strip, how it works, contact form)
- `/products` — full infrastructure portfolio
- `/solutions` — the four industry solution sectors
- `/security` — security & compliance detail
- `/about` — founding story and team
- `/faq` — frequently asked questions

The "Talk to Us" contact form lives on the homepage (`#contact`) and is
reachable from every page via the sticky header CTA.

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the production build
```

## Content

All copy, product/sector data, FAQs, and contact details are centralized in
`src/data/content.js` for easy editing without touching component code.

## Contact form emails

Submitting the "Talk to Us" form calls `api/contact.js`, a Vercel serverless
function that sends a lead notification to the company inbox through
Microsoft 365 SMTP (`smtp.office365.com`) via
[Nodemailer](https://nodemailer.com). It's one-way — the client who
submitted the form does not receive an email.

Required environment variables (see `.env.example`):

- `SMTP_USER` — the Microsoft 365 mailbox that sends the emails
  (e.g. `vivek.khetan@cachemere.ai`).
- `SMTP_PASSWORD` — that account's password, or an app password if the
  account has MFA enabled (see below).
- `COMPANY_NOTIFICATION_EMAIL` — where new lead notifications land. Leave
  blank to default to `SMTP_USER`, i.e. the same inbox that's sending.

**Before this will work, an admin needs to enable SMTP AUTH for the
mailbox** — Microsoft 365 disables it by default on all mailboxes.

1. Go to admin.microsoft.com → **Users** → **Active users** → click the
   sending mailbox → **Mail** tab → **Manage email apps** → check
   **Authenticated SMTP** → **Save changes**.
   (Or via Exchange Online PowerShell:
   `Set-CASMailbox -Identity user@domain.com -SmtpClientAuthenticationDisabled $false`)
2. **If that account has MFA enabled** (common — many tenants turn this on
   by default via Security Defaults): a plain password won't authenticate.
   - If the tenant uses **legacy per-user MFA**, generate an app password
     for the account and use that as `SMTP_PASSWORD` instead.
   - If the tenant uses **Security Defaults or Conditional Access**, app
     passwords aren't available at all, and this basic SMTP approach won't
     authenticate — the simplest fix is a dedicated sending mailbox
     (e.g. `forms@cachemere.ai`) with MFA excluded, used only for this
     purpose. Tell me if you hit this and I can switch the integration to
     Microsoft Graph API with OAuth2 instead, which works regardless of
     MFA policy but needs an app registration in the Entra admin center.

Set these in Vercel under Project Settings → Environment Variables. To test
locally, copy `.env.example` to `.env.local`, fill in the values, and run:

```bash
npm install -g vercel
vercel dev
```

`npm run dev` (plain Vite) does not run the `/api` function, so the form
will fail locally unless you use `vercel dev`.

Note: Gmail's SMTP server generally requires the "from" address to match
(or be a verified alias of) `GOOGLE_SMTP_USER` — it will silently rewrite
a mismatched "from" to the authenticated account.
