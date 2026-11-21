import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/motion/Reveal";

const googleSearchUrl = "https://www.google.com/search?q=Beanstalk+Day+Nursery+Leicester";

export default function ReviewsSection() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <PageContainer width="wide" className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
        <Reveal>
          <p className="eyebrow">Parent voices</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-forest sm:text-5xl">
            Hear from other parents.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
            The most trustworthy opinions come from families who already know us.
            Read what parents say on Google, or share your own.
          </p>
        </Reveal>
        <a
          href={googleSearchUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-forest-deep"
        >
          Review us on Google <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </PageContainer>
    </section>
  );
}
