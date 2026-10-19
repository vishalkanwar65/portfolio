import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-5 py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-neutral-100 md:text-4xl">
        This page isn&apos;t published.
      </h1>
      <p className="mt-3 max-w-md text-muted">
        It may be a case study that&apos;s still in progress, or a link that
        moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md border border-accent/40 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/10"
      >
        Back home
      </Link>
    </div>
  );
}
