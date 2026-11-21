import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import MediaPlaceholder from "@/components/sections/MediaPlaceholder";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/motion/Reveal";
import SplitReveal from "@/components/motion/SplitReveal";
import ImageReveal from "@/components/motion/ImageReveal";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/content/site";
import AboutHero from "@/components/sections/AboutHero";
const ease = [0.22, 1, 0.36, 1];

 
export const metadata = {
  title: "About Beanstalk",
  description:
    "Get to know Beanstalk Day Nursery in Leicester city centre, our approach to care and the environment we want every child to grow in."
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


export default function AboutPage() {
  return (
    <main id="main-content">
       
      <AboutHero /> 

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <PageContainer width="wide">
          <SplitReveal
            gap="gap-10 lg:gap-16"
            left={
              <div className="max-w-xl">
                <SectionHeading
                  eyebrow="Our name"
                  title="Why we are called Beanstalk."
                  size="large"
                />
                <p className="mt-6 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  A bean is tiny. Given care, light and room to reach, it grows
                  beyond what anyone expects.
                </p>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  That is how we think about childhood. Every child starts
                  small, and every child can grow well with the right support
                  around them.
                </p>
              </div>
            }
            right={
              <ImageReveal className="image-frame relative aspect-[1.35/1]">
                <Image
                  src="/images/nursery/about-hero.png"
                  alt="A young child smiling in a patterned green top"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover"
                />
              </ImageReveal>
            }
          />
        </PageContainer>
      </section>

      <section className="bg-sage py-16 sm:py-20 lg:py-24">
        <PageContainer width="wide">
          <SplitReveal
            gap="gap-10 lg:gap-16"
            left={
              <div className="max-w-xl">
                <SectionHeading
                  eyebrow="What parents can expect"
                  title="A warm, professional relationship."
                  size="large"
                />
                <p className="mt-6 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  We would like every parent to feel welcome from the first
                  visit, kept in the picture about their child, and able to
                  speak to a real person whenever they need to.
                </p>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  You can call or email the nursery directly, ask for a visit
                  at any time and ask any question you like.
                </p>
                <Link
                  href="/our-ethos"
                  className="mt-5 inline-flex items-center gap-2 border-b border-forest/35 pb-1 text-sm font-semibold text-forest transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  Read our ethos <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            }
           right={
              <AboutImage
                src="/images/gallery/15.jpg"
                alt="A young child smiling in a patterned green top"
              />
            }
          />

          <div className="mt-14 flex flex-col gap-5 border-y border-forest/15 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-2xl text-forest sm:text-3xl">
              Come and see what we mean.
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
          </div>
        </PageContainer>
      </section>

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <PageContainer width="wide">
          <SplitReveal
            gap="gap-10 lg:gap-16"
            left={
              <div className="max-w-xl">
                <SectionHeading
                  eyebrow="The environment"
                  title="A space designed for young children."
                  size="large"
                />
               <AboutImage
                      src="/images/nursery/about-child.webp"
                      alt="A photograph of the Beanstalk nursery environment"
                      className="mt-8 aspect-[1.45/1]" />              </div>
            }
            right={
              <div className="max-w-lg lg:pt-14">
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  The nursery is on Bishop Street, close to Town Hall Square in
                  Leicester city centre. Our aim is for every room to feel
                  calm, welcoming and full of things to explore.
                </p>
                <Link
                  href="/our-nursery"
                  className="mt-5 inline-flex items-center gap-2 border-b border-forest/35 pb-1 text-sm font-semibold text-forest transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  See our rooms <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            }
          />
        </PageContainer>
      </section>

      <section className="bg-sage py-14 sm:py-16">
        <PageContainer width="wide">
          <Reveal className="flex flex-col gap-5 border-b border-forest/15 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-3">Meet the team</p>
              <h2 className="max-w-xl font-display text-3xl leading-tight text-forest sm:text-4xl">
                The people behind Beanstalk.
              </h2>
              <Link
                href="/meet-the-team"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-terracotta"
              >
                Meet the whole team <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <Button asChild variant="outline">
              <Link href="/arrange-a-visit">Come and meet us</Link>
            </Button>
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
