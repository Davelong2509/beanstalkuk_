
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sprout,
  Sparkles
} from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion
} from "framer-motion";

import PageContainer from "@/components/layout/PageContainer";
import SectionShell from "@/components/sections/SectionShell";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

const TYPEWRITER_TEXT = "know your child best.";
const ease = [0.22, 1, 0.36, 1];

export default function HomeIntroSection() {
  const headingRef = useRef(null);

  const isInView = useInView(headingRef, {
    once: true,
    amount: 0.45
  });

  const reduceMotion = useReducedMotion();

  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setTypedText(TYPEWRITER_TEXT);
      setIsTyping(false);
      return;
    }

    let index = 0;
    let typingInterval;

    const startDelay = window.setTimeout(() => {
      setIsTyping(true);

      typingInterval = window.setInterval(() => {
        index += 1;

        setTypedText(TYPEWRITER_TEXT.slice(0, index));

        if (index >= TYPEWRITER_TEXT.length) {
          window.clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 55);
    }, 350);

    return () => {
      window.clearTimeout(startDelay);

      if (typingInterval) {
        window.clearInterval(typingInterval);
      }
    };
  }, [isInView, reduceMotion]);

  return (
    <SectionShell
      background="cream"
      spacing="default"
      contained={false}
    >
      <PageContainer
        width="wide"
        className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 xl:gap-24"
      >

        {/* LEFT CONTENT */}
        <Reveal
          direction="left"
          className="relative z-10"
        >
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/60 px-4 py-2">
            <Sprout
              size={14}
              className="text-[#6b9c7d]"
            />

            <span className="eyebrow">
              A place to feel at home
            </span>
          </div>

          {/* Heading with typewriter */}
          <h2
            ref={headingRef}
            className="max-w-2xl font-display text-4xl leading-[1.06] tracking-[-0.045em] text-forest sm:text-5xl lg:text-[3.7rem] xl:text-[4rem]"
          >
            Choosing a nursery is choosing the people who will

            <span className="mt-2 block min-h-[2.05em] text-[#668b70] sm:min-h-[1.05em]">
              <span aria-hidden="true">
                {typedText}
              </span>

              {/* Animated cursor */}
              <span
                className={`ml-1 inline-block h-[0.78em] w-[2px] translate-y-[0.08em] bg-[#b58b38] ${
                  isTyping
                    ? "animate-pulse opacity-100"
                    : "opacity-0"
                }`}
                aria-hidden="true"
              />

              {/* Accessible complete sentence */}
              <span className="sr-only">
                {TYPEWRITER_TEXT}
              </span>
            </span>
          </h2>

          {/* Description */}
          <div className="mt-7 max-w-xl space-y-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            <p>
              We know it is not only a place you are choosing.
              It is a team, a routine and a feeling you want
              to be right the moment you walk in.
            </p>

            <p>
              At Beanstalk we would like you to see, hear
              and feel what a day here is like before you
              decide anything. Ask every question you have.
              Take your time.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button
              asChild
              size="lg"
              className="group"
            >
              <Link href="/about">
                About Beanstalk

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>

            <div className="border-l border-forest/15 pl-4">
              <p className="font-display text-base text-forest">
                Come and meet us.
              </p>

              <p className="mt-1 text-xs leading-5 text-muted">
                The best introduction is a visit.
              </p>
            </div>
          </div>

        </Reveal>

        {/* RIGHT IMAGE COLLAGE */}
        <Reveal
          direction="right"
          delay={0.15}
          className="relative mx-auto w-full max-w-[34rem] py-5 sm:py-8"
        >

          {/* Decorative background circle */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? {}
                : {
                    rotate: 360
                  }
            }
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -right-3 -top-3 size-24 rounded-full border border-dashed border-[#b58b38]/40 sm:-right-5 sm:-top-5 sm:size-32"
          />

          {/* Main image */}
          <motion.div
            whileHover={
              reduceMotion
                ? {}
                : {
                    y: -5,
                    transition: { duration: 0.35 }
                  }
            }
            className="relative aspect-[1.4] w-[78%] overflow-hidden rounded-[1.5rem] bg-butter shadow-[0_20px_50px_rgba(16,60,48,0.12)] sm:rounded-[2rem]"
          >
            <Image
              src="/images/gallery/3.jpg"
              alt=""
              fill
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 55vw, 420px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-forest/25 to-transparent" />
          </motion.div>

          {/* Secondary image */}
          <motion.div
            whileHover={
              reduceMotion
                ? {}
                : {
                    y: -5,
                    transition: { duration: 0.35 }
                  }
            }
            className="absolute bottom-0 right-0 aspect-square w-[43%] overflow-hidden rounded-[1.5rem] border-[5px] border-cream bg-forest shadow-[0_20px_50px_rgba(16,60,48,0.18)] sm:rounded-[2rem] sm:border-[7px]"
          >
            <Image
              src="/images/gallery/15.jpg"
              alt=""
              fill
              sizes="(max-width: 640px) 43vw, (max-width: 1024px) 30vw, 230px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Floating label */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 25,
                    y: 10
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease
            }}
            className="absolute -bottom-5 left-3 z-10 flex items-center gap-3 rounded-xl border border-forest/5 bg-white px-4 py-3 shadow-[0_12px_35px_rgba(16,60,48,0.10)] sm:left-5 sm:rounded-2xl sm:px-5 sm:py-4"
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-[#eaf0e8] text-[#668b70]">
              <Sparkles size={17} />
            </div>

            <div>
              <p className="font-display text-sm text-forest">
                Little moments.
              </p>

              <p className="mt-0.5 text-[10px] text-muted">
                Lasting memories.
              </p>
            </div>
          </motion.div>

        </Reveal>

      </PageContainer>
    </SectionShell>
  );
}
