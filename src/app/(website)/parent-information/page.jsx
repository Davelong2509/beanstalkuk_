import PageHero from "@/components/sections/PageHero";
import ParentInformationContent from "@/components/sections/ParentInformationContent";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Parent Information",
  description:
    "Find useful information for Beanstalk Day Nursery families, including contact details, fees and funding, opening times, policies, safeguarding and complaints."
};

export default function ParentInformationPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="For families"
        current="Parent information"
        title="Parent information."
        description="Everything a parent might want to find, in one place."
      />

      <ParentInformationContent />

      <CTASection
        title="The best way to discover Beanstalk is to experience it."
        description="Come and see the nursery, meet the team and ask anything you like. There is no obligation."
      />
    </main>
  );
}
