import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/motion/Reveal";

export default function ParentLearningUpdates({ items }) {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <PageContainer width="wide">
        <Reveal className="mb-8 sm:mb-10">
          <SectionHeading
            eyebrow="Working with you"
            title="How we keep you in the picture."
            titleClassName="max-w-2xl"
          />
        </Reveal>

        <div className="border-t border-line">
          {items.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.035} direction="up">
              <article className="grid gap-3 border-b border-line py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-5 sm:py-6">
                <p className="font-display text-3xl italic leading-none text-[#9D843F] sm:text-4xl">
                  {item.number}
                </p>
                <div>
                  <h3 className="font-display text-xl leading-tight text-forest sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-4xl text-sm leading-6 text-muted sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
