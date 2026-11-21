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
    who: "CHILDREN AGED 9 TO 23 MONTHS",
    availability: "Up to 30 hours a week ",
    notes:
      "For eligible working parents. Both parents must usually be working, or one in asingle parent household, and meet income rules."
  },
  {
    id: "three-and-four",
    who: "CHILDREN AGED 2YEARS",
    availability: "Up to 30 hours a week, or 15hours a week",
    notes: "30 hours for eligible working parents. 15 hours for families who receive certain benefits or meet other criteria"
  },
  {
    id: "some-two-year-olds",
    who: "CHILDREN AGED 3 TO 4YEARS",
    availability: "15 hours a week, or up to 30hours a week",
    notes:
      "15 hours is available to all families from the term after a child turns 3. Eligible working parents may access up to 30 hours."
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
