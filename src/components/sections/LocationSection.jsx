import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import LazyMap from "@/components/gallery/LazyMap";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { siteContact } from "@/content/site";

export default function LocationSection() {
  return (
    <section className="bg-sage py-20 sm:py-24 lg:py-28">
      <PageContainer width="wide" className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal direction="left">
          <p className="eyebrow">Find us</p>
          <h2 className="mt-5 max-w-md font-display text-4xl leading-[1.02] tracking-[-0.04em] text-forest sm:text-5xl lg:text-6xl">
            In the heart of Leicester.
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted">
            Beanstalk Day Nursery
          </p>
          <address className="mt-3 not-italic text-sm leading-7 text-forest">
            {siteContact.address.slice(1).map((line) => <span key={line} className="block">{line}</span>)}
          </address>
          <a
            href={`tel:${siteContact.phoneHref}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest"
          >
            <Phone size={15} aria-hidden="true" /> {siteContact.phoneDisplay}
          </a>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild>
              <a href={siteContact.directionsUrl} target="_blank" rel="noreferrer">
                Get Directions <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.12}>
          <LazyMap />
        </Reveal>
      </PageContainer>
    </section>
  );
}
