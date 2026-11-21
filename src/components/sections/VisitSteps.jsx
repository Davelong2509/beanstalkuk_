import Reveal from "@/components/motion/Reveal";

const steps = [
  {
    number: "01",
    title: "Come and say hello",
    description: "Meet the team and see the nursery in person."
  },
  {
    number: "02",
    title: "See the rooms",
    description: "Look around the rooms your child might use."
  },
  {
    number: "03",
    title: "Ask anything",
    description: "Fees, funding, routines, settling in. No question is too small."
  }
];

export default function VisitSteps() {
  return (
    <div>
      <Reveal>
        <h2 className="max-w-sm font-display text-3xl leading-[1.02] tracking-[-0.035em] text-forest sm:text-4xl">
          What happens
          <br className="hidden sm:block" /> on a visit?
        </h2>
      </Reveal>

      <div className="mt-5 border-t border-forest/10">
        {steps.map((step, index) => (
          <Reveal
            key={step.number}
            delay={index * 0.06}
            className="grid grid-cols-[3rem_1fr] gap-2.5 border-b border-forest/10 py-4 sm:grid-cols-[3.5rem_1fr] sm:gap-3"
          >
            <span className="font-display text-3xl italic leading-none text-[#9b843f] sm:text-4xl">
              {step.number}
            </span>
            <div>
              <h3 className="font-display text-lg leading-tight text-forest sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-1 text-[0.72rem] leading-[1.65] text-muted sm:text-xs">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-4 text-[0.66rem] leading-[1.65] text-muted">
        A visit request is not a confirmed appointment. We will contact you to
        agree a time, and the visit is confirmed only when we reply.
      </p>
    </div>
  );
}
