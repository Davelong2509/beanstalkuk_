import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/motion/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  current,
  parentLabel,
  parentHref,
  className = ""
}) {
  return (
    <section className={`border-b border-line bg-cream py-12 sm:py-16 lg:py-20 ${className}`}>
      <PageContainer width="wide">
        <Reveal direction="up" amount={0.1}>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-[0.68rem] text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-terracotta">
                  Home
                </Link>
              </li>
              {parentLabel && parentHref ? (
                <>
                  <li aria-hidden="true"><ChevronRight size={12} /></li>
                  <li>
                    <Link href={parentHref} className="transition-colors hover:text-terracotta">
                      {parentLabel}
                    </Link>
                  </li>
                </>
              ) : null}
              <li aria-hidden="true"><ChevronRight size={12} /></li>
              <li aria-current="page" className="text-forest">
                {current || eyebrow}
              </li>
            </ol>
          </nav>

          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          <h1 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.045em] text-forest sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              {description}
            </p>
          ) : null}
        </Reveal>
      </PageContainer>
    </section>
  );
}
