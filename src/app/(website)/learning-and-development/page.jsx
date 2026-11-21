import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import PageHero from "@/components/sections/PageHero";
import LearningAreasGrid from "@/components/sections/LearningAreasGrid";
import LearningCharacteristics from "@/components/sections/LearningCharacteristics";
import ParentLearningUpdates from "@/components/sections/ParentLearningUpdates";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/content/site";
import {
  learningAreas,
  learningCharacteristics,
  parentLearningUpdates
} from "@/content/learning";

export const metadata = {
  title: "Learning and Development",
  description:
    "Discover the seven areas of learning in the Early Years Foundation Stage, how children learn through play and how Beanstalk works with parents."
};

export default function LearningAndDevelopmentPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="How children learn here"
        current="Learning and development"
        parentLabel="Our nursery"
        parentHref="/our-nursery"
        title={<>Learning and<br className="hidden sm:block" /> development.</>}
        description="Play is how young children learn best. Our approach follows the Early Years Foundation Stage, the framework for every registered early years provider in England."
      />

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <PageContainer width="wide">
          <Reveal>
            <p className="eyebrow mb-4">The EYFS</p>
            <h2 className="font-display text-4xl leading-[0.98] tracking-[-0.04em] text-forest sm:text-5xl lg:text-6xl">
              Seven areas of learning.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Three prime areas come first, because they underpin everything
              else. Four specific areas build on them. Tap each one to read more.
            </p>
          </Reveal>

          <div className="mt-9">
            <LearningAreasGrid areas={learningAreas} />
          </div>
        </PageContainer>
      </section>

      <LearningCharacteristics items={learningCharacteristics} />

      <ParentLearningUpdates items={parentLearningUpdates} />

      <section className="bg-cream pb-14 sm:pb-16">
        <PageContainer width="wide">
          <Reveal className="flex flex-col gap-5 border-y border-forest/15 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-2xl text-forest sm:text-3xl">
              See learning in action. Book a visit.
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
