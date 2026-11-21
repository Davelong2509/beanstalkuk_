import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/motion/Reveal";
import StaggerContainer, {
  StaggerItem
} from "@/components/motion/StaggerContainer";
import HoverMotion from "@/components/motion/HoverMotion";
import { Button } from "@/components/ui/button";
import { careerQualities, careersContact } from "@/content/careers";
import { siteContact } from "@/content/site";

const careersEmail = `mailto:${siteContact.email}?subject=${encodeURIComponent(
  careersContact.emailSubject
)}`;

export default function CareersContent() {
  return (
    <>
      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <PageContainer width="wide">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.85fr] lg:gap-16 xl:gap-24">
            <div className="max-w-2xl">
              <Reveal>
                <p className="eyebrow mb-4">What we look for</p>
                <h2 className="max-w-lg font-display text-4xl leading-[1.02] tracking-[-0.04em] text-forest sm:text-5xl">
                  People who put children first.
                </h2>
              </Reveal>

              <StaggerContainer className="mt-5">
                {careerQualities.map((quality) => (
                  <StaggerItem key={quality}>
                    <div className="flex items-start gap-3 border-b border-forest/10 py-3 first:pt-0">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#6b9c7d] text-white">
                        <CheckCircle2 size={13} strokeWidth={2.6} aria-hidden="true" />
                      </span>
                      <p className="max-w-xl text-[0.78rem] leading-6 text-muted sm:text-sm sm:leading-7">
                        {quality}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <Reveal direction="right" delay={0.08} className="h-full">
              <HoverMotion className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-[#e9dcae] bg-butter/55 p-6 sm:p-8 lg:p-9">
                  <p className="eyebrow text-[#5f8b70]">Introduce yourself</p>
                  <h2 className="mt-4 font-display text-2xl leading-tight tracking-[-0.025em] text-forest sm:text-3xl">
                    Send us a short note.
                  </h2>
                  <p className="mt-3 max-w-md text-xs leading-6 text-forest/75 sm:text-sm sm:leading-7">
                    Tell us about you, your experience and the age group you
                    enjoy working with. Current vacancies will be listed on
                    this page.
                  </p>
                  <div className="mt-7">
                    <Button asChild size="lg">
                      <a href={careersEmail}>
                        Email us <ArrowUpRight aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </div>
              </HoverMotion>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="border-t border-forest/10 bg-cream py-12 sm:py-16 lg:py-20">
        <PageContainer width="wide">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">Keeping children safe</p>
            <h2 className="font-display text-4xl leading-[1.02] tracking-[-0.04em] text-forest sm:text-5xl">
              Safe recruitment.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Keeping children safe is central to how we recruit. All
              appointments are subject to suitable pre-employment checks.
            </p>
          </Reveal>
        </PageContainer>
      </section>
    </>
  );
}
