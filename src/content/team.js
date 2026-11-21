// Staff names, roles, qualifications and portrait URLs transcribed from:
// https://beanstalk-uk.vercel.app/team
// Portraits are served from the source site's image hosts.
export const teamMembers = [
  {
    slug: "dr-ogaga",
    name: "Dr Ogaga",
    role: "Owner",
    group: "Leadership",
    image: "https://beanstalk-uk.vercel.app/dr_ogaga.jpg",
    imageAlt: "Dr Ogaga, owner of Beanstalk Day Nursery",
    qualifications: ["Medical Doctor"]
  },
  {
    slug: "asha-patel",
    name: "Asha Patel",
    role: "Nursery Manager",
    group: "Leadership",
    image: "https://www.beanstalkdaynursery.co.uk/images/Meet_The_Staff/Asha_2024.jpg",
    imageAlt: "Asha Patel, Nursery Manager",
    qualifications: [
      "Level 3 Children's Care, Learning & Development",
      "Paediatric First Aid",
      "Safeguarding"
    ]
  },
  {
    slug: "ola-mazur",
    name: "Ola Mazur",
    role: "Deputy Manager",
    group: "Leadership",
    image: "https://www.beanstalkdaynursery.co.uk/images/Meet_The_Staff/Ola.gif",
    imageAlt: "Ola Mazur, Deputy Manager",
    qualifications: [
      "Level 3 Children's Care, Learning & Development",
      "Safeguarding",
      "Level 2 Food Safety",
      "Prevent Duty"
    ],
    animated: true
  },
  {
    slug: "beth-jones",
    name: "Beth Jones",
    role: "Part-time Manager and SENDO",
    group: "Leadership",
    image: "https://www.beanstalkdaynursery.co.uk/images/Meet_The_Staff/Beth.png",
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
    slug: "shante-thomas",
    name: "Shante Thomas",
    role: "Nursery Nurse",
    group: "Nursery Nurses",
    image: "https://www.beanstalkdaynursery.co.uk/images/Meet_The_Staff/Shante_2024.jpg",
    imageAlt: "Shante Thomas, Nursery Nurse",
    qualifications: [
      "Level 3 Apprentice Nursery Nurse",
      "Paediatric First Aid",
      "Caring for the under 2's"
    ]
  },
  {
    slug: "chantez-gilbert",
    name: "Chantez Gilbert",
    role: "Nursery Nurse",
    group: "Nursery Nurses",
    image: "https://www.beanstalkdaynursery.co.uk/images/Meet_The_Staff/Chantez.png",
    imageAlt: "Chantez Gilbert, Nursery Nurse",
    qualifications: [
      "Level 2 Children & Young People's Workforce",
      "Paediatric First Aid",
      "Level 2 Food Safety",
      "Safeguarding"
    ]
  },
  {
    slug: "elizabeth-bateman",
    name: "Elizabeth Bateman",
    role: "Nursery Nurse",
    group: "Nursery Nurses",
    image: "https://www.beanstalkdaynursery.co.uk/images/Meet_The_Staff/Elizabeth_2024.jpg",
    imageAlt: "Elizabeth Bateman, Nursery Nurse",
    qualifications: ["Level 3 Nursery Nurse", "Paediatric First Aid"]
  },
  {
    slug: "kane-hoult",
    name: "Kane Hoult",
    role: "Nursery Nurse",
    group: "Nursery Nurses",
    image: "https://www.beanstalkdaynursery.co.uk/images/Meet_The_Staff/Kane_2024.jpg",
    imageAlt: "Kane Hoult, Nursery Nurse",
    qualifications: ["Level 3 Apprentice Nursery Nurse", "Paediatric First Aid TBA"]
  },
  {
    slug: "tracey-cooper",
    name: "Tracey Cooper",
    role: "Nursery Nurse",
    group: "Nursery Nurses",
    image: "https://www.beanstalkdaynursery.co.uk/images/Meet_The_Staff/Tracey_2024.jpg",
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
    slug: "suneiza-amadxarifa",
    name: "Suneiza Amadxarifa",
    role: "Nursery Nurse",
    group: "Nursery Nurses",
    image: "https://www.beanstalkdaynursery.co.uk/images/Meet_The_Staff/Suneiza_2024.jpg",
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
    image: "https://www.beanstalkdaynursery.co.uk/images/Meet_The_Staff/Aleena_2024.jpg",
    imageAlt: "Aleena Chhatbar, Nursery Nurse",
    qualifications: ["Level 2 Apprentice Nursery Nurse", "Paediatric First Aid TBA"]
  },
  {
    slug: "tasmin-begum",
    name: "Tasmin Begum",
    role: "Nursery Nurse",
    group: "Nursery Nurses",
    image: "https://www.beanstalkdaynursery.co.uk/images/Meet_The_Staff/Tas2_.gif",
    imageAlt: "Tasmin Begum, Nursery Nurse",
    qualifications: [
      "Level 3 Children's Care, Learning and Development",
      "Paediatric First Aid",
      "Safeguarding",
      "Level 2 Food Safety",
      "Prevent Duty"
    ],
    animated: true
  }
];

export const teamGroups = [
  { id: "leadership", title: "Nursery leadership", description: "The people guiding the nursery and supporting the team.", members: teamMembers.filter((member) => member.group === "Leadership") },
  { id: "nursery-nurses", title: "Our nursery nurses", description: "The caring practitioners who help children learn, play and grow every day.", members: teamMembers.filter((member) => member.group === "Nursery Nurses") }
];
