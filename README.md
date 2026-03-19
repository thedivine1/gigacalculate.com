# Gigacalculate

Gigacalculate is being built as a high-scale calculator platform to compete with calculator directories such as Calculator.net, OmniCalculator, and UnitConverter.

This repository currently provides a **production-ready MVP homepage** with:

- Category-first information architecture for future calculator pages.
- SEO/social metadata setup for `https://www.gigacalculate.com`.
- Search-engine crawling defaults (`robots.txt` + `sitemap.xml`).
- A clean launch path for static hosting.

---

## Quick start

```bash
npm install
npm start
```

Open `http://localhost:3000`.

---

## Production build

```bash
npm run build
```

Output is generated in the `build/` directory.

---


## How to test this repo before going live

### 1) Run it locally (development mode)
```bash
npm install
npm start
```
Then open `http://localhost:3000` and test:
- Layout and responsive behavior (mobile + desktop)
- Links/buttons on the homepage
- Browser console (no runtime errors)

### 2) Validate tests and production build
```bash
npm test -- --watchAll=false
npm run build
```
This verifies unit tests and confirms the app compiles in production mode.

### 3) Preview the exact production build locally
```bash
npx serve -s build
```
Then open the URL printed by `serve` (usually `http://localhost:3000` or `http://localhost:5000`).

This step is important because it shows exactly what users will see after deployment.

---

## How to see it online (staging + real domain)

### Fastest way: Vercel preview deployments
1. Push code to GitHub.
2. Import repo into Vercel.
3. Every commit gets a preview URL like `https://<project>-<hash>.vercel.app`.
4. Open that preview URL on phone + desktop and verify visuals, metadata, and behavior.

### Go live on your domain
1. In Vercel, add `www.gigacalculate.com` as a domain.
2. Update DNS at your registrar with Vercel-provided records.
3. After DNS propagates, verify:
   - `https://www.gigacalculate.com` loads correctly
   - `https://www.gigacalculate.com/robots.txt` is accessible
   - `https://www.gigacalculate.com/sitemap.xml` is accessible
4. Submit sitemap in Google Search Console and Bing Webmaster.

---
## Deploy to your domain (recommended fast path)

### Option A: Vercel (fastest)
1. Push this repo to GitHub.
2. Import project in Vercel.
3. Framework preset: `Create React App`.
4. Build command: `npm run build`.
5. Output directory: `build`.
6. Attach custom domain: `www.gigacalculate.com` and point DNS records from your registrar.

### Option B: Netlify
1. Create a new site from your repo.
2. Build command: `npm run build`.
3. Publish directory: `build`.
4. Set your custom domain and verify DNS.

### Option C: Any static hosting + CDN
Deploy `build/` to S3 + CloudFront, Cloudflare Pages, or similar.

---

## Post-launch checklist

- Add dedicated routes/pages for each calculator (one calculator per URL).
- Add JSON-LD schema (`FAQPage`, `WebApplication`, `BreadcrumbList`) per calculator page.
- Implement internal linking between related calculators.
- Add analytics + search console (`GSC`, `Bing Webmaster`).
- Submit sitemap in search consoles.
- Optimize Core Web Vitals after first real-user traffic.

---

## Suggested first calculator batch (high demand)

1. BMI Calculator
2. EMI Calculator
3. Percentage Calculator
4. GST Calculator
5. SIP Calculator
6. Unit converters (length, weight, temperature)

This batch is enough to validate user intent and establish indexable content before scaling.
