"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, FileText, MapPin, Phone } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/motion/Reveal";
import { siteContact } from "@/content/site";

const sections = [
  { id: "getting-in-touch", label: "Getting in touch" },
  { id: "fees-and-funding", label: "Fees and funding" },
  { id: "opening-times", label: "Opening times" },
  { id: "policies-and-documents", label: "Policies and documents" },
  { id: "safeguarding", label: "Safeguarding" },
  { id: "concerns-and-complaints", label: "Concerns and complaints" }
];

function SectionHeading({ children }) {
  return (
    <h2 className="font-display text-[2rem] leading-[1.08] tracking-[-0.035em] text-forest sm:text-[2.35rem]">
      {children}
    </h2>
  );
}

function ParentSection({ id, children, delay = 0 }) {
  return (
    <Reveal delay={delay} amount={0.08}>
      <section id={id} className={`scroll-mt-28 border-b border-forest/10 pb-8 sm:pb-9 ${id === "getting-in-touch" ? "pt-0" : "pt-8 sm:pt-10"} last:border-0`}>
        {children}
      </section>
    </Reveal>
  );
}

export default function ParentInformationContent() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || !targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      {
        rootMargin: "-18% 0px -68% 0px",
        threshold: 0
      }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <PageContainer width="wide">
        <div className="grid items-start gap-10 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[12rem_minmax(0,1fr)] xl:gap-16">
          <aside className="hidden lg:sticky lg:top-28 lg:block">
            <nav aria-label="Parent information sections" className="border-t border-forest/10">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex min-h-10 items-center justify-between gap-2 border-b border-forest/10 py-2 text-[0.68rem] font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-terracotta"
                        : "text-forest/75 hover:text-forest"
                    }`}
                  >
                    <span>{section.label}</span>
                    {isActive ? <span className="h-px w-4 bg-terracotta" /> : null}
                  </a>
                );
              })}
            </nav>
          </aside>

          <div className="min-w-0 max-w-3xl">
            <ParentSection id="getting-in-touch">
              <SectionHeading>Getting in touch</SectionHeading>
              <div className="mt-3 space-y-3 text-sm leading-7 text-muted">
                <p>
                  Call{" "}
                  <a
                    href={`tel:${siteContact.phoneHref}`}
                    className="font-medium text-forest underline decoration-forest/35 underline-offset-4 transition-colors hover:text-terracotta"
                  >
                    {siteContact.phoneDisplay}
                  </a>{" "}
                  or email{" "}
                  <a
                    href={`mailto:${siteContact.email}`}
                    className="font-medium text-forest underline decoration-forest/35 underline-offset-4 transition-colors hover:text-terracotta"
                  >
                    {siteContact.email}
                  </a>.
                </p>
                <a
                  href={siteContact.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-start gap-2 text-xs leading-6 text-muted transition-colors hover:text-forest"
                >
                  <MapPin size={15} className="mt-1 shrink-0 text-terracotta" aria-hidden="true" />
                  <span>
                    {siteContact.address[1]}
                    <br />
                    {siteContact.address[2]}
                    <span className="ml-1 inline-flex items-center gap-1 font-semibold text-forest underline decoration-forest/30 underline-offset-4">
                      Get directions <ArrowUpRight size={12} aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </div>
            </ParentSection>

            <ParentSection id="fees-and-funding" delay={0.03}>
              <SectionHeading>Fees and funding</SectionHeading>
              <p className="mt-3 text-xs leading-6 text-muted">
                See our page on{" "}
                <Link
                  href="/fees-and-funding"
                  className="font-medium text-forest underline decoration-forest/35 underline-offset-4 transition-colors hover:text-terracotta"
                >
                  fees and funding
                </Link>
                , or{" "}
                <Link
                  href="/contact"
                  className="font-medium text-forest underline decoration-forest/35 underline-offset-4 transition-colors hover:text-terracotta"
                >
                  get in touch
                </Link>.
              </p>
            </ParentSection>

            <ParentSection id="opening-times" delay={0.06}>
              <SectionHeading>Opening times</SectionHeading>
              <p className="mt-3 text-xs leading-6 text-muted">
                Please contact us for opening times.
              </p>
              <a
                href={`tel:${siteContact.phoneHref}`}
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-forest transition-colors hover:text-terracotta"
              >
                <Phone size={14} aria-hidden="true" />
                Call the nursery
                <ChevronRight size={13} aria-hidden="true" />
              </a>
            </ParentSection>

            <ParentSection id="policies-and-documents" delay={0.09}>
              <SectionHeading>Policies and documents</SectionHeading>
              <p className="mt-3 text-xs leading-6 text-muted">
                Parents have a right to see our policies at any time. They will be available to read or download here.
              </p>

              <Link
                href="/privacy-notice"
                className="group mt-5 flex min-h-[3.5rem] items-center justify-between gap-4 rounded-lg bg-white px-4 py-3 shadow-[0_8px_25px_rgba(25,58,49,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(25,58,49,0.11)] sm:px-5"
              >
                <span className="flex items-center gap-3 text-xs font-semibold text-forest">
                  <span className="flex size-8 items-center justify-center rounded-full bg-sage text-forest">
                    <FileText size={15} aria-hidden="true" />
                  </span>
                  Privacy notice
                </span>
                <span className="inline-flex items-center gap-1 border-b border-[#9b843f]/70 pb-1 text-[0.68rem] font-semibold text-forest transition-colors group-hover:text-terracotta">
                  Read draft
                  <ArrowUpRight size={12} aria-hidden="true" />
                </span>
              </Link>
            </ParentSection>

            <ParentSection id="safeguarding" delay={0.12}>
              <SectionHeading>Safeguarding</SectionHeading>
              <p className="mt-3 text-xs leading-6 text-muted">
                Keeping children safe is the most important thing we do. Our safeguarding policy, and the name of our designated safeguarding lead, will be shown here.
              </p>
            </ParentSection>

            <ParentSection id="concerns-and-complaints" delay={0.15}>
              <SectionHeading>Concerns and complaints</SectionHeading>
              <p className="mt-3 text-xs leading-6 text-muted">
                If you are ever worried, please tell us first so we can put things right. You may also contact Ofsted at any time through{" "}
                <a
                  href="https://www.gov.uk/government/organisations/ofsted"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-forest underline decoration-forest/35 underline-offset-4 transition-colors hover:text-terracotta"
                >
                  ofsted.gov.uk
                </a>.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-forest underline decoration-forest/35 underline-offset-4 transition-colors hover:text-terracotta"
              >
                Contact the nursery <ChevronRight size={13} aria-hidden="true" />
              </Link>
            </ParentSection>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
