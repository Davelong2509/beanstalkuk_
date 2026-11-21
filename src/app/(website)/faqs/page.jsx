import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import PageContainer from "@/components/layout/PageContainer";
import FAQSearch from "@/components/faq/FAQSearch";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/content/site";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Quick answers to common questions about starting at Beanstalk Day Nursery, sessions, fees and funding, daily life, policies and finding us."
};

export default function FAQsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="FAQs"
        current="FAQs"
        title={<>Frequently asked<br className="hidden sm:block" /> questions.</>}
        description="Quick answers to common questions. If yours is not here, just ask."
      />

      <FAQSearch />

      <section className="bg-cream pb-12 sm:pb-16">
        <PageContainer width="wide">
          <div className="mx-auto flex max-w-5xl flex-col gap-5 border-y border-forest/15 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-6">
            <h2 className="max-w-md font-display text-xl leading-[1.1] text-forest sm:text-[1.35rem]">
              Still have a question? Come and ask us in person.
            </h2>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild size="sm">
                <Link href="/arrange-a-visit">
                  Book a Visit <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={`tel:${siteContact.phoneHref}`}>
                  <Phone aria-hidden="true" /> Call the Nursery
                </a>
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>

      <CTASection
        title="Still have a question?"
        description="Call, email or come and see us. We are happy to help."
      />
    </main>
  );
}
