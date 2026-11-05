# WorkPilot by LRBC — Marketing Site

Production-grade Next.js marketing site for **WorkPilot** — a product by **LRBC** (Lean Resource Business Consulting). Static, Vercel-ready, SEO-first.

> **Know what got done today, without a single follow-up call.**

---

## Stack

| Layer      | Choice                                                    |
| ---------- | --------------------------------------------------------- |
| Framework  | Next.js 15 (App Router) + React 19 + TypeScript           |
| Styling    | Tailwind CSS v4 (OKLCH tokens) + custom `wp-*` utilities  |
| Animations | Framer Motion (scroll-reveal, hover micro-interactions)   |
| Icons      | lucide-react                                              |
| Fonts      | Plus Jakarta Sans · Inter · JetBrains Mono (3 only)       |
| Deploy     | Vercel (zero-config)                                      |

---

## Pages & sections

### `/` — Home (full product narrative)
1. **Hero** — big headline, dual CTA, floating chips + phone mockup with progress ring + stats + mini bars + live list
2. **TrustBar** — "Built by LRBC" line + client wordmark row
3. **Problem** — "ho gaya?" chat-bubble vs clean-list comparison
4. **Features** — Checklists / Delegation / FMS feature rows each with phone mockup + Attendance pill
5. **RealScreens** — tabbed dark app screenshots (4 tabs with carousel dots + prev/next) + 3 insight cards + stat pill
6. **DayTimeline** — 5-event vertical timeline "A day with WorkPilot"
7. **OwnerView** — 3 cards for the owner's view
8. **ShopFloor** — 4 cards "If your team has a phone..."
9. **HowItWorks** — 3 numbered steps with connecting line + CTA
10. **VsCompare** — WhatsApp+Excel vs WorkPilot card with 7 criteria
11. **Pricing** — Starter / Professional / Business cards (bigger teams pay less) + Enterprise row
12. **Faq** — 7-question accordion
13. **FinalCTA** — "Tomorrow, find out what got done..." + WhatsApp link
14. **Footer** — 4-column (Product / Industry / Company / Legal) + social row

### Sub-pages
- `/features` — hero + Features + OwnerView + ShopFloor + VsCompare + FinalCTA
- `/pricing` — hero + Pricing + Faq + FinalCTA
- `/about` — hero + 4 principles + TrustBar + FinalCTA
- `/contact` — 3 contact cards (Email / WhatsApp / Demo) + hours + CTA band

---

## Local development

```bash
unzip workpilot.zip
cd workpilot
npm install           # one-time, ~45s
npm run dev           # http://localhost:3000
```

### Scripts

```bash
npm run dev      # Local dev server
npm run build    # Production build (all pages prerender to static HTML)
npm run start    # Serve the built site
npm run lint     # ESLint + Next type checks
```

---

## Deploy to Vercel

### Option A — GitHub + Vercel UI (recommended)

```bash
git init
git add .
git commit -m "Initial WorkPilot site"
git branch -M main
git remote add origin git@github.com:<org>/workpilot.git
git push -u origin main
```

Then on [vercel.com](https://vercel.com) → **New Project** → import the repo → defaults are correct → **Deploy**. Attach your domain under **Settings → Domains**.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel           # link project
vercel --prod    # deploy
```

---

## Where to edit things

| What to change        | File                                             |
| --------------------- | ------------------------------------------------ |
| Email, WhatsApp, prices, trial days | `lib/utils.ts` → `SITE` object     |
| Nav items             | `lib/utils.ts` → `NAV` array                     |
| LRBC logo             | `components/Logo.tsx` (SVG mark inline — swap for real brand SVG) |
| Hero copy & phone     | `components/sections/Hero.tsx`                   |
| Problem compare       | `components/sections/Problem.tsx`                |
| Features & mockups    | `components/sections/Features.tsx`               |
| App screenshot slides | `components/sections/RealScreens.tsx`            |
| Day timeline events   | `components/sections/DayTimeline.tsx`            |
| Pricing plans         | `components/sections/Pricing.tsx` → `PLANS`      |
| FAQ Q&A               | `components/sections/Faq.tsx` → `FAQ`            |
| Footer columns        | `components/Footer.tsx` → `COLS`                 |

### Dropping in a real LRBC logo

```tsx
// components/Logo.tsx
import Image from "next/image";
<Image src="/lrbc-logo.svg" alt="LRBC" width={40} height={40} priority />
```
Replace the inline `<svg>` block, keep the wordmark text column.

### Replacing phone mockups with real screenshots

Put PNGs in `public/screens/`, then in `components/sections/Features.tsx` swap the `<PhoneScreenList ... />` JSX for `<img src="/screens/checklists.png" />` inside a `<PhoneFrame>` wrapper.

---

## Design system (ported from LRBC)

- **Spacing** — `.wp-section` (py-8 md:py-12), `.wp-container` (px-4 sm:px-6, max-w-6xl)
- **Buttons** — `.wp-btn` + `.wp-btn-primary / -secondary / -light / -ghost` — all 48 px
- **Cards** — `.wp-card` (hover lift + brand border); `.wp-card-featured` for highlighted plan
- **Typography** — H1 once per page, H2 = `.wp-h2`, mono labels = `.wp-eyebrow`
- **Brand gradient** — `#5227FF → #a855f7 → #d946ef` via `.wp-grad-text` / `.wp-grad-bg`
- **Dark band** — `.wp-dark` for stats / CTA sections
- **Hero bg** — `.wp-hero-wrap` (radial violet glow + edge blobs)
- **Motion** — one-time reveals, 0.5–0.8s, cubic-bezier(.22,1,.36,1), `prefers-reduced-motion` respected
- **Rounded header** — floating pill design, scroll-aware opacity + border

---

## File tree

```
workpilot/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── features/page.tsx
│   ├── pricing/page.tsx
│   ├── globals.css
│   ├── layout.tsx            ← loads Google Fonts + metadata
│   ├── not-found.tsx
│   ├── page.tsx              ← Home (13 sections)
│   ├── robots.ts
│   ├── sitemap.ts
│   └── icon.svg
├── components/
│   ├── Footer.tsx            ← 4-column + social row
│   ├── Header.tsx            ← rounded pill + Products dropdown
│   ├── Logo.tsx              ← LRBC wordmark + mark
│   ├── PhoneMockup.tsx       ← PhoneFrame + FloatingChip
│   └── sections/
│       ├── DayTimeline.tsx
│       ├── Faq.tsx
│       ├── Features.tsx
│       ├── FinalCTA.tsx
│       ├── Hero.tsx
│       ├── HowItWorks.tsx
│       ├── OwnerView.tsx
│       ├── Pricing.tsx
│       ├── Problem.tsx
│       ├── RealScreens.tsx
│       ├── ShopFloor.tsx
│       ├── TrustBar.tsx
│       └── VsCompare.tsx
├── lib/
│   └── utils.ts              ← cn() + SITE + NAV
├── public/                   ← drop real logo + og here
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
├── vercel.json
├── .gitignore
└── README.md
```

---

## What's NOT included (by design)

- **Backend / database / API routes** — static marketing. Contact goes to `mailto:` and WhatsApp.
- **Admin CMS** — content lives in constants (`lib/utils.ts`) and section components; easy to swap for a CMS later.
- **node_modules** — not shipped. Run `npm install` after extracting.

---

## License

Proprietary — © LRBC. All rights reserved.
