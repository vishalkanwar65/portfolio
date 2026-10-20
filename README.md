# Design Technologist — GenAI Portfolio

**Live:** https://portfolio-git-main-vishalkanwar65.vercel.app

A Next.js + Tailwind portfolio tailored to Amazon's **Sr. Design Technologist, eShop Content Services** role. It foregrounds production GenAI work and design process over static mockups. Deployed on Vercel with auto-deploy on every push to `main`.

## Projects

| Project | Status | Why it's here |
| --- | --- | --- |
| **OptiCare AI** | Published | Production GenAI platform built from scratch — "architect and build production-grade GenAI tools." |
| **Responsive QA System** | Published | Design-process + evaluation framework — "establish best practices / build evaluation frameworks for quality." |
| **Style LoRA — Diffusion Fine-Tune (4 GB VRAM)** | Published | Foundational model training — real trained adapter + before/after evaluation grid. "Lead foundational model training, fine-tuning, and evaluation." |

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where to edit

- **All project content**: `src/data/projects.ts` (single source of truth). Flip `published: true` on the GenAI project once it's real.
- **Contact links**: `src/components/Footer.tsx` (email, GitHub, LinkedIn).
- **Visual style/theme**: `tailwind.config.ts` colors + `src/app/globals.css`.
- **Case-study images**: drop files in `public/images/<project>/` and reference them from `projects.ts`.

## To do next (your call)

1. Build the real LoRA/diffusion fine-tune project, then set `published: true`.
2. Add real screenshots to `public/images/`.
3. Fill in contact links and deploy to Vercel.
