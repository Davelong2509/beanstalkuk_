
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Sprout,
  Users,
  Wallet,
  Sparkles
} from "lucide-react";

import PageContainer from "@/components/layout/PageContainer";
import ProspectusSections from "@/components/sections/ProspectusSections";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import AwardRecognition from "@/components/sections/AwardRecognition";

export const metadata = {
  title: "Our Prospectus",
  description:
    "A short introduction to Beanstalk Day Nursery in Leicester. Read about our nursery, rooms, learning approach, team, fees and how to arrange a visit."
};

const prospectusTopics = [
  { icon: Sprout, title: "Our nursery", description: "Discover Beanstalk." },
  { icon: BookOpen, title: "Learning & development", description: "How little minds grow." },
  { icon: Users, title: "Our people", description: "Meet the team behind the care." },
  { icon: Wallet, title: "Fees & funding", description: "Understand your options." }
];

export default function OurProspectusPage() {
  return (
    <main id="main-content">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-forest text-cream">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 size-[35rem] rounded-full border border-butter/[0.08]" />
          <div className="absolute -right-20 -top-20 size-[25rem] rounded-full border border-butter/[0.08]" />
          <div className="absolute -left-40 bottom-[-15rem] size-[30rem] rounded-full bg-[#315e48]/40 blur-[100px]" />
        </div>

        <PageContainer
          width="wide"
          className="relative grid items-center gap-14 py-20 sm:py-24 lg:min-h-[580px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-28"
        >
          {/* LEFT CONTENT */}
          <Reveal direction="left">
            <div className="mb-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-cream/45">
              <Link href="/" className="hover:text-butter">Home</Link>
              <span>/</span>
              <span className="text-butter">Our prospectus</span>
            </div>

            <p className="eyebrow text-butter">A closer look at Beanstalk</p>

            <h1 className="mt-7 max-w-2xl font-display text-5xl leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
              A little look
              <span className="block italic text-butter">inside.</span>
              <span className="block mt-2 text-cream/90">A lot to discover.</span>
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-8 text-cream/65 sm:text-base">
              Get to know Beanstalk Day Nursery. Explore our spaces,
              our approach to early learning, the people behind the care
              and what life here could look like for your child.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#prospectus-content">
                  Explore the Prospectus
                  <ArrowRight size={17} />
                </Link>
              </Button>

              <Button asChild variant="light" size="lg">
                <Link href="/arrange-a-visit">
                  Arrange a Visit
                  <ArrowUpRight size={17} />
                </Link>
              </Button>
            </div>
          </Reveal>

          {/* RIGHT INFORMATION CARD */}
          <Reveal direction="right" delay={0.15}>
            <div className="relative rounded-[1.75rem] bg-[#f6f4e9] p-7 text-forest shadow-[0_25px_80px_rgba(0,0,0,0.2)] sm:p-9">

              <div className="flex items-center justify-between border-b border-forest/10 pb-6">
                <p className="eyebrow">Inside this prospectus</p>
                <Sparkles size={19} className="text-terracotta" />
              </div>

              <h2 className="mt-7 max-w-sm font-display text-3xl leading-tight sm:text-4xl">
                Everything you need to get acquainted.
              </h2>

              <div className="mt-8 space-y-1">
                {prospectusTopics.map((topic, index) => {
                  const Icon = topic.icon;

                  return (
                    <div
                      key={topic.title}
                      className="group flex items-center gap-4 border-b border-forest/[0.08] py-4 last:border-0"
                    >
                      <span className="text-[10px] tracking-widest text-forest/35">
                        0{index + 1}
                      </span>

                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e9eee5] text-forest transition-colors group-hover:bg-butter">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-display text-lg">{topic.title}</h3>
                        <p className="mt-0.5 text-[10px] text-muted">
                          {topic.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="text-forest/35 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl bg-forest p-5 text-cream">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-butter">
                  Your next step
                </p>
                <p className="mt-2 font-display text-xl">
                  Come and experience Beanstalk.
                </p>
                <Link
                  href="/arrange-a-visit"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-butter hover:text-white"
                >
                  Book a personal visit <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </PageContainer>
      </section>

      {/* PROSPECTUS AVAILABILITY */}
      <section className="bg-cream py-7 sm:py-9">
        <PageContainer width="wide">
          <Reveal direction="up">
            <div className="flex flex-col gap-5 border-b border-forest/10 pb-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sage text-forest">
                  <BookOpen size={21} />
                </div>

                <div>
                  <p className="font-display text-xl text-forest">
                    The Beanstalk prospectus
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Read our introduction online. Downloadable PDF coming soon.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-forest/10 bg-sage px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-forest">
                  PDF coming soon
                </span>

                <Button asChild size="sm">
                  <Link href="/arrange-a-visit">
                    Book a Visit <ArrowRight size={15} />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </PageContainer>
      </section>

      {/* PROSPECTUS CONTENT */}
      <section
        id="prospectus-content"
        className="scroll-mt-20 bg-cream pb-20 sm:pb-28"
      >
        <PageContainer width="wide">
          <Reveal direction="up">
            <ProspectusSections />
          </Reveal>
        </PageContainer>
      </section>

      {/* FINAL CTA */}
      <CTASection
        title="The best way to discover Beanstalk is to experience it."
        description="Come and see the nursery, meet the team and ask anything you like. There is no obligation."
      />

    </main>
  );
}
