"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/layout/PageContainer";
import EnquiryForm from "@/components/forms/EnquiryForm";
import BookVisitForm from "@/components/forms/BookVisitForm";
import Reveal from "@/components/motion/Reveal";
import { admissionsQuestions } from "@/content/admissions";
import { siteContact } from "@/content/site";

export default function AdmissionsContactAndQuestions() {
  const [activeTab, setActiveTab] = useState("enquire");
  const [intent, setIntent] = useState("enquiry");
  const formRef = useRef(null);

  function showRegistrationForm() {
    setActiveTab("enquire");
    setIntent("register");
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function showEnquiryTab() {
    setIntent("enquiry");
    setActiveTab("enquire");
  }

  function showVisitTab() {
    setIntent("enquiry");
    setActiveTab("visit");
  }

  return (
    <>
      <section className="bg-sage py-14 sm:py-18 lg:py-24">
        <PageContainer width="wide">
          <div className="grid items-start gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 xl:gap-20">
            <Reveal className="lg:sticky lg:top-28">
              <p className="eyebrow mb-5">Get in touch</p>
              <h2 className="max-w-md font-display text-4xl leading-[0.98] tracking-[-0.045em] text-forest sm:text-5xl lg:text-[3.6rem]">
                Visit us, or ask us anything.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                Choose whichever feels easier.
              </p>

              <ul className="mt-6 space-y-0">
                {[
                  "We do not show online time slots. We agree a visit time with you directly.",
                  "A visit request is not confirmed until we reply.",
                  "No pressure and no obligation to register."
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-forest/10 py-3 text-xs leading-6 text-muted"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#6d9b78] text-white">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${siteContact.phoneHref}`}
                className="mt-5 inline-flex items-center gap-2 border-b border-[#9b843f]/60 pb-1 text-sm font-semibold text-forest transition-colors hover:text-terracotta"
              >
                Call {siteContact.phoneDisplay}
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </Reveal>

            <div ref={formRef} id="admissions-contact-form" className="scroll-mt-24">
              <div
                role="tablist"
                aria-label="Choose how to contact Beanstalk"
                className="mb-3 inline-flex rounded-full bg-cream p-1"
              >
                <button
                  type="button"
                  role="tab"
                  id="admissions-enquire-tab"
                  aria-selected={activeTab === "enquire"}
                  aria-controls="admissions-form-panel"
                  onClick={showEnquiryTab}
                  className={`min-h-10 rounded-full px-5 text-xs font-semibold transition-all duration-200 ${
                    activeTab === "enquire"
                      ? "bg-forest text-white shadow-sm"
                      : "text-forest hover:bg-white/70"
                  }`}
                >
                  Enquire
                </button>
                <button
                  type="button"
                  role="tab"
                  id="admissions-visit-tab"
                  aria-selected={activeTab === "visit"}
                  aria-controls="admissions-form-panel"
                  onClick={showVisitTab}
                  className={`min-h-10 rounded-full px-5 text-xs font-semibold transition-all duration-200 ${
                    activeTab === "visit"
                      ? "bg-forest text-white shadow-sm"
                      : "text-forest hover:bg-white/70"
                  }`}
                >
                  Request a visit
                </button>
              </div>

              <div
                id="admissions-form-panel"
                role="tabpanel"
                aria-labelledby={activeTab === "enquire" ? "admissions-enquire-tab" : "admissions-visit-tab"}
              >
                {activeTab === "enquire" ? (
                  <EnquiryForm key={intent} intent={intent} />
                ) : (
                  <BookVisitForm />
                )}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="bg-cream py-14 sm:py-18 lg:py-24">
        <PageContainer width="wide">
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <Reveal>
                <p className="eyebrow mb-4">On your visit</p>
                <h2 className="max-w-md font-display text-4xl leading-[0.98] tracking-[-0.045em] text-forest sm:text-5xl">
                  Questions worth asking.
                </h2>
              </Reveal>

              <ul className="mt-5">
                {admissionsQuestions.map((question, index) => (
                  <Reveal key={question} delay={index * 0.035}>
                    <li className="flex items-start gap-3 border-b border-forest/10 py-2.5 text-xs leading-5 text-muted">
                      <span className="mt-0.5 flex size-[17px] shrink-0 items-center justify-center rounded-full bg-[#6d9b78] text-white">
                        <Check size={10} strokeWidth={3} aria-hidden="true" />
                      </span>
                      {question}
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Link
                href="/faqs"
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-forest underline decoration-forest/30 underline-offset-4 transition-colors hover:text-terracotta"
              >
                Explore all FAQs <ChevronRight size={13} aria-hidden="true" />
              </Link>
            </div>

            <Reveal
              direction="right"
              className="min-h-[17rem] rounded-2xl border border-[#9b843f]/15 bg-butter p-6 sm:p-8 lg:p-9"
            >
              <span className="inline-flex rounded-full bg-[#eef4df] px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.15em] text-forest">
                Ready?
              </span>
              <h3 className="mt-4 font-display text-3xl leading-tight text-forest">
                Register your interest
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                Already visited, or know this is the right place? Tell us you
                would like to register and we will guide you through the next
                steps.
              </p>
              <Button className="mt-5" onClick={showRegistrationForm}>
                Register your interest <ArrowRight aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
