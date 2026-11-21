import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function FundingSteps({ steps }) {
  return (
    <div className="mt-12">
      <Reveal>
        <p className="eyebrow mb-3">Getting started</p>
        <h3 className="max-w-3xl font-display text-4xl leading-[0.98] tracking-[-0.04em] text-forest sm:text-5xl">
          Four steps to funded hours.
        </h3>
      </Reveal>

      <div className="mt-8 border-t border-forest/15">
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 0.035} direction="up">
            <article className="grid gap-2 border-b border-forest/15 py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-5 sm:py-6">
              <p className="font-display text-3xl italic leading-none text-[#9D843F] sm:text-4xl">
                {step.number}
              </p>
              <div>
                <h4 className="font-display text-xl leading-tight text-forest sm:text-2xl">
                  {step.title}
                </h4>
                <p className="mt-2 max-w-4xl text-sm leading-6 text-muted sm:leading-7">
                  {step.description}
                </p>
                {step.href ? (
                  <Link
                    href={step.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-forest underline decoration-forest/30 underline-offset-4 transition-colors hover:text-terracotta hover:decoration-terracotta"
                  >
                    {step.linkLabel}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
