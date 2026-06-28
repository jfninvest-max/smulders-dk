# smulders.dk

Next.js 16 (App Router) website for Smulders Danmark — dansk forhandler af belgiske hestebokse og staldinventar.

## Stack

- Framework: Next.js 16.2.9 (App Router, statisk output)
- Language: TypeScript
- Styling: Tailwind CSS v4
- Animations: Framer Motion v12
- Runtime: Node.js (build) → static HTML/CSS/JS

## Commands

- Dev: `npm run dev`
- Build: `npm run build`
- Start (prod): `npm start`
- Lint: `npm run lint`

## Deploy Configuration (configured by /setup-deploy)

- Platform: Vercel
- Production URL: https://smulders.dk
- Deploy workflow: auto-deploy on push to master via Vercel GitHub integration
- Merge method: direct push to master
- Project type: Next.js static web app
- Post-deploy health check: https://smulders.dk

### Custom deploy hooks

- Pre-merge: `npm run build` (verify 0 errors before pushing)
- Deploy trigger: `git push origin master` (Vercel picks up automatically)
- Deploy status: check https://vercel.com/dashboard or `curl -sf https://smulders.dk`
- Health check: `curl -sf https://smulders.dk -o /dev/null -w "%{http_code}"`

### First-time Vercel setup (one-time)

1. Install CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Link project: `vercel link` (run once in project root)
4. Set custom domain in Vercel dashboard: smulders.dk
5. After that: every `git push origin master` auto-deploys

## Architecture

- `app/` — Next.js App Router pages and components
- `app/components/` — Nav, Footer (shared)
- `app/produkter/` — Product subpages (8 products)
- `app/installationer/` — Reference projects gallery
- `app/om-os/` — About page with YouTube modal and partners
- `app/kontakt/` — Contact page
- `public/` — sitemap.xml, robots.txt, llms.txt

## Rules

- All content is Danish — no Polish text, phone numbers, or emails in app/
- Contact: only smulders.dk@gmail.com
- Terminology: staldboks (not stallboks), ladedøre (not lavedøre), staldbygning (not stallbygning)
- Framer Motion v12: ease arrays must use `as [number, number, number, number]` type assertion
- Production build required for testing (`npm run build && npm start`), not dev server
- Run `npm run build` and verify 0 errors before every push
