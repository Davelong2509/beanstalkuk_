"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import FAQAccordion from "@/components/faq/FAQAccordion";
import Reveal from "@/components/motion/Reveal";
import { faqGroups, faqSearchPlaceholder } from "@/content/faqs";

export default function FAQSearch() {
  const [query, setQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState(null);
  const reduceMotion = useReducedMotion();

  const filteredGroups = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();

    if (!normalized) return faqGroups;

    return faqGroups
      .map((group) => ({
        ...group,
        questions: group.questions.filter((item) =>
          [
            item.question,
            item.answer,
            group.title,
            ...(item.links || []).map((link) => link.label)
          ]
            .join(" ")
            .toLocaleLowerCase()
            .includes(normalized)
        )
      }))
      .filter((group) => group.questions.length > 0);
  }, [query]);

  const resultCount = filteredGroups.reduce(
    (count, group) => count + group.questions.length,
    0
  );

  function handleQueryChange(value) {
    setQuery(value);
    setOpenQuestion(null);
  }

  return (
    <section className="bg-cream pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
      <PageContainer width="wide">
        <div className="mx-auto max-w-[31.5rem]">
          <Reveal direction="up" amount={0.1}>
            <label htmlFor="faq-search" className="sr-only">
              Search frequently asked questions
            </label>
            <div className="group relative flex h-10 items-center rounded-full border border-[#e5d8b5] bg-white px-4 shadow-[0_2px_8px_rgba(25,58,49,0.025)] transition-all duration-200 focus-within:border-forest/55 focus-within:shadow-[0_0_0_3px_rgba(16,60,48,0.07)]">
              <Search
                size={14}
                className="mr-2 shrink-0 text-muted/75"
                aria-hidden="true"
              />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(event) => handleQueryChange(event.target.value)}
                placeholder={faqSearchPlaceholder}
                autoComplete="off"
                className="h-full min-w-0 flex-1 border-0 bg-transparent text-[0.68rem] text-forest outline-none placeholder:text-muted/70"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => handleQueryChange("")}
                  aria-label="Clear search"
                  className="ml-2 flex size-6 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-sage hover:text-forest"
                >
                  <X size={13} aria-hidden="true" />
                </button>
              ) : null}
            </div>
          </Reveal>

          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {query
              ? `${resultCount} ${resultCount === 1 ? "question" : "questions"} found`
              : `${resultCount} questions available`}
          </p>

          <div className="mt-5 sm:mt-6">
            <AnimatePresence mode="wait" initial={false}>
              {filteredGroups.length ? (
                <motion.div
                  key={query ? `results-${query}` : "all-results"}
                  initial={reduceMotion ? false : { opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: reduceMotion ? 0 : 0.18 }}
                >
                  {filteredGroups.map((group, groupIndex) => (
                    <section
                      key={group.id}
                      aria-labelledby={`faq-group-${group.id}`}
                      className={groupIndex ? "mt-5 sm:mt-6" : ""}
                    >
                      <h2
                        id={`faq-group-${group.id}`}
                        className="border-b border-forest/10 pb-1.5 font-display text-[1.04rem] leading-tight text-forest sm:text-[1.12rem]"
                      >
                        {group.title}
                      </h2>

                      <div>
                        {group.questions.map((question) => (
                          <FAQAccordion
                            key={question.id}
                            question={question}
                            isOpen={openQuestion === question.id}
                            onToggle={() =>
                              setOpenQuestion((current) =>
                                current === question.id ? null : question.id
                              )
                            }
                            searchQuery={query}
                          />
                        ))}
                      </div>
                    </section>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl border border-forest/10 bg-white px-5 py-8 text-center"
                >
                  <p className="font-display text-xl text-forest">
                    No matching questions.
                  </p>
                  <p className="mt-2 text-xs leading-6 text-muted">
                    Try another search, or get in touch and we'll be happy to help.
                  </p>
                  <button
                    type="button"
                    onClick={() => handleQueryChange("")}
                    className="mt-4 text-xs font-semibold text-forest underline decoration-forest/35 underline-offset-4 hover:text-terracotta"
                  >
                    Clear search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
