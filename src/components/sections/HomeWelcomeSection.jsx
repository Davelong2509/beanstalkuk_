import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import SplitReveal from "@/components/motion/SplitReveal";

export default function HomeWelcomeSection() {
  const text = (
    <div>
      <SectionHeading
        eyebrow="A personal welcome"
        title="Come and get to know us."
        description="A short welcome from the people behind Beanstalk, so you can hear directly how we think about caring for your child."
        size="small"
      />
      <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
        Our welcome video is on its way. Until then, come and meet us in person.
        We would like this to feel like a personal welcome, not an advertisement.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/arrange-a-visit">Book a Visit <ArrowRight aria-hidden="true" /></Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Call the Nursery</Link>
        </Button>
      </div>
    </div>
  );

  const image = (
    <div className="image-frame relative aspect-[1.65] w-full shadow-[0_20px_50px_rgba(16,60,48,0.12)]">
      <Image
        src="/images/nursery/home-welcome.webp"
        alt="Children and nursery staff gathered together during a visit to a local library"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );

  return (
    <section className="bg-sage py-20 sm:py-24 lg:py-28">
      <PageContainer width="wide">
        <SplitReveal left={text} right={image} gap="gap-12 lg:gap-20" />
      </PageContainer>
    </section>
  );
}
