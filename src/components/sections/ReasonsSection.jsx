import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/sections/SectionHeading";
import SectionShell from "@/components/sections/SectionShell";
import Reveal from "@/components/motion/Reveal";
import { homeReasons } from "@/content/home";
import AwardRecognition from "@/components/sections/AwardRecognition";
export default function ReasonsSection() {
  return (
    <SectionShell background="cream" spacing="compact" contained={false}>
      <PageContainer width="wide">
        <SectionHeading
          eyebrow="Why parents choose Beanstalk"
          title="Reasons that are easy to check."
          description="Every point here is something you can ask about on a visit."
        />

        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {homeReasons.map((item, index) => (
            <Reveal key={item.number} delay={(index % 2) * 0.08}>
              <article className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-forest/15 py-7 sm:grid-cols-[3.25rem_1fr] sm:gap-6">
                <span className="font-display text-3xl italic leading-none text-terracotta sm:text-4xl">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-forest sm:text-[1.7rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <AwardRecognition />
      </PageContainer>
    </SectionShell>
  );
}
