"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronRight, Minus, Plus } from "lucide-react";
import Link from "next/link";

export default function FAQAccordion({
  question,
  isOpen,
  onToggle,
}) {
  const reduceMotion = useReducedMotion();
  const panelId = `faq-answer-${question.id}`;
  const triggerId = `faq-question-${question.id}`;

  return (
    <article className="border-b border-forest/10">
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex min-h-[3.15rem] w-full items-center justify-between gap-4 py-3 text-left text-forest transition-colors hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          <span className="font-display text-[0.98rem] leading-[1.35] sm:text-[1.04rem]">
            {question.question}
          </span>
          <span
            className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
              isOpen
                ? "rotate-180 border-forest bg-forest text-white"
                : "border-forest/40 text-forest group-hover:border-terracotta group-hover:text-terracotta"
            }`}
            aria-hidden="true"
          >
            {isOpen ? <Minus size={13} /> : <Plus size={13} />}
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.28,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-9 text-[0.72rem] leading-6 text-muted sm:pb-6 sm:text-xs sm:leading-7">
              <p>{question.answer}</p>
              {question.links?.length ? (
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  {question.links.map((link) => {
                    const classes =
                      "inline-flex items-center gap-1 font-semibold text-forest underline decoration-forest/30 underline-offset-4 transition-colors hover:text-terracotta";
                    return link.external || link.href.startsWith("tel:") || link.href.startsWith("mailto:") ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                        className={classes}
                      >
                        {link.label}
                        {link.external ? <ChevronRight size={12} aria-hidden="true" /> : null}
                      </a>
                    ) : (
                      <Link key={link.href} href={link.href} className={classes}>
                        {link.label}
                        <ChevronRight size={12} aria-hidden="true" />
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
