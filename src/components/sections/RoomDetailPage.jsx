import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import PageHero from "@/components/sections/PageHero";
import ImageReveal from "@/components/motion/ImageReveal";
import Reveal from "@/components/motion/Reveal";
import SplitReveal from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/button";

function DetailList({ items }) {
  return (
    <ul className="mt-5 divide-y divide-forest/10">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 py-3 text-sm leading-6 text-muted">
          <CheckCircle2
            size={17}
            strokeWidth={2.2}
            className="mt-0.5 shrink-0 text-[#5b9875]"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function RoomDetailPage({ room }) {
  return (
    <main id="main-content">
      <PageHero
        eyebrow={room.eyebrow}
        current={room.breadcrumb}
        parentLabel="Our nursery"
        parentHref="/our-nursery"
        title={room.title}
        description={room.description}
      />

      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <PageContainer width="wide">
          <SplitReveal
            gap="gap-8 lg:gap-16"
            left={
              <div className="max-w-xl">
                <h2 className="max-w-lg font-display text-3xl leading-[1.02] tracking-[-0.04em] text-forest sm:text-4xl lg:text-[2.65rem]">
                  {room.introTitle}
                </h2>
                {room.introParagraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-5 max-w-lg text-sm leading-7 text-muted sm:text-[0.95rem] sm:leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            }
            right={
              <ImageReveal className="image-frame relative aspect-[0.79/1] w-full max-w-[26rem] lg:ml-auto">
                <Image
                  src={room.image}
                  alt={room.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </ImageReveal>
            }
          />
        </PageContainer>
      </section>

      <section className="bg-sage py-12 sm:py-16 lg:py-20">
        <PageContainer width="wide">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <Reveal>
              <p className="eyebrow">What children experience</p>
              <h2 className="mt-3 max-w-sm font-display text-3xl leading-[1.02] tracking-[-0.035em] text-forest sm:text-4xl">
                Activities and learning.
              </h2>
              <DetailList items={room.childrenExperience} />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">How we support them</p>
              <h2 className="mt-3 max-w-sm font-display text-3xl leading-[1.02] tracking-[-0.035em] text-forest sm:text-4xl">
                How staff help children grow.
              </h2>
              <DetailList items={room.staffSupport} />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <PageContainer width="wide">
          <Reveal>
            <p className="eyebrow">The practical details</p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-[-0.035em] text-forest sm:text-4xl">
              What parents ask us.
            </h2>
          </Reveal>

          {room.ageRange ? (
            <Reveal delay={0.05} className="mt-6 rounded-lg bg-white px-5 py-4 shadow-[0_8px_28px_rgba(25,58,49,0.035)]">
              <p className="eyebrow !text-[0.55rem]">Age range</p>
              <p className="mt-1 text-sm font-semibold text-forest">{room.ageRange}</p>
            </Reveal>
          ) : null}

          {room.image ? (
            <ImageReveal className="image-frame relative mt-6 aspect-video w-full">
              <Image
                src={room.image}
                alt={room.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover"
              />
            </ImageReveal>
          ) : (
            <div
              role="img"
              aria-label="Room information panel"
              className="mt-6 aspect-video w-full rounded-xl bg-butter shadow-[0_10px_26px_rgba(25,58,49,0.07)]"
            />
          )}

          <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2">
            <Reveal className="flex flex-col items-start rounded-xl border border-forest/10 bg-white p-5 sm:p-6">
              <h3 className="font-display text-xl text-forest sm:text-2xl">
                See the room in person
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                The best way to get a feel for the room is to visit.
              </p>
              <Button asChild size="sm" className="mt-4">
                <Link href="/arrange-a-visit">
                  Book a Visit <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>

            <Reveal delay={0.08}>
              <Link
                href={room.nextRoom.href}
                className="group flex h-full min-h-36 flex-col items-start rounded-xl border border-[#eadcb9] bg-butter p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(25,58,49,0.08)] sm:p-6"
              >
                <h3 className="font-display text-xl text-forest sm:text-2xl">
                  {room.nextRoom.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {room.nextRoom.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 border-b border-forest/30 pb-1 text-xs font-semibold text-forest transition-colors group-hover:border-terracotta group-hover:text-terracotta">
                  {room.nextRoom.linkLabel}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
