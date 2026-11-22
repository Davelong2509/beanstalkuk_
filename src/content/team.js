// Staff names, roles, qualifications and portrait URLs transcribed from:
// https://beanstalk-uk.vercel.app/team
// Portraits are served from the source site's image hosts.
export const teamMembers = [
  {
    slug: "dr-ogaga",
    name: "Dr Ogaga",
    role: "Owner",
    group: "Leadership",
    image: "/images/team/dr_Ogaga.webp",
    imageAlt: "Dr Ogaga, owner of Beanstalk Day Nursery",
    qualifications: ["Medical Doctor"]
  },
  {
    slug: "asha-patel",
    name: "Asha Patel",
    role: "Nursery Manager",
    group: "Leadership",
    image: "/images/team/Asha_2024.webp",
    imageAlt: "Asha Patel, Nursery Manager",
    qualifications: [
      "Level 3 Children's Care, Learning & Development",
      "Paediatric First Aid",
      "Safeguarding"
    ]
  },
  
  {
    slug: "beth-jones",
    name: "Beth Jones",
    role: "Part-time Manager",
    group: "Leadership",
    image: "/images/team/Beth.webp",
    imageAlt: "Beth Jones, Part-time Manager and SENDO",
    qualifications: [
      "Level 3 Children's Care, Learning & Development",
      "Paediatric First Aid",
      "Safeguarding",
      "Level 2 Food Safety",
      "Prevent Duty"
    ]
  },
   {
    slug: "tracey-cooper",
    name: "Tracey Cooper",
    role: "Deputy Manager and SENDO",
    group: "Leadership",
    image: "/images/team/Tracey_2024.webp",
    imageAlt: "Tracey Cooper, Nursery Nurse",
    qualifications: [
      "Level 3 Children's Care, Learning and Development",
      "Special Needs Support Worker",
      "Paediatric First Aid",
      "Safeguarding",
      "Level 2 Food Safety",
      "Prevent Duty"
    ]
  },
   
  {
    slug: "elizabeth-bateman",
    name: "Elizabeth Bateman",
    role: "Nursery Nurse",
    group: "Nursery Nurses",
    image: "/images/team/Elizabeth_2024.webp",
    imageAlt: "Elizabeth Bateman, Nursery Nurse",
    qualifications: ["Level 3 Nursery Nurse", "Paediatric First Aid"]
  },
   
 
  {
    slug: "suneiza-amadxarifa",
    name: "Suneiza Amadxarifa",
    role: "Nursery Nurse",
    group: "Nursery Nurses",
    image: "/images/team/Suneiza_2024.webp",
    imageAlt: "Suneiza Amadxarifa, Nursery Nurse",
    qualifications: [
      "Level 3 Apprentice Nursery Nurse",
      "Paediatric First Aid",
      "Caring for the under 2's"
    ]
  },
  {
    slug: "aleena-chhatbar",
    name: "Aleena Chhatbar",
    role: "Nursery Nurse",
    group: "Nursery Nurses",
    image: "/images/team/Aleena_2024.webp",
    imageAlt: "Aleena Chhatbar, Nursery Nurse",
    qualifications: ["Level 2 Apprentice Nursery Nurse", "Paediatric First Aid TBA"]
  },
  {
    slug: "Neelam Riaz",
    name: "Neelam Riaz",
    role: "Nursery Nurse",
    group: "Nursery Nurses",
    image: "/images/team/Neelam_2024.jpg",
    imageAlt: "Neelam Riaz, Nursery Nurse",
    qualifications: ["Level 3 Childcare qualification, level 3 food safety", "Paediatric First Aid TBA"]
  },
   
];

export const teamGroups = [
  { id: "leadership", title: "Nursery leadership", description: "The people guiding the nursery and supporting the team.", members: teamMembers.filter((member) => member.group === "Leadership") },
  { id: "nursery-nurses", title: "Our nursery nurses", description: "The caring practitioners who help children learn, play and grow every day.", members: teamMembers.filter((member) => member.group === "Nursery Nurses") }
];
