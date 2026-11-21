import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import PageHero from "@/components/sections/PageHero";
import EthosValueRow from "@/components/sections/EthosValueRow";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { ethosValues } from "@/content/ethos";
import { siteContact } from "@/content/site";
import ImageReveal from "@/components/motion/ImageReveal";
export const metadata = {
  title: "Our Ethos",
  description:
    "Discover the values that shape care, play, relationships and learning at Beanstalk Day Nursery."
};
 
function AboutImage({ src, alt, className = "aspect-[1.35/1]" }) {
  return (
    <ImageReveal className={`image-frame relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 44vw"
        loading="lazy"
        className="object-cover transition-transform duration-700 hover:scale-[1.035]"
      />
    </ImageReveal>
  );
}

export default function OurEthosPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Our approach"
        current="Our ethos"
        title="Our ethos."
        description="What we believe about the early years, and how we hope it feels for your child and for you."
      />

      <section className="bg-cream">
        <PageContainer width="wide">
          {ethosValues.map((value) => (
            <EthosValueRow key={value.number} {...value} />
          ))}

          <Reveal className="flex flex-col gap-5 py-9 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-2xl leading-tight text-forest sm:text-3xl">
              Ideas are easy to write. Come and see them in practice.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/arrange-a-visit">
                  Book a Visit <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${siteContact.phoneHref}`}>Call the Nursery</a>
              </Button>
            </div>
          </Reveal>
        </PageContainer>
      </section>

      <CTASection
        title="The best way to discover Beanstalk is to experience it."
        description="Come and see the nursery, meet the team and ask anything you like. There is no obligation."
      />
    </main>
  );
}
