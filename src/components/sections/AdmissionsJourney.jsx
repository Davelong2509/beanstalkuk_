import Reveal from "@/components/motion/Reveal";
import PageContainer from "@/components/layout/PageContainer";
import {
  desktopAdmissionsSteps,
  mobileAdmissionsSteps
} from "@/content/admissions";

function StepCard({ step, index, mobile = false }) {
  return (
    <Reveal
      delay={Math.min(index * 0.045, 0.22)}
      className={`rounded-xl bg-white shadow-[0_8px_25px_rgba(25,58,49,0.065)] ${
        mobile ? "p-5 sm:p-6" : "min-h-[9rem] p-4"
      }`}
    >
      <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-forest/75">
        {step.eyebrow}
      </p>
      <h3 className="mt-2 font-display text-xl leading-tight text-forest sm:text-[1.35rem]">
        {step.title}
      </h3>
      <p className="mt-2 text-[0.72rem] leading-[1.6] text-muted">
        {step.description}
      </p>
    </Reveal>
  );
}

export default function AdmissionsJourney() {
  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <PageContainer width="wide">
        <div className="hidden grid-cols-2 gap-3 sm:grid sm:grid-cols-3 lg:grid-cols-6">
          {desktopAdmissionsSteps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        <div className="grid gap-3 sm:hidden">
          {mobileAdmissionsSteps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              mobile
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
