import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

function Card({ project }: { project: Project }) {
  const accentText = project.accent === "accent" ? "text-accent" : "text-accent2";
  const accentBorder =
    project.accent === "accent" ? "hover:border-accent/50" : "hover:border-accent2/50";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-edge bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 ${accentBorder}`}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className={`font-mono text-xs uppercase tracking-wider ${accentText}`}>
            {project.category}
          </span>
          <ArrowUpRight
            size={18}
            className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-100"
          />
        </div>

        <h3 className="mt-4 text-xl font-semibold text-neutral-100">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-edge px-2.5 py-1 text-[11px] text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
      {projects.map((p) => (
        <Card key={p.slug} project={p} />
      ))}
    </div>
  );
}
