/**
 * Project data — single source of truth for the grid and case-study pages.
 *
 * Tailored to the Amazon "Sr. Design Technologist, eShop Content Services" role,
 * which weights: production GenAI tools built from scratch, model training /
 * fine-tuning, inference pipelines, front-end/UX prototyping, responsive design,
 * and an online portfolio that "reflects your design process."
 *
 * `published: false` keeps a case study built but hidden from the public grid
 * (used for the GenAI fine-tuning project until the real work is done).
 */

export type ProcessStep = {
  title: string;
  body: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type CaseImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  role: string;
  client: string;
  year: string;
  summary: string;
  tags: string[];
  cover: string;
  accent: "accent" | "accent2";
  published: boolean;
  status?: "live" | "in-progress";
  liveUrl?: string;

  // Case study body
  overview: string;
  problem: string;
  approach: string;
  architecture: string[];
  process: ProcessStep[];
  metrics: Metric[];
  stack: string[];
  images: CaseImage[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "opticare-ai",
    title: "OptiCare AI",
    category: "Production GenAI Platform",
    role: "Design Technologist — architecture, prompt engineering, front-end",
    client: "Multi-tenant SaaS (healthcare)",
    year: "2026",
    summary:
      "A multi-tenant GenAI platform that turns any clinic's knowledge into an embeddable, multilingual AI assistant — built from the ground up with a provider-agnostic LLM layer, dynamic prompt system, and self-serve onboarding.",
    tags: ["GenAI", "LLM", "Prompt Engineering", "Next.js", "Multi-tenant"],
    cover: "/images/opticare/hero.png",
    accent: "accent",
    published: true,
    status: "live",
    liveUrl: "",
    overview:
      "OptiCare AI is a production, end-to-end GenAI tool built from scratch. Each clinic gets a branded, embeddable chat widget backed by its own knowledge base — doctors, services, pricing, languages — without writing any code. It is the clearest demonstration of architecting and shipping a GenAI product, not just prototyping one.",
    problem:
      "Specialty clinics lose leads after hours and spend staff time answering the same questions about procedures, pricing, and appointments. Generic chatbots can't speak a specific clinic's credentials or triage symptoms responsibly, and they aren't multilingual for diverse patient bases.",
    approach:
      "Treat the clinic's knowledge as data, not as code. A single widget renders per-tenant branding and behaviour, driven by a structured record (specialties, doctors as JSONB, pricing, enabled languages). The system prompt is assembled dynamically per request, with triage and lead-capture logic layered in. A provider-agnostic LLM layer keeps the assistant online even when a model provider fails.",
    architecture: [
      "Provider-agnostic LLM layer: Google Gemini 2.0 Flash as primary with automatic failover to Groq Llama 3.1 — a clinic never sees a broken bot.",
      "Dynamic prompt assembly: a base identity + triage + conversation-summary sections + per-language instruction, composed at request time from the tenant record.",
      "Multi-tenant Postgres schema (Supabase): clinics table with slug-based embed URLs, API keys, JSONB doctors/pricing, per-clinic RLS, and clinic-scoped indexes on leads, appointments, chat logs, triage, and summaries.",
      "Embeddable widget: a single embed.js drop-in plus a React ChatWidget with voice input (Web Speech), TTS, six languages, and inline urgency signalling.",
      "Self-serve onboarding + billing: scrape-assisted clinic setup, Stripe subscription plans, and a per-clinic dashboard.",
    ],
    process: [
      {
        title: "1. Map the real workflow",
        body: "Started from an actual eye hospital's site — doctors, LASIK/SMILE/cataract/retina services, pricing bands, NABH credentials — to ground the data model in what clinics really need to say.",
      },
      {
        title: "2. Design the tenant data model",
        body: "Chose JSONB for doctors and pricing so new clinics onboard without schema changes. Slugs power embed URLs; API keys and row-level security isolate tenants.",
      },
      {
        title: "3. Engineer the prompt system",
        body: "Separated stable identity from dynamic context. Triage rules direct urgent cases appropriately, lead/appointment capture uses hidden structured tags, and a language directive switches the entire response language.",
      },
      {
        title: "4. Harden for production",
        body: "Added provider failover, bounded token limits, and a consistent OpenAI-style message contract across providers so the model can be swapped without touching product code.",
      },
      {
        title: "5. Make it embeddable + self-serve",
        body: "Shipped a one-line embed, per-clinic theming (logo, primary color, tagline), and a dashboard so non-technical owners can launch in minutes.",
      },
    ],
    metrics: [
      { label: "Model providers", value: "2 (auto-failover)" },
      { label: "Languages", value: "6" },
      { label: "Onboarding", value: "No-code" },
      { label: "Tenancy", value: "Per-clinic RLS" },
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini",
      "Groq Llama 3.1",
      "Supabase / Postgres",
      "Stripe",
      "Web Speech API",
    ],
    images: [
      {
        src: "/images/opticare/hero.png",
        alt: "OptiCare AI landing page with the embeddable multilingual clinic chat assistant",
        caption: "The live OptiCare AI product — landing page with the embeddable assistant (voice input, six languages, per-tenant branding).",
      },
    ],
    outcome:
      "A shipped GenAI product that proves the full loop: data model, prompt engineering, provider resilience, embeddable front-end, and self-serve onboarding. Directly mirrors 'architect and build production-grade GenAI tools and platforms from scratch.'",
  },

  {
    slug: "responsive-qa",
    title: "Responsive QA System",
    category: "Design-Process Tooling & Evaluation",
    role: "Design Technologist — tooling, automation, reporting",
    client: "Internal engineering tool",
    year: "2026",
    summary:
      "A repeatable, browser-automated QA system that tests any site across five viewports, runs safe interaction and accessibility checks, and produces reproducible, severity-rated reports — codifying design quality as an evaluation framework.",
    tags: ["Automation", "Playwright", "Accessibility", "Design Systems", "QA"],
    cover: "/images/responsive-qa/cover.png",
    accent: "accent2",
    published: true,
    status: "live",
    overview:
      "A skill-driven QA system that enforces responsive and interaction quality the way model teams enforce eval benchmarks. It captures screenshots across a viewport matrix, runs a safe interaction checklist, checks accessibility signals, and emits a severity-rated report with reproducible steps — the 'reflects your design process' requirement, made executable.",
    problem:
      "Responsive and accessibility regressions slip through manual spot-checks. Teams need a consistent, reproducible way to verify layout, interaction, and a11y across devices without accidentally triggering destructive actions on a live site.",
    approach:
      "Define quality as a repeatable procedure, not a vibe. A documented skill specifies the viewport matrix, route-discovery rules, a safe (reversible-only) interaction checklist, accessibility signals to inspect, and a strict reporting format. Browser automation (Playwright) executes it; findings are classified blocker/high/medium/low with evidence paths.",
    architecture: [
      "Viewport matrix: mobile-small 320, mobile 375, tablet 768, desktop 1280, desktop-large 1440, plus intermediate widths around observed breakpoints.",
      "Safe interaction checklist: menus, dialogs, forms, and keyboard flows (Tab/Shift+Tab/Enter/Esc) — explicitly excluding destructive or irreversible actions.",
      "Evidence-first reporting: deterministic screenshot layout (current / diff / baselines) and a fixed finding format with reproducible steps.",
      "Accessibility signals: accessible names, alt text, heading order, visible focus, contrast, and keyboard access — treated as evidence to investigate.",
      "Honesty guarantees: never claims a clean run when routes are blocked or tooling is unavailable.",
    ],
    process: [
      {
        title: "1. Codify the standard",
        body: "Wrote the QA procedure as a reusable skill so any run is consistent — same viewports, same checklist, same report shape.",
      },
      {
        title: "2. Automate execution",
        body: "Drove a real browser via Playwright: set viewport before navigation, wait for meaningful ready state, capture full-page screenshots, measure horizontal overflow against the layout viewport.",
      },
      {
        title: "3. Test interaction safely",
        body: "Exercised menus, dialogs, and keyboard flows while hard-excluding anything that deletes data, sends email, or charges money.",
      },
      {
        title: "4. Report with evidence",
        body: "Produced severity-rated findings with exact reproduction steps and screenshot paths — e.g. a 320px logo-carousel overflow and a mobile menu that ignored Escape.",
      },
    ],
    metrics: [
      { label: "Viewports", value: "5 + breakpoints" },
      { label: "Report findings", value: "Severity-rated" },
      { label: "Interaction checks", value: "Safe-only" },
      { label: "Output", value: "Reproducible" },
    ],
    stack: [
      "Playwright (MCP)",
      "Accessibility tree inspection",
      "Markdown / HTML reports",
      "Viewport + overflow analysis",
    ],
    images: [
      {
        src: "/images/responsive-qa/cover.png",
        alt: "Desktop screenshot captured during a responsive QA run across viewports",
        caption: "A real QA run — desktop capture from the automated five-viewport pass with reproducible, severity-rated findings.",
      },
      {
        src: "/images/responsive-qa/mobile.png",
        alt: "Mobile viewport screenshot captured during the same responsive QA run",
        caption: "Same run at a mobile viewport — layout and interaction verified across the breakpoint matrix.",
      },
    ],
    outcome:
      "Demonstrates the 'establish best practices' and 'build evaluation frameworks for quality' responsibilities — turning subjective design review into a repeatable, evidence-based system. Pairs naturally with GenAI content-quality benchmarking.",
  },

  {
    slug: "genai-finetune",
    title: "Style LoRA — Diffusion Fine-Tune on 4 GB VRAM",
    category: "Foundational Model Training",
    role: "Design Technologist — model training, inference & evaluation",
    client: "R&D",
    year: "2026",
    summary:
      "Trained a LoRA adapter on Stable Diffusion 1.5 to learn a consistent visual style — end to end on a 4 GB laptop GPU. The real constraint, and the interesting engineering, was making diffusion fine-tuning fit in 4 GB and debugging fp16 instability.",
    tags: ["Diffusion", "LoRA / PEFT", "Fine-tuning", "Evaluation", "4 GB VRAM"],
    cover: "/images/genai/cover.png",
    accent: "accent",
    published: true,
    status: "live",
    overview:
      "A foundational-model-training project built on constrained hardware (NVIDIA T600, 4 GB VRAM): inject a LoRA adapter into SD 1.5's UNet attention layers, train it on a small public style dataset, serve it through a reproducible inference pipeline, and evaluate with a before/after comparison harness. Trained for 800 steps at a peak of 2.42 GB VRAM.",
    problem:
      "E-commerce visual production needs on-brand, consistent imagery at scale, and a defensible way to measure output quality. The hardware constraint made it concrete: full fine-tuning and SDXL are impossible on 4 GB, so the work had to be engineered to fit.",
    approach:
      "Freeze the SD 1.5 base and train only a low-rank (r=8) LoRA adapter injected into the UNet's attention projections. Stack memory optimizations — fp16, gradient checkpointing, batch size 1 with gradient accumulation, and 8-bit AdamW — to stay under 4 GB. Build an evaluation harness that generates the same prompts and seeds with and without the adapter for honest before/after comparison.",
    architecture: [
      "LoRA injected into UNet attention (to_q/k/v/out) via peft — 1,594,368 trainable params (~0.2% of the UNet); VAE and text encoder frozen.",
      "4 GB-VRAM stack: fp16, gradient checkpointing, batch 1 + gradient accumulation (4), 8-bit AdamW (bitsandbytes). Peak VRAM 2.42 GB on an NVIDIA T600.",
      "OOM fallback ladder wired via config (reduce rank → reduce resolution → freeze text encoder) — not needed this run, but built in for robustness.",
      "Reproducible inference: fixed prompts + seeds, attention/VAE slicing. Inference runs in fp32 after fp16 was found to produce NaN (black) images on the T600.",
      "Evaluation harness: same prompts/seeds base-vs-LoRA, a side-by-side grid, metrics.json, and an optional CLIP adherence score (graceful skip, no fabricated metrics).",
    ],
    process: [
      {
        title: "1. Design for the constraint",
        body: "Chose LoRA over full fine-tune and SD 1.5 over SDXL specifically because of the 4 GB budget. Documented the reasoning before writing code.",
      },
      {
        title: "2. Prepare a public dataset",
        body: "Downloaded a small public Hugging Face style dataset, center-cropped and resized 20 images to 512×512 with a consistent instance caption. Deterministic with a fixed seed.",
      },
      {
        title: "3. Train under 4 GB",
        body: "Injected the LoRA, stacked the memory optimizations, and trained 800 steps. Peak VRAM held at 2.42 GB; 8-bit AdamW worked (with a plain-AdamW fallback wired in).",
      },
      {
        title: "4. Debug fp16 black images",
        body: "Inference first produced solid-black outputs — fp16 numerical instability in SD 1.5's UNet on this GPU generating NaNs. Fixed by running the inference pipeline in fp32, which still fits in 4 GB.",
      },
      {
        title: "5. Evaluate honestly",
        body: "Generated the same prompts/seeds with and without the adapter, built a before/after grid, and recorded a CLIP adherence signal — qualitative grid as the primary evidence.",
      },
    ],
    metrics: [
      { label: "Peak VRAM", value: "2.42 GB" },
      { label: "Trainable params", value: "1.6M (~0.2%)" },
      { label: "Steps", value: "800" },
      { label: "Optimizer", value: "8-bit AdamW" },
    ],
    stack: [
      "Stable Diffusion 1.5",
      "Diffusers",
      "PEFT / LoRA",
      "PyTorch (CUDA)",
      "bitsandbytes",
      "Python",
      "CLIP (eval)",
    ],
    images: [
      {
        src: "/images/genai/comparison_grid.png",
        alt: "Before/after grid: base Stable Diffusion 1.5 (top) vs. the trained LoRA adapter (bottom) on the same prompts and seeds",
        caption: "Same prompts and seeds — base SD 1.5 (top row) vs. the trained LoRA adapter (bottom row).",
      },
    ],
    outcome:
      "A real, shipped foundational-model-training pipeline: train → infer → evaluate, with the adapter and before/after grid as artifacts. Directly answers the role's top theme — 'lead foundational model training, fine-tuning, and evaluation' — and the 4 GB-VRAM engineering plus the fp16→fp32 debugging are honest, defensible talking points.",
  },
];

export const publishedProjects = projects.filter((p) => p.published);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getPublishedSlugs(): string[] {
  return publishedProjects.map((p) => p.slug);
}
