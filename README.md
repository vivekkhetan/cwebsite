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
function that sends a lead notification through the **Microsoft Graph
API**, authenticating as a registered Azure/Entra app (OAuth2 client
credentials) rather than logging into a mailbox — no third-party email
service, no mailbox password anywhere, and it works regardless of MFA or
Conditional Access policy. It's one-way — the client who submitted the
form does not receive an email.

Required environment variables (see `.env.example`):

- `MS_TENANT_ID`, `MS_CLIENT_ID`, `MS_CLIENT_SECRET` — from the app
  registration below.
- `MS_SENDER_EMAIL` — the mailbox the app sends as (e.g. `info@cachemere.ai`).
- `COMPANY_NOTIFICATION_EMAIL` — where new lead notifications land
  (e.g. `vivek.khetan@cachemere.ai`). Leave blank to default to
  `MS_SENDER_EMAIL` instead.

### One-time setup in the Microsoft Entra admin center

Needs an account with permission to register apps and grant admin consent
(Global Admin or Application Administrator).

1. Go to **entra.microsoft.com** → **Identity** → **Applications** →
   **App registrations** → **New registration**.
   - Name it something like `Cachemere website contact form`.
   - Leave the other defaults, click **Register**.
2. On the app's **Overview** page, copy the **Application (client) ID**
   and **Directory (tenant) ID** — these are `MS_CLIENT_ID` and
   `MS_TENANT_ID`.
3. Go to **Certificates & secrets** → **Client secrets** → **New client
   secret**. Add a description, pick an expiry, click **Add**, then
   **immediately copy the "Value" column** (not the Secret ID) — this is
   `MS_CLIENT_SECRET`, and it's only shown once.
4. Go to **API permissions** → **Add a permission** → **Microsoft Graph**
   → **Application permissions** → search for and check **Mail.Send** →
   **Add permissions**.
5. Still on **API permissions**, click **Grant admin consent for
   [your org]** and confirm. Without this step, sending will fail even
   with everything else correct.
6. *(Recommended)* Restrict the app to only send as `info@cachemere.ai`,
   not any mailbox in the tenant, via Exchange Online PowerShell:
   ```powershell
   Connect-ExchangeOnline
   New-ApplicationAccessPolicy -AppId "<MS_CLIENT_ID>" `
     -PolicyScopeGroupId "info@cachemere.ai" `
     -AccessRight RestrictAccess `
     -Description "Contact form — can only send as info@cachemere.ai"
   ```
   Skipping this step isn't a functional blocker, just a wider blast
   radius if the client secret ever leaked.

Set these in Vercel under Project Settings → Environment Variables. To test
locally, copy `.env.example` to `.env.local`, fill in the values, and run:

```bash
npm install -g vercel
vercel dev
```

`npm run dev` (plain Vite) does not run the `/api` function, so the form
will fail locally unless you use `vercel dev`.
