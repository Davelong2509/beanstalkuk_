import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export default function FundingEligibilityTable({ options, sourceNote }) {
  return (
    <Reveal className="mt-9">
      <div className="overflow-hidden rounded-xl border border-forest/10 bg-white shadow-[0_8px_28px_rgba(25,58,49,0.045)]">
        <div className="hidden grid-cols-[1.05fr_1fr_1.75fr] gap-5 bg-cream-deep px-5 py-4 text-[0.62rem] font-bold uppercase tracking-[0.19em] text-forest sm:grid sm:px-6">
          <span>Who</span>
          <span>What may be available</span>
          <span>Notes</span>
        </div>

        <div className="divide-y divide-forest/10">
          {options.map((option) => (
            <article
              key={option.id}
              className="grid gap-3 px-5 py-5 transition-colors duration-200 hover:bg-cream/70 sm:grid-cols-[1.05fr_1fr_1.75fr] sm:items-center sm:gap-5 sm:px-6"
            >
              <h3 className="text-[0.66rem] font-bold uppercase leading-5 tracking-[0.13em] text-forest">
                <span className="mb-1 block text-[0.56rem] text-muted sm:hidden">Who</span>
                {option.who}
              </h3>
              <p className="text-sm font-medium leading-6 text-forest">
                <span className="mb-1 block text-[0.56rem] font-bold uppercase tracking-[0.13em] text-muted sm:hidden">
                  What may be available
                </span>
                {option.availability}
              </p>
              <p className="text-xs leading-6 text-muted sm:text-sm">
                <span className="mb-1 block text-[0.56rem] font-bold uppercase tracking-[0.13em] text-muted sm:hidden">
                  Notes
                </span>
                {option.notes}
              </p>
            </article>
          ))}
        </div>
      </div>
      <p className="mt-3 text-[0.68rem] leading-5 text-muted">{sourceNote}</p>
    </Reveal>
  );
}
