import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/content/site";
import Reveal from "@/components/motion/Reveal";

export default function TeamIntroSection() {
  return (
    <section className="bg-cream py-20 sm:py-24 lg:py-28">
      <PageContainer width="wide" className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <Reveal>
          <SectionHeading
            eyebrow="The people behind Beanstalk"
            title="The people who will care for your child."
            description="Parents are choosing people as much as a place. Meet the team who make Beanstalk what it is."
            size="small"
          />
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
            The best way to meet us is in person. Book a visit and we will introduce you.
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-3 lg:pb-1">
          <Button asChild>
            <Link href="/meet-the-team">Meet the Team <ArrowRight aria-hidden="true" /></Link>
          </Button>
          <Button asChild variant="outline">
            <a href={`tel:${siteContact.phoneHref}`}>Call the Nursery</a>
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
