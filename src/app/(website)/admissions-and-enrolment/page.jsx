import PageHero from "@/components/sections/PageHero";
import AdmissionsJourney from "@/components/sections/AdmissionsJourney";
import AdmissionsContactAndQuestions from "@/components/sections/AdmissionsContactAndQuestions";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Admissions and Enrolment",
  description:
    "Discover how to join Beanstalk Day Nursery in Leicester, ask about childcare places and funded hours, request a visit or register your interest."
};

export default function AdmissionsAndEnrolmentPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Your journey"
        current="Admissions and enrolment"
        title={<>Admissions<br className="hidden sm:block" /> and enrolment.</>}
        description="Choosing a nursery should never feel rushed. Here is how it works, from your first question to your child's first day."
      />

      <AdmissionsJourney />
      <AdmissionsContactAndQuestions />

      <CTASection
        title="Come and see for yourself."
        description="A friendly look around is the best way to know if Beanstalk is right for your family."
      />
    </main>
  );
}
