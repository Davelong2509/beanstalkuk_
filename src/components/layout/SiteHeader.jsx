import Link from "next/link";
import { Phone } from "lucide-react";
import BrandLogo from "@/components/layout/BrandLogo";
import DesktopNavigation from "@/components/layout/DesktopNavigation";
import MobileNavigation from "@/components/layout/MobileNavigation";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/95 backdrop-blur-xl">
      <PageContainer
        width="wide"
        className="flex min-h-[5.25rem] items-center justify-between gap-4 py-2"
      >
        <BrandLogo priority />

        <div className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
          <DesktopNavigation />
        </div>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <a
            href={`tel:${siteContact.phoneHref}`}
            className="inline-flex items-center gap-2 text-xs font-medium text-forest/75 transition-colors hover:text-terracotta"
          >
            <Phone size={14} strokeWidth={1.8} aria-hidden="true" />
            {siteContact.phoneDisplay}
          </a>
          <Button asChild size="sm">
            <Link href="/arrange-a-visit">Book a Visit</Link>
          </Button>
        </div>

        <MobileNavigation />
      </PageContainer>
    </header>
  );
}
