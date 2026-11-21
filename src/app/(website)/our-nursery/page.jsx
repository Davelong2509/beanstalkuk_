import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import RoomCard from "@/components/sections/RoomCard";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/motion/Reveal";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import { Button } from "@/components/ui/button";
import { rooms } from "@/content/rooms";
import { siteContact } from "@/content/site";

export const metadata = {
  title: "Our Nursery",
  description:
    "Explore the Babies, Toddlers and Preschool rooms at Beanstalk Day Nursery in Leicester."
};

export default function OurNurseryPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Babies, toddlers and preschool"
        current="Our nursery"
        title="Our nursery."
        description="Three rooms that follow your child from their earliest months to the day they start school."
      />

      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <PageContainer width="wide">
          <StaggerContainer className="grid gap-4 md:grid-cols-3 md:gap-5">
            {rooms.map((room) => (
              <StaggerItem key={room.slug}>
                <RoomCard {...room} className="min-h-[27rem] sm:min-h-[30rem]" />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white px-5 py-4 shadow-[0_8px_28px_rgba(25,58,49,0.045)]">
              <p className="eyebrow">Babies, all ages</p>
              <p className="mt-1 font-display text-2xl text-forest">From 3 months</p>
            </div>
            <div className="rounded-lg bg-white px-5 py-4 shadow-[0_8px_28px_rgba(25,58,49,0.045)]">
              <p className="eyebrow">Preschool, all ages</p>
              <p className="mt-1 font-display text-2xl text-forest">Up to 5 years</p>
            </div>
          </Reveal>

          <div className="mt-8 flex flex-col gap-4 border-y border-forest/15 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-2xl text-forest sm:text-3xl">
              See the rooms for yourself.
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

      <section className="bg-sage py-16 sm:py-20 lg:py-24">
        <PageContainer width="wide">
          <Reveal>
            <SectionHeading
              eyebrow="The learning"
              title="How learning works here."
              description="Our rooms follow the Early Years Foundation Stage."
            />
            <Link
              href="/learning-and-development"
              className="mt-5 inline-flex items-center gap-2 border-b border-forest/35 pb-1 text-sm font-semibold text-forest transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Learning and development <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
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
