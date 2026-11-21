
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Sprout,
  Sparkles,
  Heart
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion
} from "framer-motion";

import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1];
const CITY = "Leicester.";

const moments = [
  {
    title: "Play",
    image: "/images/nursery/home_hero.jpg",
    alt: "A colourful sensory activity at Beanstalk Day Nursery",
    caption: "Little hands. Endless possibilities.",
    label: "Explore through play"
  },
  {
    title: "Discover",
    image: "/images/gallery/3.jpg",
    alt: "A moment of discovery at Beanstalk Day Nursery",
    caption: "Every discovery starts somewhere.",
    label: "Curiosity starts here"
  },
  {
    title: "Grow",
    image: "/images/gallery/17.jpg",
    alt: "A glimpse of everyday life at Beanstalk Day Nursery",
    caption: "Every little step is a big beginning.",
    label: "Growing together"
  }
];

export default function HomeHero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [typedCity, setTypedCity] = useState("");

  // Typewriter
  useEffect(() => {
    if (reduceMotion) {
      setTypedCity(CITY);
      return;
    }

    let index = 0;
    let interval;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        index++;
        setTypedCity(CITY.slice(0, index));

        if (index >= CITY.length) clearInterval(interval);
      }, 95);
    }, 900);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [reduceMotion]);

  const current = moments[active];
  const next = moments[(active + 1) % moments.length];

  return (
    <section className="relative isolate overflow-hidden bg-forest text-cream">

      {/* AMBIENT LIGHT */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-40 top-20 size-[32rem] rounded-full bg-[#527c55]/25 blur-[110px]"
          animate={reduceMotion ? {} : {
            opacity: [0.25, 0.6, 0.25],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-40 -top-40 size-[35rem] rounded-full bg-butter/10 blur-[120px]"
          animate={reduceMotion ? {} : {
            opacity: [0.2, 0.55, 0.2],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute -right-40 bottom-0 size-[35rem] rounded-full border border-butter/[0.07]" />
      </div>

      <PageContainer
        width="wide"
        className="relative grid items-center gap-14 py-16 sm:py-20 lg:min-h-[760px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:py-20"
      >

        {/* LEFT CONTENT */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -55 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease }}
          className="relative z-10"
        >

          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2.5 backdrop-blur-md">
            <span className="relative size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-butter opacity-60" />
              <span className="relative block size-2 rounded-full bg-butter" />
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cream/80">
              A little place to grow
            </span>
          </div>

          <h1 className="max-w-[650px] font-display text-[3.5rem] leading-[0.96] tracking-[-0.055em] sm:text-7xl lg:text-[5.3rem] xl:text-[6rem]">
            Little moments.

            <span className="block italic text-butter">
              Big beginnings.
            </span>

            <span className="mt-3 block text-cream/90">
              Right here in
            </span>

            <span className="block min-h-[1.05em] text-cream">
              <span aria-hidden="true">
                {typedCity}
                <motion.span
                  className="ml-1 inline-block h-[0.75em] w-[3px] translate-y-[0.08em] bg-butter"
                  animate={reduceMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }}
                  transition={{ duration: 0.75, repeat: Infinity }}
                />
              </span>
              <span className="sr-only">{CITY}</span>
            </span>
          </h1>

          <p className="mt-8 max-w-md text-sm leading-8 text-cream/65 sm:text-base">
            A warm, thoughtful day nursery caring for children from
            3 months to 5 years. A place to discover, explore,
            make friends and grow with confidence.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Button asChild size="lg">
              <Link href="/arrange-a-visit">
                Book a Visit
                <ArrowUpRight size={17} />
              </Link>
            </Button>

            <Link
              href="/our-nursery"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-cream/80 transition-colors hover:text-butter"
            >
              Explore the Nursery
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* TRUST STRIP */}
          <div className="mt-12 grid max-w-md grid-cols-2 gap-5 border-t border-white/15 pt-7">
            <div className="flex items-center gap-3">
              <MapPin size={19} className="shrink-0 text-butter" />
              <div>
                <p className="text-xs font-semibold">Leicester</p>
                <p className="mt-1 text-[10px] text-cream/45">City centre</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Sprout size={20} className="shrink-0 text-butter" />
              <div>
                <p className="text-xs font-semibold">3 months – 5 years</p>
                <p className="mt-1 text-[10px] text-cream/45">Early years care</p>
              </div>
            </div>
          </div>

        </motion.div>

        {/* RIGHT INTERACTIVE IMAGE EXPERIENCE */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.15, delay: 0.2, ease }}
          className="relative pb-10 sm:pb-12"
        >

          {/* MAIN IMAGE */}
          <div className="relative isolate min-h-[27rem] overflow-hidden rounded-[1.8rem] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.3)] sm:min-h-[38rem] lg:min-h-[590px]">

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.image}
                initial={reduceMotion ? false : { opacity: 0, scale: 1.06, x: 25 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -20 }}
                transition={{ duration: 0.65, ease }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.alt}
                  fill
                  priority={active === 0}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#102e25]/90 via-[#102e25]/5 to-[#102e25]/20" />

            {/* TOP LABEL */}
            <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-forest/35 px-4 py-2.5 text-[9px] font-semibold text-white backdrop-blur-lg">
                <Sparkles size={14} className="text-butter" />
                Life at Beanstalk
              </span>

              <span className="text-[10px] tracking-widest text-white/80">
                0{active + 1} / 03
              </span>
            </div>

            {/* IMAGE CAPTION */}
            <div className="absolute bottom-7 left-6 right-6 z-10 sm:bottom-10 sm:left-9">
              <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-butter">
                {current.label}
              </p>

              <AnimatePresence mode="wait">
                <motion.h2
                  key={current.caption}
                  initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="mt-3 max-w-md font-display text-3xl leading-tight text-white sm:text-4xl"
                >
                  {current.caption}
                </motion.h2>
              </AnimatePresence>
            </div>

          </div>

          {/* OVERLAPPING PHOTO PREVIEW */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease }}
            className="absolute -bottom-1 -left-3 z-20 hidden w-32 overflow-hidden rounded-2xl border-[4px] border-forest shadow-2xl sm:block lg:-left-9 lg:w-40"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={next.image}
                alt="Another glimpse of life at Beanstalk"
                fill
                sizes="160px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-[8px] font-bold uppercase tracking-widest text-white">
                Up next
              </span>
            </div>
          </motion.div>

          {/* FLOATING INFORMATION CARD */}
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-7 right-3 z-20 hidden rounded-2xl border border-forest/10 bg-cream p-5 text-forest shadow-[0_15px_45px_rgba(0,0,0,0.2)] sm:block lg:-right-3"
          >
            <div className="flex items-center gap-2 text-terracotta">
              <Heart size={15} />
              <span className="text-[9px] font-bold uppercase tracking-widest">
                Growing together
              </span>
            </div>
            <p className="mt-2 font-display text-xl leading-tight">
              Every child.
              <br />
              Every beginning.
            </p>
            <p className="mt-2 text-[9px] text-forest/50">
              Beanstalk Day Nursery
            </p>
          </motion.div>

          {/* INTERACTIVE IMAGE SELECTOR */}
          <div className="mt-8 flex items-center justify-between gap-2 pl-1 sm:pl-4">
            <div className="flex gap-2">
              {moments.map((moment, index) => (
                <button
                  key={moment.title}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  className={`group flex items-center gap-2 rounded-full px-3 py-2.5 text-[10px] font-semibold transition-all duration-300 sm:px-4 ${
                    active === index
                      ? "bg-butter text-forest"
                      : "border border-white/15 text-cream/65 hover:border-butter/50 hover:text-butter"
                  }`}
                >
                  <span className="tabular-nums opacity-60">
                    0{index + 1}
                  </span>
                  {moment.title}
                </button>
              ))}
            </div>

            <span className="hidden text-[9px] uppercase tracking-widest text-cream/40 md:block">
              Explore our world
            </span>
          </div>

          {/* Progress indicator */}
          <div className="mt-3 flex h-[2px] gap-1.5 px-1 sm:px-4">
            {moments.map((moment, index) => (
              <div key={moment.title} className="h-full flex-1 overflow-hidden rounded-full bg-white/15">
                <motion.div
                  className="h-full bg-butter"
                  animate={{ width: active === index ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            ))}
          </div>

        </motion.div>
      </PageContainer>
    </section>
  );
}
