# Gudgumz

> Made from sap. Made to age. Made to return.

Natural latex objects from Kanjirappally, Kerala. 94–99% Hevea brasiliensis. Nothing pretending to be something else.

**Public site:** [gudgumz.com](https://gudgumz.com)
**Tagline:** Good, the honest way.

---

## Stack

| Layer | Tool |
|---|---|
| Framework | Astro 5 (static-first) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + custom design tokens |
| Content | MDX in Astro Content Collections (no CMS) |
| Schema | schema-dts |
| Search | Pagefind (static, zero JS framework) |
| Hosting | Enhance Infrastructure |
| CDN | Cloudflare |
| Analytics | GA4 + Microsoft Clarity (deferred load) |
| Deployment | GitHub Actions → Enhance |

---

## Getting started

Requires Node 20 LTS and npm 10+.

```bash
nvm use            # picks up .nvmrc → Node 20
npm install
npm run dev        # http://localhost:4321
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build + Pagefind index |
| `npm run preview` | Preview production build locally |
| `npm run typecheck` | Run Astro type check |
| `npm run format` | Format with Prettier |

---

## Project structure

```
src/
├── components/        Reusable Astro components
├── content/           MDX content collections (objects, journal, atlas, faqs, witness)
├── layouts/           Page layouts (BaseLayout, ArticleLayout, ObjectLayout)
├── lib/               Schema builders, utilities
├── pages/             Routes (file-based)
└── styles/            tokens.css, global.css

public/
├── robots.txt         AI-crawler-friendly directives
├── llms.txt           Entity declaration for LLM retrieval
└── status.json        Live transparency: current batch, latex %, dispatch time
```

---

## URL philosophy

Noun-based entities, not generic e-commerce slugs.

```
/                       The manifesto
/objects/[slug]         Products
/the-field              About + Kanjirappally
/the-material           Hevea + natural latex science
/the-spots              The fungal truth pillar (AEO weapon)
/the-decay              Biodegradability gallery
/journal/[slug]         Founder's field journal
/atlas/[slug]           Glossary + entity hub
/witness                Customer photos
/workshop               How things are made
/order                  WhatsApp-first inquiry hub
```

---

## Brand non-negotiables

1. **Real photographs only.** No stock, no AI-generated factory imagery, no renders.
2. **Spots are not hidden.** They are documented. They prove the latex is real.
3. **No greenwashing visuals.** Earth tones, not bright greens.
4. **WhatsApp is the conversion path.** Forms are secondary.
5. **One source of truth per fact.** Edit `public/status.json` for live operational data.

---

## Team

| Name | Role |
|---|---|
| Manoj Sebastian | Founder & Managing Director |
| Michael Thomas | Co-founder & Director |
| Noble Joseph | Technical & Operations Lead, PR & Marketing |

---

## License

UNLICENSED. © Gudgumz Private Limited. All rights reserved.
