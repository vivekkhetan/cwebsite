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
function that sends two emails through Google SMTP (`smtp.gmail.com`) via
[Nodemailer](https://nodemailer.com): a lead notification to the company
inbox, and a summary confirmation to the client.

Required environment variables (see `.env.example`):

- `GOOGLE_SMTP_USER` — the Gmail or Google Workspace address that sends the
  emails (e.g. `vivek.khetan@cachemere.ai`).
- `GOOGLE_SMTP_APP_PASSWORD` — an **App Password** for that account, not its
  normal login password. Google blocks regular-password SMTP login. To
  generate one:
  1. Turn on 2-Step Verification on the Google account, if it isn't already
     (myaccount.google.com → Security).
  2. Go to myaccount.google.com/apppasswords.
  3. Create an app password (name it something like "Cachemere website"),
     copy the 16-character code it gives you.
- `COMPANY_NOTIFICATION_EMAIL` — where new lead notifications land. Leave
  blank to default to `GOOGLE_SMTP_USER`, i.e. the same inbox that's sending.

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
