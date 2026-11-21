import { Clock3, Sparkles } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export default function FundingHourVisual() {
  return (
    <Reveal
      direction="left"
      className="relative flex min-h-[18rem] items-center justify-center overflow-hidden rounded-xl bg-butter p-8 sm:min-h-[23rem] lg:min-h-[25rem]"
    >
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 size-64 rounded-full border border-forest/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-6 -top-6 size-44 rounded-full border border-forest/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-20 size-72 rounded-full border border-forest/10"
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-cream/70 text-forest">
          <Clock3 size={22} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <p className="eyebrow mt-5">More time to grow</p>
        <p className="mt-2 font-display text-7xl leading-none tracking-[-0.06em] text-forest sm:text-8xl">
          30
        </p>
        <p className="mt-2 max-w-[12rem] text-sm leading-6 text-forest/75">
          funded hours a week may be available to eligible working families
        </p>
        <Sparkles
          className="absolute -right-12 top-6 text-terracotta/70"
          size={22}
          strokeWidth={1.4}
          aria-hidden="true"
        />
      </div>
    </Reveal>
  );
}
