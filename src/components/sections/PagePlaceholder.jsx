import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/sections/SectionHeading";
import SectionShell from "@/components/sections/SectionShell";
import CTASection from "@/components/sections/CTASection";

export default function PagePlaceholder({
  eyebrow = "Beanstalk Day Nursery",
  title,
  showCTA = true
}) {
  return (
    <main id="main-content">
      <SectionShell background="cream" spacing="default" contained={false}>
        <PageContainer width="wide">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description="This route is scaffolded. Its approved page content, photography and interactions will be implemented in the component-by-component build."
          />
        </PageContainer>
      </SectionShell>
      {showCTA ? <CTASection /> : null}
    </main>
  );
}
