import { ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import PageContainer from "@/components/layout/PageContainer";
import { siteContact } from "@/content/site";

export default function VisitLocation() {
  return (
    <section className="bg-cream pb-16 pt-5 sm:pb-20 lg:pb-24">
      <PageContainer width="wide">
        <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-12 lg:gap-16">
          <Reveal direction="left">
            <a
              href={siteContact.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open directions to Beanstalk Day Nursery in Google Maps"
              className="group relative flex aspect-[1.35/1] min-h-52 items-center justify-center overflow-hidden rounded-xl bg-butter shadow-[0_10px_30px_rgba(25,58,49,0.07)] transition-transform duration-500 hover:-translate-y-1"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-35"
                style={{
                  backgroundImage:
                    "linear-gradient(28deg, transparent 46%, rgba(16,60,48,.12) 47%, rgba(16,60,48,.12) 48%, transparent 49%), linear-gradient(112deg, transparent 42%, rgba(16,60,48,.10) 43%, rgba(16,60,48,.10) 44%, transparent 45%), linear-gradient(0deg, transparent 48%, rgba(16,60,48,.08) 49%, rgba(16,60,48,.08) 50%, transparent 51%)",
                  backgroundSize: "150px 120px, 180px 150px, 100% 90px"
                }}
              />
              <div className="relative flex flex-col items-center gap-2 rounded-full bg-cream/90 px-5 py-4 text-center shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                <span className="flex size-10 items-center justify-center rounded-full bg-forest text-cream">
                  <MapPin size={19} aria-hidden="true" />
                </span>
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-forest">
                  Town Hall Square
                </span>
                <span className="text-[0.68rem] text-muted">Leicester City Centre</span>
              </div>
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/85 px-3 py-1.5 text-[0.62rem] font-semibold text-forest backdrop-blur-sm">
                Open map <ArrowUpRight size={12} aria-hidden="true" />
              </span>
            </a>
          </Reveal>

          <Reveal direction="right" delay={0.08} className="sm:py-4">
            <p className="eyebrow mb-5">Find us</p>
            <h2 className="max-w-lg font-display text-4xl leading-[0.99] tracking-[-0.04em] text-forest sm:text-5xl lg:text-[3.4rem]">
              4a Bishop Street,
              <br />
              Town Hall Square,
              <br />
              Leicester LE1 6AF
            </h2>
            <a
              href={siteContact.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-forest px-6 text-xs font-semibold text-white! shadow-[0_6px_18px_rgba(16,60,48,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest-deep"
            >
              Get Directions <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
