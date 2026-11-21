import PageHero from "@/components/sections/PageHero";
import PrivacyNoticeContent from "@/components/sections/PrivacyNoticeContent";

export const metadata = {
  title: "Privacy Notice",
  description:
    "Find out how Beanstalk Day Nursery looks after the information you share through its enquiry and visit forms."
};

export default function PrivacyNoticePage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Your data"
        current="Privacy notice"
        title="Privacy notice."
        description="How we look after the information you share with us."
      />
      <PrivacyNoticeContent />
    </main>
  );
}
