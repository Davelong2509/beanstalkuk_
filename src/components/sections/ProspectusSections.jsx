import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/motion/Reveal";
import MediaPlaceholder from "@/components/sections/MediaPlaceholder";
import { Button } from "@/components/ui/button";
import { prospectusSections } from "@/content/prospectus";
import { siteContact } from "@/content/site";

function SectionLink({ link }) {
  if (!link) return null;

  return (
    <Link
      href={link.href}
      className="mt-3 inline-flex items-center gap-1.5 border-b border-forest/25 pb-0.5 text-[0.72rem] font-semibold text-forest transition-colors hover:border-terracotta hover:text-terracotta"
    >
      {link.label}
      <ArrowUpRight size={12} aria-hidden="true" />
    </Link>
  );
}

function ProspectusSection({ section, index }) {
  return (
    <Reveal
      id={section.id}
      className="scroll-mt-28 border-b border-forest/10 py-7 sm:py-8"
      delay={Math.min(index * 0.025, 0.18)}
      amount={0.12}
    >
      <p className="mb-1.5 font-display text-[0.72rem] italic leading-none text-terracotta">
        {section.number}
      </p>
      <h2 className="font-display text-[1.65rem] leading-[1.08] tracking-[-0.025em] text-forest sm:text-[1.9rem]">
        {section.title}
      </h2>

      {section.paragraphs?.length ? (
        <div className="mt-2.5 max-w-3xl space-y-2">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[0.76rem] leading-[1.75] text-muted sm:text-[0.82rem]">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {section.media ? (
        <div className="mt-4">
          <MediaPlaceholder
            tone="butter"
            label="Nursery environment photography placeholder"
            className="aspect-[1.65/1] w-full rounded-lg sm:max-w-[34rem]"
          />
          <p className="mt-2 text-[0.68rem] leading-5 text-muted">
            {section.caption}
          </p>
        </div>
      ) : null}

      {section.contact ? (
        <div className="mt-3 space-y-2 text-[0.74rem] leading-6 text-muted">
          <a
            href={siteContact.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-start gap-2 transition-colors hover:text-terracotta"
          >
            <MapPin size={14} className="mt-1 shrink-0 text-terracotta" aria-hidden="true" />
            <span>{siteContact.address.slice(1).join(", ")}</span>
          </a>
          <a
            href={`tel:${siteContact.phoneHref}`}
            className="flex w-fit items-center gap-2 transition-colors hover:text-terracotta"
          >
            <Phone size={13} className="shrink-0 text-terracotta" aria-hidden="true" />
            Telephone {siteContact.phoneDisplay}
          </a>
          <a
            href={`mailto:${siteContact.email}`}
            className="flex w-fit items-center gap-2 break-all transition-colors hover:text-terracotta"
          >
            <Mail size={13} className="shrink-0 text-terracotta" aria-hidden="true" />
            Email {siteContact.email}
          </a>
          <a
            href={siteContact.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 border-b border-forest/25 pb-0.5 font-semibold text-forest transition-colors hover:border-terracotta hover:text-terracotta"
          >
            Get directions <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </div>
      ) : null}

      {section.actions ? (
        <div className="mt-4 flex flex-wrap gap-2.5">
          <Button asChild size="sm">
            <Link href="/arrange-a-visit">
              Book a Visit <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href={`tel:${siteContact.phoneHref}`}>Call the Nursery</a>
          </Button>
        </div>
      ) : null}

      <SectionLink link={section.link} />
    </Reveal>
  );
}

export default function ProspectusSections() {
  return (
    <section className="bg-cream pb-14 sm:pb-20">
      <PageContainer width="wide">
        <div className="grid gap-9 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[13rem_minmax(0,1fr)] xl:gap-14">
          <aside className="hidden lg:block">
            <nav aria-label="Prospectus contents" className="sticky top-28 pt-7">
              <ol className="space-y-2.5">
                {prospectusSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-start gap-2 text-[0.65rem] leading-[1.45] text-forest/75 transition-colors hover:text-terracotta"
                    >
                      <span className="font-display text-[0.62rem] italic text-terracotta/80">
                        {section.number}
                      </span>
                      <span className="border-b border-transparent group-hover:border-terracotta/40">
                        {section.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0">
            {prospectusSections.map((section, index) => (
              <ProspectusSection
                key={section.id}
                section={section}
                index={index}
              />
            ))}
          </div>
        </div>

        <Reveal className="mt-9 flex flex-col gap-4 border-y border-forest/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl leading-tight text-forest sm:text-2xl">
            Now come and see Beanstalk in person.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <Button asChild size="sm">
              <Link href="/arrange-a-visit">
                Book a Visit <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              size="sm"
              variant="outline"
              disabled
              title="The prospectus PDF is not available yet"
              aria-label="Prospectus PDF coming soon"
              className="border-transparent bg-sage text-muted disabled:opacity-100 hover:bg-sage"
            >
              Prospectus PDF coming soon
            </Button>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
