import HomeHero from "@/components/sections/HomeHero";
import QuickFacts from "@/components/sections/QuickFacts";
import HomeIntroSection from "@/components/sections/HomeIntroSection";
import ReasonsSection from "@/components/sections/ReasonsSection";
import EthosSection from "@/components/sections/EthosSection";
import HomeRoomsSection from "@/components/sections/HomeRoomsSection";
import DayTimelineSection from "@/components/sections/DayTimelineSection";
import HomeWelcomeSection from "@/components/sections/HomeWelcomeSection";
import TeamIntroSection from "@/components/sections/TeamIntroSection";
import FeesHighlightSection from "@/components/sections/FeesHighlightSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import LocationSection from "@/components/sections/LocationSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />
      <QuickFacts />
      <HomeIntroSection />
      <ReasonsSection />
      <EthosSection />
      <HomeRoomsSection />
      <DayTimelineSection />
      <HomeWelcomeSection />
      <TeamIntroSection />
      <FeesHighlightSection />
      <ReviewsSection />
      <LocationSection />
      <CTASection
        title="The best way to discover Beanstalk is to experience it."
        description="Come and see the nursery, meet the team and ask anything you like. There is no obligation."
      />
    </main>
  );
}
