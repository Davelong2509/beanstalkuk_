import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/content/site";

function ContactDetail({ label, children }) {
  return (
    <div className="border-t border-white/15 pt-3">
      <p className="eyebrow text-butter">{label}</p>
      <div className="mt-1.5 text-[0.72rem] leading-6 text-cream/85">
        {children}
      </div>
    </div>
  );
}

export default function ContactDetailsCard() {
  return (
    <Reveal direction="left" className="h-full">
      <aside
        aria-label="Beanstalk Day Nursery contact details"
        className="h-full rounded-2xl bg-forest p-6 text-cream shadow-[0_14px_36px_rgba(16,60,48,0.12)] sm:p-7"
      >
        <p className="font-display text-xl leading-tight text-cream sm:text-[1.45rem]">
          Beanstalk Day Nursery
        </p>

        <a
          href={`tel:${siteContact.phoneHref}`}
          className="mt-2 inline-flex items-center gap-2 font-display text-[1.8rem] leading-none tracking-[-0.035em] text-cream transition-colors hover:text-butter sm:text-[2rem]"
        >
          {siteContact.phoneDisplay}
        </a>

        <div className="mt-5 space-y-3.5">
          <ContactDetail label="Email">
            <a
              href={`mailto:${siteContact.email}`}
              className="break-all underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              {siteContact.email}
            </a>
          </ContactDetail>

          <ContactDetail label="Address">
            <address className="not-italic">
              {siteContact.address[1]}
              <br />
              {siteContact.address[2]}
            </address>
          </ContactDetail>

          <ContactDetail label="Directions">
            <a
              href={siteContact.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              Get directions in Google Maps
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </ContactDetail>

          <ContactDetail label="Opening hours">
            <p>Please call to ask.</p>
          </ContactDetail>
        </div>

        <Button asChild className="mt-6">
          <Link href="/arrange-a-visit">
            Book a Visit <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </aside>
    </Reveal>
  );
}
