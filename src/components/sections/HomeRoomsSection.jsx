import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/sections/SectionHeading";
import RoomCard from "@/components/sections/RoomCard";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import { homeRooms } from "@/content/home";
import { siteContact } from "@/content/site";

export default function HomeRoomsSection() {
  return (
    <section className="bg-cream py-20 sm:py-24 lg:py-28">
      <PageContainer width="wide">
        <Reveal>
          <SectionHeading
            eyebrow="Our nursery"
            title="Rooms for every stage."
            description="Children grow quickly. Each room is shaped around what they need at that stage."
          />
        </Reveal>

        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3">
          {homeRooms.map((room) => (
            <StaggerItem key={room.title}>
              <RoomCard {...room} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-b border-t border-forest/15 py-6">
          <p className="font-display text-2xl text-forest sm:text-3xl">
            Which room is right for your child? Come and see.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/arrange-a-visit">Book a Visit <ArrowRight aria-hidden="true" /></Link>
            </Button>
            <Button asChild variant="outline">
              <a href={`tel:${siteContact.phoneHref}`}>Call the Nursery</a>
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
