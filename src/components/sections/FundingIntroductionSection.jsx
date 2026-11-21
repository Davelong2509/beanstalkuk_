
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { fundingIntroduction } from "@/content/fees";

export default function FundingIntroductionSection() {
  return (
    <section className="overflow-hidden bg-[#EEF2DF] py-16 sm:py-20 lg:py-24">
      <PageContainer width="wide">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div>
            <Reveal direction="left">
              <p className="eyebrow text-terracotta">
                {fundingIntroduction.eyebrow}
              </p>

              <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.02] tracking-[-0.045em] text-forest sm:text-5xl lg:text-[3.7rem]">
                {fundingIntroduction.title}
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-forest/75 sm:text-base sm:leading-8">
                {fundingIntroduction.description}
              </p>
            </Reveal>

            {/* 30 HOURS VISUAL */}
            <Reveal direction="left" delay={0.12}>
              <div className="mt-7 flex items-center gap-3 sm:gap-4">
                <span className="text-xl font-bold uppercase tracking-wide text-terracotta">
                  Up to
                </span>

                {["3", "0"].map((digit, index) => (
                  <div
                    key={index}
                    className="flex size-[4.1rem] items-center justify-center rounded-lg border-[3px] border-[#B9A675] bg-[#FFFEF8] shadow-[0_4px_0_#B9A675] sm:size-[5.1rem]"
                  >
                    <span className="font-display text-4xl font-semibold text-forest sm:text-5xl">
                      {digit}
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="mt-10 max-w-lg font-display text-4xl leading-[1.06] tracking-[-0.04em] text-forest sm:text-5xl">
                Up to{" "}
                <span className="italic text-terracotta">30</span>{" "}
                {fundingIntroduction.highlightLabel}
              </h3>

              <p className="mt-4 max-w-lg text-xs leading-6 text-muted">
                {fundingIntroduction.disclaimer}
              </p>

              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Ask About Eligibility
                    <ArrowRight size={16} />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline">
                  <a
                    href="https://www.childcarechoices.gov.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check on Childcare Choices
                    <ArrowUpRight size={16} />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT IMAGE */}
          <Reveal
            direction="right"
            delay={0.2}
            className="relative lg:mt-[14rem]"
          >
            <div className="group relative aspect-[1.2/1] overflow-hidden rounded-2xl bg-sage shadow-[0_20px_55px_rgba(25,58,49,0.10)]">
              <Image
                src="/images/nursery/beanstalk_gallery_2.jpeg"
                alt="A child exploring and learning through play at Beanstalk Day Nursery"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
              />
            </div>
          </Reveal>

        </div>
      </PageContainer>
    </section>
  );
}
