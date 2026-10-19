import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-semibold text-neutral-100 md:text-3xl">
          Building the frontier of AI-driven content.
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Design Technologist focused on production GenAI tools, model-training
          pipelines, and responsive front-end systems.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:vishalkanwar65@gmail.com"
            className="rounded-md border border-accent/40 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/10"
          >
            Email
          </a>
          <a
            href="https://github.com/vishalkanwar65"
            className="rounded-md border border-edge px-4 py-2 text-sm text-neutral-200 transition-colors hover:border-neutral-500"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-kanwar-965a15b2/"
            className="rounded-md border border-edge px-4 py-2 text-sm text-neutral-200 transition-colors hover:border-neutral-500"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-edge pt-6 text-xs text-muted md:flex-row">
          <span className="font-mono">
            © {new Date().getFullYear()} — Design Technologist Portfolio
          </span>
          <Link href="/" className="hover:text-neutral-200">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
