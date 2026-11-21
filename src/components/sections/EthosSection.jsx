import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import FeatureCard from "@/components/sections/FeatureCard";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import { homeEthos } from "@/content/home";
import { siteContact } from "@/content/site";

export default function EthosSection() {
  return (
    <section className="bg-forest py-20 text-cream sm:py-24 lg:py-28">
      <PageContainer width="wide">
        <Reveal>
          <p className="eyebrow text-butter">Our ethos</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.04em] text-cream sm:text-5xl lg:text-6xl">
            What we believe about the early years.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-cream/70 sm:text-base">
            A few ideas that shape how we think about every day at Beanstalk.
          </p>
        </Reveal>

        <StaggerContainer className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {homeEthos.map((item) => (
            <StaggerItem key={item.number}>
              <FeatureCard {...item} tone="dark" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-b border-t border-white/20 py-7">
          <p className="font-display text-2xl text-cream sm:text-3xl">
            See our ethos in action. Book a visit.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/arrange-a-visit">Book a Visit <ArrowRight aria-hidden="true" /></Link>
            </Button>
            <Button asChild variant="light">
              <a href={`tel:${siteContact.phoneHref}`}>Call the Nursery</a>
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
