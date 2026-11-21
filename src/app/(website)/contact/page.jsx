import PageHero from "@/components/sections/PageHero";
import PageContainer from "@/components/layout/PageContainer";
import ContactDetailsCard from "@/components/sections/ContactDetailsCard";
import ContactMap from "@/components/sections/ContactMap";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata = {
  title: "Contact and Find Us",
  description:
    "Contact Beanstalk Day Nursery in Leicester. Call, email, get directions or send an enquiry about places, funded hours and childcare."
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Say hello"
        current="Contact"
        title="Contact and find us."
        description="Call, email or come and see us. We would love to hear from you."
      />

      <section className="bg-cream py-10 sm:py-14 lg:py-16">
        <PageContainer width="wide">
          <div className="grid items-start gap-5 sm:gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 xl:gap-12">
            <ContactDetailsCard />
            <EnquiryForm endpoint="/api/enquiries" />
          </div>
        </PageContainer>
      </section>

      <ContactMap />
    </main>
  );
}
