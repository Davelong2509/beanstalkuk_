
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Award,
  ChevronDown,
  ChevronUp,
  Sparkles
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion
} from "framer-motion";

export default function TeamMemberCard({ member }) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  const qualifications = member.qualifications || [];
  const visibleLimit = 3;
  const hasMore = qualifications.length > visibleLimit;

  return (
    <motion.article
      whileHover={
        reduceMotion
          ? {}
          : { y: -7 }
      }
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-forest/[0.09] bg-[#fffefa] shadow-[0_8px_35px_rgba(16,60,48,0.055)] transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(16,60,48,0.13)]"
    >

      
{/* PORTRAIT - REVEALS ON SCROLL */}
<div className="relative aspect-[4/4.5] overflow-hidden bg-sage">

  <motion.div
    initial={
      reduceMotion
        ? false
        : {
            opacity: 0,
            y: 35,
            scale: 1.04
          }
    }
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1
    }}
    viewport={{
      once: true,
      amount: 0.2
    }}
    transition={{
      duration: reduceMotion ? 0 : 0.9,
      ease: [0.22, 1, 0.36, 1]
    }}
    className="absolute inset-0"
  >
    <Image
      src={member.image}
      alt={member.imageAlt}
      fill
      loading="lazy"
      unoptimized={Boolean(member.animated)}
      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
      style={{
        objectPosition: member.imagePosition || "center"
      }}
      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.055]"
    />

    {/* Cinematic overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#102e25]/90 via-[#102e25]/10 to-[#102e25]/15" />
  </motion.div>

  {/* Editorial label */}
  <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between">
    <span className="rounded-full border border-white/25 bg-forest/25 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
      Beanstalk / People
    </span>

    <span className="flex size-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-butter group-hover:text-forest">
      <Sparkles size={15} />
    </span>
  </div>

  {/* Name and role */}
  <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6 lg:p-7">
    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-butter">
      {member.role}
    </p>

    <h3 className="max-w-[95%] font-display text-[2rem] leading-[1.05] tracking-[-0.035em] text-white sm:text-3xl">
      {member.name}
    </h3>

    <div className="mt-4 h-px w-10 bg-butter/80 transition-all duration-500 group-hover:w-20" />
  </div>

</div>


      {/* QUALIFICATIONS PANEL */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-forest/10 pb-4">

          <div className="flex items-center gap-3">

            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#edf2e9] text-forest">
              <Award size={19} strokeWidth={1.5} />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-forest">
                Qualifications
              </p>

              <p className="mt-1 text-[10px] text-muted">
                Professional training
              </p>
            </div>

          </div>

          <span className="text-[10px] font-medium tabular-nums text-forest/45">
            {String(qualifications.length).padStart(2, "0")} ITEMS
          </span>

        </div>

        {/* Qualification list */}
        <ul className="mt-5 flex-1 space-y-3">

          <AnimatePresence initial={false}>
            {qualifications.map((qualification, index) => {
              if (!expanded && index >= visibleLimit) {
                return null;
              }

              return (
                <motion.li
                  key={qualification}
                  initial={
                    index >= visibleLimit && !reduceMotion
                      ? { opacity: 0, y: 8 }
                      : false
                  }
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: -5
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.25,
                    delay: reduceMotion ? 0 : index * 0.035
                  }}
                  className="flex items-start gap-3"
                >

                  <span className="mt-[0.42rem] size-1.5 shrink-0 rounded-full bg-[#78977c]" />

                  <span className="text-xs leading-[1.7] text-[#68736d]">
                    {qualification}
                  </span>

                </motion.li>
              );
            })}
          </AnimatePresence>

        </ul>

        {/* Expand / collapse */}
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="mt-5 flex w-full items-center justify-between border-t border-forest/10 pt-4 text-left text-[10px] font-semibold uppercase tracking-[0.12em] text-forest transition-colors hover:text-terracotta"
          >

            <span>
              {expanded
                ? "Show fewer qualifications"
                : `View all ${qualifications.length} qualifications`}
            </span>

            {expanded ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}

          </button>
        )}

      </div>

    </motion.article>
  );
}
