import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/motion/Reveal";
import { privacyNoticeSections } from "@/content/privacy-notice";
import { siteContact } from "@/content/site";

function PrivacySection({ id, title, children, index }) {
  return (
    <Reveal direction="up" delay={Math.min(index * 0.035, 0.18)} amount={0.12}>
      <section
        id={id}
        aria-labelledby={`${id}-heading`}
        className="scroll-mt-28"
      >
        <h2
          id={`${id}-heading`}
          className="font-display text-[1.75rem] leading-[1.08] tracking-[-0.025em] text-forest sm:text-[2rem] lg:text-[2.15rem]"
        >
          {title}
        </h2>
        <div className="mt-3 text-[0.72rem] leading-[1.8] text-muted sm:text-[0.76rem] sm:leading-[1.85]">
          {children}
        </div>
      </section>
    </Reveal>
  );
}

export default function PrivacyNoticeContent() {
  return (
    <section className="bg-cream pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <PageContainer width="wide">
        <div className="mx-auto max-w-[39rem] space-y-7 sm:space-y-9 lg:space-y-10">
          {privacyNoticeSections.map((section, index) => (
            <PrivacySection
              key={section.id}
              id={section.id}
              title={section.title}
              index={index}
            >
              {section.id === "who-we-are" ? (
                <p>
                  Beanstalk Day Nursery, 4a Bishop Street, Town Hall Square,
                  Leicester LE1 6AF. Email{" "}
                  <a
                    href={`mailto:${siteContact.email}`}
                    className="break-all text-forest underline decoration-forest/25 underline-offset-2 hover:text-terracotta"
                  >
                    {siteContact.email}
                  </a>
                  . Telephone{" "}
                  <a
                    href={`tel:${siteContact.phoneHref}`}
                    className="text-forest underline decoration-forest/25 underline-offset-2 hover:text-terracotta"
                  >
                    {siteContact.phoneDisplay}
                  </a>
                  .
                </p>
              ) : null}

              {section.id === "what-we-collect" ? (
                <p>
                  When you use our enquiry or visit form we collect your name,
                  email address, telephone number (where you give it), your
                  child&apos;s age or age group, a preferred start date,
                  preferred visit dates and times, the childcare you need and
                  any message you choose to write.
                </p>
              ) : null}

              {section.id === "why-we-collect-it" ? (
                <p>
                  To reply to your enquiry or arrange a visit. Our lawful basis
                  is your consent, which you give by ticking the box on the
                  form. We do not use these details for marketing.
                </p>
              ) : null}

              {section.id === "how-long-we-keep-it" ? (
                <p>
                  We keep enquiry details only for as long as needed to deal
                  with your enquiry. Retention period to be confirmed.
                </p>
              ) : null}

              {section.id === "who-sees-it" ? (
                <p>
                  Only nursery staff who need it. Form messages may pass
                  through our email provider or form service. We do not sell
                  your data.
                </p>
              ) : null}

              {section.id === "your-rights" ? (
                <p>
                  You may ask to see, correct or delete your information, or
                  withdraw consent at any time, by{" "}
                  <a
                    href={`mailto:${siteContact.email}`}
                    className="text-forest underline decoration-forest/25 underline-offset-2 hover:text-terracotta"
                  >
                    contacting us
                  </a>
                  . You can also complain to the Information Commissioner&apos;s
                  Office at{" "}
                  <a
                    href="https://ico.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest underline decoration-forest/25 underline-offset-2 hover:text-terracotta"
                  >
                    ico.org.uk
                  </a>
                  .
                </p>
              ) : null}

              {section.id === "cookies-and-third-parties" ? (
                <p>
                  This site only uses essential storage to remember your cookie
                  choice. If analytics are switched on, we will only use
                  analytics cookies after you accept them. The map and any
                  welcome video load from Google or a video provider only when
                  you choose to load them. You can change your cookie choice at
                  any time using Cookie settings in the footer.
                </p>
              ) : null}
            </PrivacySection>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
