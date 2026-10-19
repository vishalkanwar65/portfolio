import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProject, getPublishedSlugs } from "@/data/projects";

export function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  // Hide unpublished (in-progress) case studies from the public site.
  if (!project || !project.published) {
    notFound();
  }

  const accentText = project.accent === "accent" ? "text-accent" : "text-accent2";

  return (
    <article>
      {/* Header */}
      <header className="relative overflow-hidden border-b border-edge">
        <div className="absolute inset-0 grid-lines opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 py-16 md:py-20">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-neutral-100"
          >
            <ArrowLeft size={16} /> Back to work
          </Link>

          <p className={`mt-8 font-mono text-xs uppercase tracking-wider ${accentText}`}>
            {project.category}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100 md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{project.summary}</p>

          <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
            <Meta label="Role" value={project.role} />
            <Meta label="Client" value={project.client} />
            <Meta label="Year" value={project.year} />
            <Meta
              label="Status"
              value={project.status === "live" ? "Shipped" : "In progress"}
            />
          </dl>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              className={`mt-8 inline-flex items-center gap-1.5 text-sm ${accentText} hover:underline`}
            >
              Visit live project <ExternalLink size={14} />
            </a>
          ) : null}
        </div>
      </header>

      <div className="mx-auto max-w-4xl space-y-16 px-5 py-16">
        <Section title="Overview">
          <p>{project.overview}</p>
        </Section>

        {project.images && project.images.length > 0 && (
          <Section title="Evidence">
            <div className="space-y-4">
              {project.images.map((img) => (
                <figure key={img.src} className="overflow-hidden rounded-xl border border-edge">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full"
                    loading="lazy"
                  />
                  {img.caption && (
                    <figcaption className="border-t border-edge bg-surface/50 px-4 py-2 text-xs text-muted">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Section>
        )}

        <Section title="The problem">
          <p>{project.problem}</p>
        </Section>

        <Section title="Approach">
          <p>{project.approach}</p>
        </Section>

        <Section title="Architecture">
          <ul className="space-y-3">
            {project.architecture.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${project.accent === "accent" ? "bg-accent" : "bg-accent2"}`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Process">
          <ol className="space-y-6">
            {project.process.map((step) => (
              <li
                key={step.title}
                className="rounded-xl border border-edge bg-surface/50 p-5"
              >
                <h3 className="font-medium text-neutral-100">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Impact">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-edge bg-surface/50 p-4"
              >
                <div className={`text-xl font-semibold ${accentText}`}>
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-muted">{m.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-6">{project.outcome}</p>
        </Section>

        <Section title="Stack">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-edge px-3 py-1.5 font-mono text-xs text-neutral-300"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        <div className="border-t border-edge pt-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-neutral-100"
          >
            <ArrowLeft size={16} /> All projects
          </Link>
        </div>
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-neutral-200">{value}</dd>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-neutral-100">{title}</h2>
      <div className="mt-4 leading-relaxed text-neutral-300">{children}</div>
    </section>
  );
}
