import { BookOpen, Lightbulb, Sprout } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const icons = [Sprout, BookOpen, Lightbulb];

export default function LearningCharacteristics({ items }) {
  return (
    <section className="bg-sage py-16 sm:py-20 lg:py-24">
      <PageContainer width="wide">
        <Reveal>
          <SectionHeading
            eyebrow="How children learn"
            title="Three ways of learning."
            description="The EYFS describes how children learn as well as what they learn."
          />
        </Reveal>

        <StaggerContainer className="mt-9 grid gap-3 md:grid-cols-3 lg:gap-4">
          {items.map((item, index) => {
            const Icon = icons[index] || Sprout;
            return (
              <StaggerItem key={item.number}>
                <article className="h-full min-h-[10rem] rounded-xl border border-forest/[0.04] bg-white px-5 py-6 shadow-[0_8px_28px_rgba(25,58,49,0.045)] sm:px-6 sm:py-7">
                  <div className="flex size-9 items-center justify-center rounded-full bg-butter text-forest">
                    <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-[1.08] text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </PageContainer>
    </section>
  );
}
