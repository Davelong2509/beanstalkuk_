import Image from "next/image";
import { Award } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { homeAward } from "@/content/awards";

export default function AwardRecognition() {
  return (
    <Reveal direction="up" className="mt-8 sm:mt-12">
      <article className="group relative overflow-hidden rounded-[1.5rem] border border-forest/10 bg-white shadow-[0_14px_40px_rgba(16,60,48,0.07)] transition-shadow duration-500 hover:shadow-[0_24px_65px_rgba(16,60,48,0.12)]">
        <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative flex min-h-[13rem] flex-col justify-between overflow-hidden bg-[#eaf0e5] p-6 sm:p-8">
            <div aria-hidden="true" className="absolute -right-20 -top-28 size-72 rounded-full border-[34px] border-white/35" />
            <span className="relative inline-flex w-fit items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-forest/70">
              <Award size={17} aria-hidden="true" /> Nursery recognition
            </span>
            <div className="relative mt-6 h-28 w-full max-w-[19rem] sm:h-32">
              <Image
                src={homeAward.logo}
                alt="Good Nutrition for Under Fives in Leicester award logo"
                fill
                sizes="(max-width: 1024px) 300px, 340px"
                className="object-contain object-left"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow text-terracotta">Award</span>
              <span className="rounded-full bg-sage px-3 py-1 text-[0.65rem] font-semibold text-forest">
                Valid until {homeAward.validUntil}
              </span>
            </div>
            <h3 className="mt-4 max-w-xl font-display text-3xl leading-[1.13] tracking-[-0.035em] text-forest sm:text-4xl">
              {homeAward.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              {homeAward.description}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
