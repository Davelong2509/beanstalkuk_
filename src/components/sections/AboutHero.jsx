
"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sprout } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1];

export default function AboutHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-forest text-cream">
      {/* Animated ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -right-32 -top-40 size-[32rem] rounded-full bg-butter/15 blur-[110px]"
          animate={reduceMotion ? {} : {
            opacity: [0.25, 0.65, 0.25],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -left-40 bottom-[-15rem] size-[30rem] rounded-full bg-[#6e9b73]/20 blur-[110px]"
          animate={reduceMotion ? {} : {
            opacity: [0.15, 0.4, 0.15],
            scale: [1.1, 0.9, 1.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-20 top-10 size-[30rem] rounded-full border border-butter/10"
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-10 rounded-full border border-butter/[0.08]" />
          <div className="absolute inset-20 rounded-full border border-butter/[0.08]" />
        </motion.div>
      </div>

      <PageContainer
        width="wide"
        className="relative grid items-center gap-12 py-24 sm:py-28 lg:min-h-[620px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
      >
        {/* Main message */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -55 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease }}
        >
          <p className="eyebrow text-butter">Get to know Beanstalk</p>

          <h1 className="mt-8 max-w-2xl font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.6rem]">
            A little place
            <span className="block italic text-butter">to grow.</span>

            <span className="mt-3 block text-cream/90">
              Right here in
            </span>

            <span className="block">
              <span className="typewriter-word text-cream">Leicester</span>.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-sm leading-8 text-cream/65 sm:text-base">
            A day nursery in Leicester city centre, caring for children
            from 3 months to 5 years. Discover who we are, what we believe
            and the environment we create for little ones.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/arrange-a-visit">
                Come and meet us <ArrowRight size={17} />
              </Link>
            </Button>

            <Link
              href="/our-ethos"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-cream/80 transition-colors hover:text-butter"
            >
              Discover our ethos
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.div>

        {/* Floating information panel */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 55, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-10"
          >
            <div className="absolute -right-16 -top-16 size-48 rounded-full bg-butter/10 blur-[55px]" />

            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-butter/20 bg-butter/10 text-butter">
                <Sprout size={27} strokeWidth={1.4} />
              </div>

              <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.22em] text-butter">
                Our philosophy
              </p>

              <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                Every little beginning deserves room to grow.
              </h2>

              <p className="mt-5 text-sm leading-7 text-cream/60">
                With care, encouragement and the right environment,
                little things can become wonderful things.
              </p>

              <div className="mt-9 flex items-center justify-between border-t border-white/15 pt-6">
                <span className="text-[10px] uppercase tracking-[0.17em] text-cream/50">
                  Beanstalk Day Nursery
                </span>
                <Sprout size={19} className="text-butter" />
              </div>
            </div>
          </motion.div>

          {/* Decorative glow */}
          <div className="absolute -bottom-8 -right-8 -z-10 size-40 rounded-full bg-butter/20 blur-[65px]" />
        </motion.div>
      </PageContainer>
    </section>
  );
}
