import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";

export default function FeesHighlightSection() {
  return (
    <section className="bg-butter py-20 sm:py-24 lg:py-28">
      <PageContainer width="wide" className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <Reveal direction="left">
          <p className="eyebrow">Fees and funding</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.02] tracking-[-0.04em] text-forest sm:text-5xl lg:text-6xl">
            Clear fees. Funded hours explained.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-forest/75 sm:text-base">
            <p>
              Parents should be able to understand the cost of childcare without
              having to make an enquiry first.
            </p>
            <p>
              We are also happy to help you check whether you can use funded hours.
            </p>
          </div>
          <Button asChild className="mt-8">
            <Link href="/fees-and-funding">Fees and Funding <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </Reveal>

        <Reveal direction="right" delay={0.12} className="rounded-2xl bg-cream/75 p-7 shadow-[0_18px_45px_rgba(16,60,48,0.08)] sm:p-10">
          <p className="eyebrow">For eligible families</p>
          <div className="mt-4 flex items-end gap-3">
            <span className="font-display text-8xl leading-none tracking-[-0.06em] text-forest sm:text-9xl">30</span>
            <span className="pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Hours</span>
          </div>
          <h3 className="mt-3 max-w-sm font-display text-3xl leading-tight text-forest sm:text-4xl">
            Up to 30 funded hours for eligible families.
          </h3>
          <p className="mt-4 text-xs leading-6 text-muted">
            Funded hours may be available from 9 months, subject to eligibility.
            Check at childcarechoices.gov.uk.
          </p>
          <a
            href="https://www.childcarechoices.gov.uk/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest underline decoration-terracotta decoration-2 underline-offset-4"
          >
            Check your eligibility <ArrowRight size={15} aria-hidden="true" />
          </a>
        </Reveal>
      </PageContainer>
    </section>
  );
}
