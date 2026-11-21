
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  X,
  Sparkles
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion
} from "framer-motion";

import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { homeDayMoments } from "@/content/home";

const ease = [0.22, 1, 0.36, 1];

export default function DayTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMoment = homeDayMoments[activeIndex];
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream sm:py-24 lg:py-28">

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-[30rem] rounded-full border border-white/[0.04]"
      />

      <PageContainer width="wide">

        {/* Section heading */}
        <Reveal>
          <p className="eyebrow text-butter">
            The Beanstalk experience
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.04em] text-cream sm:text-5xl lg:text-6xl">
            A day, one moment at a time.
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-cream/60 sm:text-base">
            Every part of the day brings something new.
            Take a little look at what life at Beanstalk feels like.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* LEFT: INTERACTIVE MOMENTS */}
          <div className="border-t border-white/20">

            {homeDayMoments.map((moment, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={moment.title}
                  className={`border-b transition-colors duration-300 ${
                    isActive
                      ? "border-butter/50"
                      : "border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="day-moment-visual"
                    onClick={() => setActiveIndex(index)}
                    className="group flex w-full items-center justify-between gap-5 py-6 text-left sm:py-7"
                  >

                    <div className="flex items-center gap-5">

                      {/* Number */}
                      <span
                        className={`text-[10px] font-semibold tracking-widest transition-colors ${
                          isActive
                            ? "text-butter"
                            : "text-cream/35"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      {/* Title */}
                      <span
                        className={`font-display text-3xl transition-all duration-300 sm:text-4xl ${
                          isActive
                            ? "translate-x-1 text-butter"
                            : "text-cream/75 group-hover:translate-x-1 group-hover:text-butter"
                        }`}
                      >
                        {moment.title}
                      </span>

                    </div>

                    {/* Toggle icon */}
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "rotate-90 border-butter bg-butter text-forest"
                          : "border-white/30 text-cream group-hover:border-butter group-hover:text-butter"
                      }`}
                    >
                      {isActive ? (
                        <X size={17} />
                      ) : (
                        <Plus size={17} />
                      )}
                    </span>

                  </button>

                  {/* Active description */}
                  <AnimatePresence initial={false}>
                    {isActive && moment.description && (
                      <motion.div
                        initial={
                          reduceMotion
                            ? false
                            : { opacity: 0, height: 0, y: -8 }
                        }
                        animate={{
                          opacity: 1,
                          height: "auto",
                          y: 0
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          y: -5
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.35,
                          ease
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-lg pb-6 pl-10 text-sm leading-7 text-cream/65 sm:text-base">
                          {moment.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}

          </div>

          {/* RIGHT: DYNAMIC IMAGE PANEL */}
          <Reveal
            direction="right"
            className="relative"
          >
            <div
              id="day-moment-visual"
              aria-live="polite"
              className="relative min-h-[23rem] overflow-hidden rounded-2xl border border-white/10 bg-forest-deep shadow-[0_25px_70px_rgba(0,0,0,0.25)] sm:min-h-[29rem] lg:min-h-[34rem]"
            >

              {/* Animated image */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeMoment.title}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: 35,
                          scale: 1.025
                        }
                  }
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1
                  }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: -25,
                          scale: 0.99
                        }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    ease
                  }}
                  className="absolute inset-0"
                >

                  <Image
                    src={activeMoment.image}
                    alt={activeMoment.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102e25]/85 via-[#102e25]/10 to-[#102e25]/15" />

                  {/* Top label */}
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">

                    <span className="flex items-center gap-2 rounded-full border border-white/20 bg-forest/35 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      <Sparkles size={13} className="text-butter" />
                      The Beanstalk experience
                    </span>

                    <span className="text-xs font-medium tracking-widest text-white/80">
                      0{activeIndex + 1} / 0{homeDayMoments.length}
                    </span>

                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-9 sm:right-9">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-butter">
                      A moment at Beanstalk
                    </p>

                    <h3 className="mt-3 font-display text-4xl text-white sm:text-5xl">
                      {activeMoment.title}.
                    </h3>

                    {activeMoment.description && (
                      <p className="mt-3 max-w-md text-xs leading-6 text-white/75 sm:text-sm sm:leading-7">
                        {activeMoment.description}
                      </p>
                    )}

                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Bottom progress indicator */}
              <div className="absolute bottom-0 left-0 z-10 flex h-1 w-full bg-white/15">
                <motion.div
                  className="h-full bg-butter"
                  animate={{
                    width: `${((activeIndex + 1) / homeDayMoments.length) * 100}%`
                  }}
                  transition={{
                    duration: 0.45,
                    ease
                  }}
                />
              </div>

            </div>
          </Reveal>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-b border-t border-white/20 py-7 sm:mt-16">

          <p className="font-display text-2xl text-cream sm:text-3xl">
            Spend a morning with us. Book a visit.
          </p>

          <Button asChild size="lg">
            <Link href="/arrange-a-visit">
              Book a Visit
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </Button>

        </div>

      </PageContainer>
    </section>
  );
}
