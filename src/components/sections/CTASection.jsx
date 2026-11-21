import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import SunburstBackground from "@/components/motion/SunburstBackground";
import { siteContact } from "@/content/site";

export default function CTASection({
  title = "Come and see for yourself.",
  description = "A friendly look around is the best way to know if Beanstalk is right for your family.",
  className = ""
}) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-forest py-20 text-cream sm:py-24 lg:py-28 ${className}`}
    >
      <SunburstBackground />
      <PageContainer width="wide" className="relative z-10">
        <div className="max-w-2xl">
          <p className="eyebrow text-butter">Your next step</p>
          <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[0.98] tracking-[-0.045em] text-cream sm:text-6xl lg:text-7xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-cream/75 sm:text-base sm:leading-8">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/arrange-a-visit">
                Book a Visit <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="light" size="lg">
              <Link href="/contact">Make an Enquiry</Link>
            </Button>
            <Button asChild variant="light" size="lg">
              <a href={`tel:${siteContact.phoneHref}`}>
                <Phone aria-hidden="true" /> Call the Nursery
              </a>
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
