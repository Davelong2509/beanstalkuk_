"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { siteContact } from "@/content/site";

const mapEmbedUrl =
  "https://www.google.com/maps?q=4a%20Bishop%20Street%2C%20Town%20Hall%20Square%2C%20Leicester%20LE1%206AF&output=embed";

export default function ContactMap() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-cream pb-16 pt-2 sm:pb-20 lg:pb-24">
      <PageContainer width="wide">
        <div className="relative isolate min-h-[17rem] overflow-hidden rounded-xl border border-forest/10 bg-sage sm:min-h-[23rem] lg:min-h-[27rem]">
          <AnimatePresence initial={false}>
            {!mapLoaded ? (
              <motion.div
                key="map-placeholder"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                className="absolute inset-0 flex flex-col items-center justify-center px-6 py-10 text-center"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(32deg, transparent 47%, rgba(16,60,48,.16) 48%, rgba(16,60,48,.16) 49%, transparent 50%), linear-gradient(118deg, transparent 42%, rgba(16,60,48,.13) 43%, rgba(16,60,48,.13) 44%, transparent 45%), linear-gradient(0deg, transparent 48%, rgba(16,60,48,.10) 49%, rgba(16,60,48,.10) 50%, transparent 51%)",
                    backgroundSize: "180px 150px, 210px 180px, 100% 110px"
                  }}
                />
                <div className="relative flex size-11 items-center justify-center rounded-full bg-forest text-cream shadow-sm">
                  <MapPin size={20} aria-hidden="true" />
                </div>
                <p className="relative mt-4 max-w-sm text-[0.7rem] leading-6 text-muted">
                  The map is provided by Google. It loads only when you choose,
                  so nothing is shared until then.
                </p>
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="relative mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-forest px-6 text-[0.68rem] font-semibold text-white shadow-[0_6px_18px_rgba(16,60,48,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
                >
                  Load the map
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="map-frame"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.35 }}
                className="absolute inset-0"
              >
                <iframe
                  title="Map showing Beanstalk Day Nursery at 4a Bishop Street, Leicester"
                  src={mapEmbedUrl}
                  className="h-full min-h-[17rem] w-full border-0 sm:min-h-[23rem] lg:min-h-[27rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href={siteContact.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 inline-flex min-h-9 items-center gap-1.5 rounded-full bg-white/95 px-4 text-[0.65rem] font-semibold text-forest shadow-lg backdrop-blur-sm transition-colors hover:bg-white hover:text-terracotta"
                >
                  Open in Google Maps <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </PageContainer>
    </section>
  );
}
