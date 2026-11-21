import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import BrandLogo from "@/components/layout/BrandLogo";
import CookieSettingsDialog from "@/components/layout/CookieSettingsDialog";
import PageContainer from "@/components/layout/PageContainer";
import { footerGroups, siteContact } from "@/content/site";
import Image from "next/image";
export default function SiteFooter() {
  return (
    <footer className="bg-forest text-cream">
      <PageContainer width="wide" className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_0.8fr_1.35fr] lg:gap-10">
          <div className="max-w-xs">
            <BrandLogo size="footer" />
            <p className="mt-5 max-w-[17rem] text-sm leading-7 text-cream/70">
              A day nursery in Leicester city centre for children from 3 months to 5 years.
            </p>
            <Link
              href="/arrange-a-visit"
              className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-full bg-terracotta px-5 text-xs font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-terracotta-dark"
            >
              Book a Visit <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="eyebrow text-butter">{group.title}</h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          

          <div>
            <h2 className="eyebrow text-butter">Visit or Call</h2>
            <a
              href={`tel:${siteContact.phoneHref}`}
              className="mt-3 inline-flex font-display text-3xl tracking-tight text-cream transition-colors hover:text-butter"
            >
              {siteContact.phoneDisplay}
            </a>

            <div className="mt-4 space-y-3 text-sm leading-6 text-cream/70">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0 text-butter" aria-hidden="true" />
                <span>{siteContact.address.map((line) => <span key={line} className="block">{line}</span>)}</span>
              </p>
              <a
                href={`mailto:${siteContact.email}`}
                className="flex items-start gap-2 break-all transition-colors hover:text-white"
              >
                <Mail size={16} className="mt-1 shrink-0 text-butter" aria-hidden="true" />
                {siteContact.email}
              </a>
              <a
                href={siteContact.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-cream transition-colors hover:text-butter"
              >
                Get directions <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

{/* GOOD NUTRITION AWARD */}
<div className="mt-12 border-t border-white/15 pt-6 sm:mt-14 sm:pt-7">
  <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
    <div className="relative h-[76px] w-[160px] shrink-0 overflow-hidden rounded-xl bg-white p-2 shadow-lg transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(231,206,131,0.15)]">
      <Image
        src="/images/brand/good-nutrition-award.png"
        alt="Good Nutrition for Under Fives in Leicester award"
        fill
        sizes="160px"
        className="object-contain p-2"
      />
    </div>

    <div>
      <p className="text-sm leading-7 text-cream/85">
        Proud holders of the{" "}
        <span className="font-semibold text-cream">
          Good Nutrition Award
        </span>
        , valid until March 2028.
      </p>
      <p className="mt-1 text-xs text-cream/45">
        Recognising our commitment to good nutrition for under-fives.
      </p>
    </div>
  </div>
</div>


        <div className="mt-12 flex flex-col gap-5 border-t border-white/15 pt-6 text-[0.68rem] text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>© 2026 Beanstalk Day Nursery. All rights reserved.</p>
            <p className="mt-2">Beanstalk Day Nursery is part of Becksquare Group.</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy-notice" className="transition-colors hover:text-white">Privacy notice</Link>
            <Link href="/contact" className="transition-colors hover:text-white">Contact</Link>
            <CookieSettingsDialog />
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
