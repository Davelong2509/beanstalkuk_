// Fees and funding information transcribed from the supplied Beanstalk
// desktop and mobile website reference, page 10. No session prices are
// published in the reference, so none are invented here.
export const feeIntroduction = {
  eyebrow: "Our fees",
  title: "What our sessions cost.",
  lead: "Parents should not need to make an enquiry just to find out the price.",
  description:
    "Please contact us for our current fees. We are happy to talk them through and answer any questions."
};

export const fundingIntroduction = {
  eyebrow: "Funded childcare",
  title: "Government funded hours, explained.",
  description:
    "Funded hours may be available for eligible families from 9 months old. Rules are set by government and can change. Always confirm on GOV.UK.",
  highlight: "Up to 30",
  highlightLabel: "hours a week for eligible working families.",
  disclaimer:
    "Funded hours are subject to eligibility and nursery availability. Funded hours may not cover meals, consumables or extras. Ask us what is and isn't included."
};

export const fundingOptions = [
  {
    id: "working-parents",
    who: "Working parents of children from 9 months",
    availability: "Up to 30 hours a week of funded childcare",
    notes:
      "Both parents must usually be working, or one in a single parent household, and meet income rules."
  },
  {
    id: "three-and-four",
    who: "All children aged 3 and 4",
    availability: "15 hours a week",
    notes: "Available to all families from the term after a child turns 3."
  },
  {
    id: "some-two-year-olds",
    who: "Some children aged 2",
    availability: "15 hours a week",
    notes:
      "For families who receive certain benefits or meet other criteria."
  }
];

export const fundingSteps = [
  {
    number: "01",
    title: "Check eligibility",
    description:
      "Use the childcare calculator on Childcare Choices at childcarechoices.gov.uk.",
    href: "https://www.childcarechoices.gov.uk/",
    linkLabel: "Check the childcare calculator"
  },
  {
    number: "02",
    title: "Apply",
    description:
      "Working parents apply through a GOV.UK childcare account and receive an eligibility code. Parents of two year olds usually apply through the local council.",
    href: "https://www.gov.uk/apply-free-childcare-if-youre-working",
    linkLabel: "Apply for funded childcare"
  },
  {
    number: "03",
    title: "Tell us your code",
    description:
      "Share your code with us and we will check it against the funding system."
  },
  {
    number: "04",
    title: "Confirm your place",
    description:
      "We will talk through your hours and start date. Working parent codes need to be renewed every three months, so keep an eye out for reminders."
  }
];

export const taxFreeChildcare = {
  title: "Tax Free Childcare",
  description:
    "Working families may also be able to use Tax Free Childcare to help with costs. You can check on Childcare Choices.",
  href: "https://www.childcarechoices.gov.uk/"
};

export const fundingHelp = {
  title: "Not sure where you stand?",
  description:
    "Call us on 0116 254 2253 or send a message. We would rather help you check than have you miss out."
};

export const fundingSourceNote =
  "Details checked against GOV.UK guidance in November 2026. Please check again before relying on them.";
