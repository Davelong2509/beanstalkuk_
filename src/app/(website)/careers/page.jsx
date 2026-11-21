import PageHero from "@/components/sections/PageHero";
import CareersContent from "@/components/sections/CareersContent";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Careers at Beanstalk",
  description:
    "Find out what Beanstalk Day Nursery looks for in its team and introduce yourself if you love working with babies and young children."
};

export default function CareersPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Join us"
        parentLabel="About us"
        parentHref="/about"
        current="Careers"
        title={<>Careers at<br className="hidden sm:block" /> Beanstalk.</>}
        description="We are always glad to hear from kind, reliable people who love working with young children."
      />

      <CareersContent />

      <CTASection
        title="The best way to discover Beanstalk is to experience it."
        description="Come and see the nursery, meet the team and ask anything you like. There is no obligation."
      />
    </main>
  );
}
