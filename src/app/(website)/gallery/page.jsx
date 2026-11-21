import PageHero from "@/components/sections/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Gallery",
  description:
    "A look at life at Beanstalk Day Nursery. Explore photographs of children's play, creativity, discovery and everyday nursery moments."
};

export default function GalleryPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Photos"
        current="Gallery"
        title="Gallery."
        description="A look at life at Beanstalk."
      />

      <GalleryGrid />

      <CTASection
        title="The best way to discover Beanstalk is to experience it."
        description="Come and see the nursery, meet the team and ask anything you like. There is no obligation."
      />
    </main>
  );
}
