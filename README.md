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
function that sends a lead notification straight through Microsoft's SMTP
server (`smtp-mail.outlook.com:587`) via
[Nodemailer](https://nodemailer.com) — no third-party email service. It's
one-way — the client who submitted the form does not receive an email.

Required environment variables (see `.env.example`):

- `SMTP_USER` — the mailbox that authenticates and sends
  (e.g. `info@cachemere.ai`).
- `SMTP_PASSWORD` — that account's password, or an app password if the
  account has MFA enabled.
- `COMPANY_NOTIFICATION_EMAIL` — where new lead notifications land
  (e.g. `vivek.khetan@cachemere.ai`). Leave blank to default to
  `SMTP_USER` instead, i.e. the same inbox that's sending.

If the mailbox has MFA enabled and login fails, generate an app password
for it instead of using the normal account password (Microsoft account
security settings → Advanced security options → App passwords). If app
passwords aren't available at all (common on tenants with Security
Defaults or Conditional Access), this basic-auth approach can't
authenticate — tell me and we can switch to Microsoft Graph API with
OAuth2 instead, which works regardless of that policy.

Set these in Vercel under Project Settings → Environment Variables. To test
locally, copy `.env.example` to `.env.local`, fill in the values, and run:

```bash
npm install -g vercel
vercel dev
```

`npm run dev` (plain Vite) does not run the `/api` function, so the form
will fail locally unless you use `vercel dev`.
