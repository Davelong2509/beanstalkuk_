import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
        Page not found
      </p>
      <h1 className="max-w-xl font-serif text-4xl leading-tight text-forest sm:text-5xl">
        We can&apos;t find that page.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-muted">
        The page may have moved, or the address may be incorrect.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
      >
        Return home
      </Link>
    </main>
  );
}
