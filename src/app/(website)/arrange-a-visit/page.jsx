import PageHero from "@/components/sections/PageHero";
import PageContainer from "@/components/layout/PageContainer";
import VisitSteps from "@/components/sections/VisitSteps";
import VisitLocation from "@/components/sections/VisitLocation";
import BookVisitForm from "@/components/forms/BookVisitForm";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { siteContact } from "@/content/site";

export const metadata = {
  title: "Arrange a Visit",
  description:
    "Arrange a visit to Beanstalk Day Nursery in Leicester. Meet the team, see the rooms and ask us anything about childcare."
};

export default function ArrangeAVisitPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Come and meet us"
        current="Arrange a visit"
        title="Arrange a visit."
        description="You are warmly invited to come and see the nursery, meet the team and ask anything you like."
      />

      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <PageContainer width="wide">
          <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-20">
            <div className="lg:sticky lg:top-28">
              <VisitSteps />
              <div className="mt-5 space-y-3 text-[0.68rem] leading-[1.7] text-muted">
                <p>
                  A visit request is not a confirmed appointment. We will
                  contact you to agree a time, and the visit is confirmed only
                  when we reply.
                </p>
                <p>
                  Prefer to talk? Call{" "}
                  <a
                    href={`tel:${siteContact.phoneHref}`}
                    className="font-semibold text-forest underline decoration-forest/35 underline-offset-2 hover:text-terracotta"
                  >
                    {siteContact.phoneDisplay}
                  </a>
                  . Not ready to visit yet?{" "}
                  <Link
                    href="/contact"
                    className="font-semibold text-forest underline decoration-forest/35 underline-offset-2 hover:text-terracotta"
                  >
                    Make an enquiry
                  </Link>{" "}
                  instead.
                </p>
              </div>
            </div>

            <BookVisitForm />
          </div>
        </PageContainer>
      </section>

      <VisitLocation />
      <CTASection
        title="The best way to discover Beanstalk is to experience it."
        description="Come and see the nursery, meet the team and ask anything you like. There is no obligation."
      />
    </main>
  );
}
