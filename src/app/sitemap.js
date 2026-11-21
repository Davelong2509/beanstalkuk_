const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const routes = [
  "",
  "/about",
  "/our-ethos",
  "/our-nursery",
  "/our-nursery/babies-room",
  "/our-nursery/toddlers-room",
  "/our-nursery/preschool-room",
  "/learning-and-development",
  "/meet-the-team",
  "/fees-and-funding",
  "/our-prospectus",
  "/arrange-a-visit",
  "/admissions-and-enrolment",
  "/gallery",
  "/parent-information",
  "/faqs",
  "/contact",
  "/careers",
  "/privacy-notice"
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));
}
