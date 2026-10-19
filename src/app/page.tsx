import ProjectGrid from "@/components/ProjectGrid";
import { publishedProjects } from "@/data/projects";

const capabilities = [
  "Production GenAI tools, built from scratch",
  "Model fine-tuning & evaluation pipelines",
  "Front-end / UX prototyping",
  "Responsive & adaptive design systems",
];

const stack = [
  "TypeScript",
  "React / Next.js",
  "Tailwind CSS",
  "LLMs (Gemini, Groq, OpenAI)",
  "Prompt Engineering",
  "Diffusion / LoRA / PEFT",
  "Hugging Face / Replicate / SageMaker",
  "Playwright automation",
  "Postgres / Supabase",
  "Node.js",
  "HTML / CSS",
  "Accessibility (a11y)",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-edge">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="font-mono text-sm text-accent animate-fade-up">
            Sr. Design Technologist · GenAI
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-100 animate-fade-up md:text-6xl">
            I build production GenAI tools and the systems that keep them
            <span className="text-accent"> fast</span>,
            <span className="text-accent2"> reliable</span>, and
            <span className="text-accent"> on-brand</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted animate-fade-up">
            Architecting end-to-end GenAI solutions — from provider-resilient LLM
            layers and dynamic prompt systems to model fine-tuning and
            responsive front-end delivery. Work that reflects the process, not
            just the pixels.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
            <a
              href="#work"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-accent/90"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-edge px-5 py-2.5 text-sm text-neutral-200 transition-colors hover:border-neutral-500"
            >
              Get in touch
            </a>
          </div>

          <ul className="mt-14 grid max-w-3xl gap-3 sm:grid-cols-2">
            {capabilities.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2 text-sm text-neutral-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-100 md:text-3xl">
              Selected work
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              Deep case studies over thumbnails — each one shows the problem,
              architecture, and process end to end.
            </p>
          </div>
          <span className="hidden font-mono text-sm text-muted md:block">
            {publishedProjects.length} projects
          </span>
        </div>

        <ProjectGrid projects={publishedProjects} />
      </section>

      {/* About */}
      <section id="about" className="border-t border-edge">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-2xl font-semibold text-neutral-100 md:text-3xl">
            About
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <p className="text-muted md:col-span-2">
              I work at the seam between design and engineering: architecting
              GenAI products from the ground up, defining prompt-engineering and
              model-evaluation standards, and building the responsive front-ends
              that deliver them. I care about systems that stay reliable under
              real load — provider failover, reproducible QA, and quality that is
              measured, not assumed. I operate well in ambiguity, make
              independent technical calls, and raise the bar for the teams around
              me.
            </p>
            <div className="rounded-xl border border-edge bg-surface/60 p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Focus areas
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                <li>GenAI tooling & platforms</li>
                <li>Foundational model training</li>
                <li>Prompt & evaluation frameworks</li>
                <li>Responsive front-end systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="border-t border-edge">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-2xl font-semibold text-neutral-100 md:text-3xl">
            Stack
          </h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-edge bg-surface/60 px-3 py-1.5 font-mono text-xs text-neutral-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
