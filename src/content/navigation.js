export const navigation = [
  { label: "About Us", href: "/about" },
  {
    label: "Our Nursery",
    href: "/our-nursery",
    children: [
      { label: "Discover our nursery", href: "/our-nursery" },
      { label: "Babies room", href: "/our-nursery/babies-room" },
      { label: "Toddlers room", href: "/our-nursery/toddlers-room" },
      { label: "Preschool room", href: "/our-nursery/preschool-room" }
    ]
  },
  { label: "Fees and Funding", href: "/fees-and-funding" },
  { label: "Prospectus", href: "/our-prospectus" },
  {
    label: "Parents",
    href: "/parent-information",
    children: [
      { label: "Admissions and enrolment", href: "/admissions-and-enrolment" },
      { label: "Parent information", href: "/parent-information" },
      { label: "Frequently asked questions", href: "/faqs" },
      { label: "Gallery", href: "/gallery" }
    ]
  },
  { label: "Contact", href: "/contact" }
];
