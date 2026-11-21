
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Wallet,
  ShieldCheck
} from "lucide-react";

import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/motion/Reveal";
import FundingEligibilityTable from "@/components/sections/FundingEligibilityTable";
import FundingSteps from "@/components/sections/FundingSteps";
import FundingHourVisual from "@/components/sections/FundingHourVisual";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";

import { siteContact } from "@/content/site";
import {
  feeIntroduction,
  fundingIntroduction,
  fundingOptions,
  fundingSteps,
  taxFreeChildcare,
  fundingHelp,
  fundingSourceNote
} from "@/content/fees";

export const metadata = {
  title: "Fees and Funding",
  description:
    "Clear information about Beanstalk Day Nursery fees, funded childcare hours and how to check your eligibility."
};

export default function FeesAndFundingPage() {
  return (
    <main id="main-content">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-forest text-cream">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-48 size-[38rem] rounded-full border border-butter/10" />
          <div className="absolute -right-24 -top-32 size-[26rem] rounded-full border border-butter/10" />
          <div className="absolute -left-40 bottom-[-15rem] size-[32rem] rounded-full bg-[#315e48]/40 blur-[100px]" />
        </div>

        <PageContainer
          width="wide"
          className="relative grid items-center gap-12 py-20 sm:py-24 lg:min-h-[540px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28"
        >
          <Reveal direction="left">
            <p className="eyebrow text-butter">Costs, support & childcare</p>

            <h1 className="mt-7 max-w-2xl font-display text-5xl leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-[5.5rem]">
              Fees and
              <span className="block italic text-butter">funding.</span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-8 text-cream/65 sm:text-base">
              Clear information about what childcare costs, how funded
              hours work and the support that may be available to your family.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/arrange-a-visit">
                  Book a Visit <ArrowRight size={17} />
                </Link>
              </Button>

              <Button asChild variant="light" size="lg">
                <Link href="#funding-hours">
                  Explore Funding <ArrowUpRight size={17} />
                </Link>
              </Button>
            </div>
          </Reveal>

          {/* Hero information panel */}
          <Reveal direction="right" delay={0.15}>
            <div className="relative rounded-[1.75rem] bg-[#f6f4e9] p-7 text-forest shadow-2xl sm:p-10">
              <div className="flex items-center justify-between border-b border-forest/10 pb-5">
                <p className="eyebrow">Understanding your options</p>
                <Wallet size={20} className="text-terracotta" />
              </div>

              <h2 className="mt-7 max-w-sm font-display text-3xl leading-tight sm:text-4xl">
                Childcare should be easier to understand.
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Explore our fees, understand funded childcare and find out
                where to get help with your eligibility.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Clear information about childcare costs",
                  "Guidance on funded childcare hours",
                  "Practical help with your next steps"
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e6ecdf] text-[10px] font-semibold text-forest">
                      0{index + 1}
                    </span>
                    <p className="text-xs leading-5 text-forest/75">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-forest/10 pt-5">
                <Link
                  href="#funding-hours"
                  className="group inline-flex items-center gap-2 text-xs font-semibold text-forest hover:text-terracotta"
                >
                  Understand funding
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </PageContainer>
      </section>

      {/* FEES INTRODUCTION */}
      <section className="bg-cream py-20 sm:py-24">
        <PageContainer width="wide">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
            <Reveal direction="left">
              <p className="eyebrow mb-5">{feeIntroduction.eyebrow}</p>

              <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.04em] text-forest sm:text-5xl lg:text-6xl">
                {feeIntroduction.title}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                {feeIntroduction.lead}
              </p>
            </Reveal>

            <Reveal direction="right" delay={0.12}>
              <div className="border-l-2 border-butter pl-6 lg:mt-12">
                <p className="text-sm leading-8 text-muted">
                  {feeIntroduction.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/arrange-a-visit">
                      Book a Visit <ArrowRight size={16} />
                    </Link>
                  </Button>

                  <Button asChild variant="outline">
                    <Link href="/contact">
                      Speak to Our Team <ArrowUpRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* FUNDING SECTION */}
      <section
        id="funding-hours"
        className="scroll-mt-24 bg-sage py-20 sm:py-24 lg:py-28"
      >
        <PageContainer width="wide">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            <Reveal direction="left">
              <p className="eyebrow mb-5">{fundingIntroduction.eyebrow}</p>

              <h2 className="max-w-xl font-display text-4xl leading-[1.02] tracking-[-0.045em] text-forest sm:text-5xl lg:text-6xl">
                {fundingIntroduction.title}
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-muted sm:text-base">
                {fundingIntroduction.description}
              </p>

              <div className="mt-9 border-t border-forest/15 pt-7">
                <p className="eyebrow">Up to</p>

                <div className="mt-2 flex items-baseline gap-3">
                  <span className="font-display text-[6.5rem] leading-none tracking-[-0.07em] text-terracotta sm:text-[8rem]">
                    30
                  </span>
                  <span className="max-w-[150px] font-display text-2xl leading-tight text-forest sm:text-3xl">
                    {fundingIntroduction.highlightLabel}
                  </span>
                </div>

                <p className="mt-5 max-w-lg text-xs leading-6 text-muted">
                  {fundingIntroduction.disclaimer}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/contact">
                      Ask About Eligibility <ArrowRight size={16} />
                    </Link>
                  </Button>

                  <Button asChild variant="outline">
                    <a
                      href="https://www.childcarechoices.gov.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check Eligibility <ArrowUpRight size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <FundingHourVisual />
            </Reveal>

          </div>

          {/* ELIGIBILITY TABLE */}
          <Reveal className="mt-20">
            <div className="mb-8 max-w-2xl">
              <p className="eyebrow mb-3">Know your options</p>
              <h3 className="font-display text-3xl text-forest sm:text-4xl">
                What funding could your family receive?
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Explore the available childcare funding options and their
                eligibility requirements.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-forest/10 bg-white p-4 shadow-[0_15px_45px_rgba(16,60,48,0.05)] sm:p-7">
              <FundingEligibilityTable
                options={fundingOptions}
                sourceNote={fundingSourceNote}
              />
            </div>
          </Reveal>

          {/* FUNDING STEPS */}
          <Reveal direction="up" className="mt-20">
            <div className="mb-8">
              <p className="eyebrow mb-3">Getting started</p>
              <h3 className="font-display text-3xl text-forest sm:text-4xl">
                Your next steps, made simple.
              </h3>
            </div>

            <FundingSteps steps={fundingSteps} />
          </Reveal>

          {/* ADDITIONAL SUPPORT */}
          <div className="mt-12 grid gap-5 md:grid-cols-2">

            <Reveal direction="left" className="h-full">
              <div className="h-full rounded-2xl border border-forest/10 bg-white p-7 sm:p-9">
                <div className="flex size-11 items-center justify-center rounded-full bg-[#edf1e9] text-forest">
                  <ShieldCheck size={21} />
                </div>

                <p className="eyebrow mt-6">Additional support</p>

                <h3 className="mt-3 font-display text-2xl text-forest sm:text-3xl">
                  {taxFreeChildcare.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {taxFreeChildcare.description}
                </p>

                <a
                  href={taxFreeChildcare.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-forest transition-colors hover:text-terracotta"
                >
                  Explore Childcare Choices <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.12} className="h-full">
              <div className="h-full rounded-2xl bg-butter p-7 sm:p-9">
                <div className="flex size-11 items-center justify-center rounded-full bg-white/60 text-forest">
                  <Phone size={20} />
                </div>

                <p className="eyebrow mt-6">We're here to help</p>

                <h3 className="mt-3 font-display text-2xl text-forest sm:text-3xl">
                  {fundingHelp.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-forest/70">
                  {fundingHelp.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-5">
                  <a
                    href={`tel:${siteContact.phoneHref}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-forest hover:text-terracotta"
                  >
                    <Phone size={15} />
                    Call the Nursery
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-forest hover:text-terracotta"
                  >
                    Send a message <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>

          {/* BOTTOM VISIT CTA */}
          <Reveal className="mt-16 flex flex-col gap-6 border-y border-forest/15 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow mb-2">Come and see for yourself</p>
              <h3 className="font-display text-2xl text-forest sm:text-3xl">
                Book a visit to Beanstalk.
              </h3>
            </div>

            <Button asChild size="lg">
              <Link href="/arrange-a-visit">
                Arrange a Visit <ArrowRight size={16} />
              </Link>
            </Button>
          </Reveal>

        </PageContainer>
      </section>

      <CTASection
        title="Let us help you with your fees and funded hours."
        description="Talk to us about your child's age, your hours and when you would like to start."
      />

    </main>
  );
}
