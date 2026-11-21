
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export default function FeesHighlightSection() {
  return (
    <section className="bg-[#F9EDCA] py-16 sm:py-20 lg:py-24">
      <PageContainer width="wide">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: FEES INTRODUCTION */}
          <Reveal direction="left">
            <p className="eyebrow text-terracotta">
              Fees and funding
            </p>

            <h2 className="mt-12 max-w-xl font-display text-4xl leading-[1.08] tracking-[-0.04em] text-forest sm:text-5xl lg:text-[3.5rem]">
              Clear fees. Funded hours explained.
            </h2>

            <div className="mt-6 max-w-lg text-sm leading-7 text-forest/80 sm:text-base sm:leading-8">
              <p>
                Parents should be able to understand the cost
                of childcare without having to make an enquiry
                first. We are also happy to help you check
                whether you can use funded hours.
              </p>
            </div>

            <Link
              href="/fees-and-funding"
              className="group mt-6 inline-flex items-center gap-2 border-b border-forest/30 pb-1 text-sm font-semibold text-forest transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Fees and funding
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          {/* RIGHT: FUNDING HOURS */}
          <Reveal direction="right" delay={0.15}>
            <div className="max-w-xl">

              {/* 30 HOURS VISUAL */}
              <div
                className="flex items-center gap-4"
                aria-label="Up to 30 funded hours"
              >
                <span
                  aria-hidden="true"
                  className="text-xl font-bold uppercase tracking-wide text-terracotta sm:text-2xl"
                >
                  Up to
                </span>

                <div aria-hidden="true" className="flex gap-2">
                  {["3", "0"].map((digit, index) => (
                    <div
                      key={index}
                      className="flex h-20 w-16 items-center justify-center rounded-lg border-[3px] border-[#B9A675] bg-[#FFFCF2] shadow-[0_5px_0_#B9A675] sm:h-24 sm:w-20"
                    >
                      <span className="font-display text-5xl font-semibold text-forest sm:text-6xl">
                        {digit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="mt-12 max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.04em] text-forest sm:text-5xl lg:text-[3.5rem]">
                Up to{" "}
                <span className="italic text-terracotta">30</span>{" "}
                funded hours for eligible families.
              </h3>

              <p className="mt-6 max-w-lg text-xs leading-6 text-forest/60 sm:text-sm">
                Government funded hours may be available from
                9 months, subject to eligibility and nursery
                availability. Check at{" "}
                <a
                  href="https://www.childcarechoices.gov.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-4 hover:text-terracotta"
                >
                  childcarechoices.gov.uk
                </a>.
              </p>

            </div>
          </Reveal>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <Reveal direction="up" className="mt-16 sm:mt-20">

          <div className="border-y border-forest/15 py-7 sm:py-9">

            <h3 className="max-w-2xl font-display text-2xl leading-tight tracking-[-0.025em] text-forest sm:text-3xl lg:text-[2.2rem]">
              Have questions about fees? Speak to our team,
              or come and see us.
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/arrange-a-visit">
                  Book a Visit
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Speak to Our Team
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </Button>
            </div>

          </div>
        </Reveal>

      </PageContainer>
    </section>
  );
}
