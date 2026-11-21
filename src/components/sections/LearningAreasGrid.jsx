"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  Globe2,
  Heart,
  MessageCircle,
  Palette,
  Shapes,
  Sparkles,
  Footprints
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  message: MessageCircle,
  movement: Footprints,
  heart: Heart,
  book: BookOpen,
  shapes: Shapes,
  globe: Globe2,
  palette: Palette
};

export default function LearningAreasGrid({ areas }) {
  const [openArea, setOpenArea] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid items-start gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {areas.map((area) => {
        const Icon = iconMap[area.icon] || Sparkles;
        const isOpen = openArea === area.id;
        const panelId = `learning-area-${area.id}`;

        return (
          <motion.article
            key={area.id}
            layout={!shouldReduceMotion}
            transition={{ layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
            className={cn(
              "overflow-hidden rounded-xl border bg-white shadow-[0_8px_28px_rgba(25,58,49,0.055)] transition-colors duration-300",
              isOpen ? "border-forest/25" : "border-forest/[0.06]"
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenArea(isOpen ? null : area.id)}
              className="group flex min-h-[6.8rem] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:min-h-[7.5rem] sm:px-6"
            >
              <span className="min-w-0">
                <span className="mb-3 flex items-center gap-2">
                  <span className="eyebrow text-[0.58rem] text-muted">
                    {area.group}
                  </span>
                  <span className="h-px w-5 bg-terracotta/40" />
                </span>
                <span className="block max-w-[18rem] font-display text-lg leading-[1.15] text-forest sm:text-xl">
                  {area.title}
                </span>
              </span>

              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                  isOpen
                    ? "bg-forest text-cream"
                    : "bg-sage text-forest group-hover:bg-butter"
                )}
                aria-hidden="true"
              >
                <Icon size={17} strokeWidth={1.7} />
              </span>
              <span className="sr-only">{isOpen ? "Close details" : "Read more"}</span>
            </button>

            <div id={panelId} aria-hidden={!isOpen}>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="content"
                    initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-forest/10 px-5 pb-5 pt-4 sm:px-6">
                      <p className="text-sm leading-7 text-muted">{area.summary}</p>
                      <ul className="mt-4 space-y-2.5">
                        {area.examples.map((example) => (
                          <li key={example} className="flex gap-2.5 text-xs leading-5 text-forest/80">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-terracotta" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
