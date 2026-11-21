export const faqGroups = [
  {
    id: "starting-at-beanstalk",
    title: "Starting at Beanstalk",
    questions: [
      {
        id: "what-ages",
        question: "What ages do you accept?",
        answer:
          "Beanstalk Day Nursery welcomes children from 3 months to 5 years. If you would like help finding the right room for your child, explore our nursery rooms or speak to the team.",
        links: [
          { label: "Explore our nursery", href: "/our-nursery" }
        ]
      },
      {
        id: "arrange-visit",
        question: "How do I arrange a visit?",
        answer:
          "Send a visit request through our Arrange a Visit page. A request is not a confirmed appointment: the team will contact you to agree a time, and your visit is confirmed when we reply.",
        links: [
          { label: "Arrange a visit", href: "/arrange-a-visit" }
        ]
      },
      {
        id: "speak-to-team",
        question: "How can I speak to the nursery team?",
        answer:
          "You can call the nursery or send us an email. If you prefer, you can also use the contact page to send an enquiry.",
        links: [
          { label: "0116 254 2253", href: "tel:+441162542253" },
          { label: "asha.patel@beanstalkdaynursery.co.uk", href: "mailto:asha.patel@beanstalkdaynursery.co.uk" },
          { label: "Make an enquiry", href: "/contact" }
        ]
      }
    ]
  },
  {
    id: "sessions-fees-funding",
    title: "Sessions, fees and funding",
    questions: [
      {
        id: "funded-hours",
        question: "Can I use funded childcare hours?",
        answer:
          "Funded childcare may be available depending on your child's age and your family's eligibility. Our fees and funding page explains the current options, including funded hours for eligible working parents and universal hours for three- and four-year-olds.",
        links: [
          { label: "Read about fees and funding", href: "/fees-and-funding" }
        ]
      },
      {
        id: "check-eligibility",
        question: "How do I check if I am eligible?",
        answer:
          "Start with the childcare calculator on Childcare Choices. Working parents can apply through a GOV.UK childcare account; parents of some two-year-olds usually apply through their local council. Eligibility rules apply, so check your circumstances before relying on funded hours.",
        links: [
          { label: "Check Childcare Choices", href: "https://www.childcarechoices.gov.uk/", external: true },
          { label: "Apply for funded childcare", href: "https://www.gov.uk/apply-free-childcare-if-youre-working", external: true }
        ]
      }
    ]
  },
  {
    id: "a-day-at-beanstalk",
    title: "A day at Beanstalk",
    questions: [
      {
        id: "share-progress",
        question: "How do you share my child's progress?",
        answer:
          "Every child is different. Please speak to the nursery team about how your child's day, development and progress are shared with you, and what updates you can expect for your child's room.",
        links: [
          { label: "Arrange a visit to meet the team", href: "/arrange-a-visit" },
          { label: "Contact the nursery", href: "/contact" }
        ]
      }
    ]
  },
  {
    id: "finding-us-and-policies",
    title: "Finding us and policies",
    questions: [
      {
        id: "nursery-location",
        question: "Where is the nursery located?",
        answer:
          "Beanstalk Day Nursery is at 4a Bishop Street, Town Hall Square, Leicester LE1 6AF. Use the directions link below to plan your journey.",
        links: [
          {
            label: "Get directions",
            href: "https://www.google.com/maps/search/?api=1&query=4a+Bishop+Street%2C+Town+Hall+Square%2C+Leicester+LE1+6AF",
            external: true
          }
        ]
      },
      {
        id: "read-policies",
        question: "Where can I read your policies?",
        answer:
          "Parents have a right to see nursery policies at any time. The Parent Information page includes the privacy notice; if you need another policy or document, please contact the nursery team.",
        links: [
          { label: "Parent information", href: "/parent-information" },
          { label: "Contact the nursery", href: "/contact" }
        ]
      },
      {
        id: "make-complaint",
        question: "How do I make a complaint?",
        answer:
          "If you are worried, please tell the nursery first so the team has an opportunity to put things right. You may also contact Ofsted at any time.",
        links: [
          { label: "Contact the nursery", href: "/contact" },
          {
            label: "Ofsted",
            href: "https://www.gov.uk/government/organisations/ofsted",
            external: true
          }
        ]
      }
    ]
  }
];

export const faqSearchPlaceholder = "Search questions";
