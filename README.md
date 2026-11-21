# Beanstalk Day Nursery

A structured Next.js website rebuild based on the supplied desktop and mobile PDF references.

## Requirements

- Node.js 20.9.0 or newer (Node.js 22 LTS recommended)
- npm 10 or newer recommended

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Useful commands

```bash
npm run dev       # Start the local development server
npm run build     # Create a production build
npm run start     # Run the production build locally
npm run lint      # Run ESLint
npm run lint:fix  # Automatically fix supported lint issues
```

## Current implementation status

### Completed

- Next.js App Router with JavaScript and JSX (no TypeScript)
- Tailwind CSS 4 theme tokens and global styles
- DM Sans body typography and DM Serif Display editorial headings
- Brand palette based on the supplied PDF references
- Nursery logo and two homepage photographs extracted from the supplied desktop PDF
- Reusable Button, PageContainer, SectionHeading, SectionShell and FeatureCard primitives
- Responsive site header and desktop navigation matching the reference navigation labels
- Animated mobile navigation drawer with nested page links and Radix focus management
- Site footer with the contact details shown in the reference PDF
- Reusable CTA section with a 100-second rotating sunburst and 7-second glow cycle
- Reusable reveal, split reveal, stagger, image reveal and hover motion primitives
- Homepage rebuilt into reusable sections: hero, quick facts, introduction, reasons, ethos, rooms, day timeline, welcome, team, fees, reviews and location
- Lazy-loaded Google map that does not load until a visitor requests it
- Responsive 14-photo gallery sourced from the supplied Beanstalk gallery website, with category filters and an accessible keyboard-navigable lightbox
- Parent Information page with desktop sticky section navigation, live active-section highlighting, contact links, fees/funding links, opening-time guidance, policy card, safeguarding and complaints information
- Searchable FAQ page with nine questions across four categories, animated single-open accordion, live result count, empty state and actionable links
- Contact page matching the supplied desktop/mobile reference, with actionable nursery details, validated enquiry form, privacy consent and click-to-load Google Map
- Privacy Notice page with all seven sections from the supplied reference, linked contact details and a footer cookie-preferences dialog
- Careers page based on mobile reference page 19, with animated staff qualities, direct email introduction CTA, safe-recruitment information and footer navigation
- Content-provider boundary prepared for a future Sanity integration

### Remaining implementation

1. Complete the production build and lint checks in an environment with npm registry access
2. Perform desktop, tablet and mobile browser testing across all 19 implemented routes
3. Verify visit, admissions and contact email delivery after configuring Resend
4. Obtain nursery approval for FAQ answers, privacy wording, retention period, safeguarding details and policy documents
5. Add approved original photography and downloadable documents where the reference or nursery requires them
6. Complete accessibility, performance, metadata and production deployment checks
7. Integrate Sanity CMS after the static-provider website has been tested and approved
## Project conventions

- JavaScript and JSX only. TypeScript is intentionally not configured.
- App Router route files live in `src/app`.
- Shared visual components live in `src/components`.
- Page and site content is separated into `src/content`.
- Content is accessed through `src/lib/content`, ready for a future Sanity provider.
- Reusable Tailwind class utilities live in `src/lib/utils.js`.
- Visit and admissions API routes validate submissions with Zod and send notifications through Resend when configured; the contact form reuses the validated admissions handler. Careers uses the direct email action shown in the reference.
- Sanity is intentionally not installed yet. It will be introduced after the static-provider website is built, tested and approved.

## Reference material

The desktop and mobile PDFs supplied for this project are visual source references. Keep them available during implementation and compare each page at the corresponding viewport width.

## Environment variables

Copy `.env.example` to `.env.local` when integrations are introduced. Do not commit secrets.


## Implemented page layer

The following reference pages now have dedicated implementations:

- About Beanstalk (`/about`)
- Our Ethos (`/our-ethos`)
- Our Nursery (`/our-nursery`)

Shared additions include `PageHero`, `MediaPlaceholder`, `EthosValueRow`, image-capable room cards, and the structured ethos and room content data. Photography was cropped from the supplied desktop PDF reference pages for local use. The remaining blank media blocks intentionally remain designed placeholders until approved original photography is supplied.


## Room detail pages

The Babies, Toddlers and Preschool room detail pages now share a reusable `RoomDetailPage` component and structured content in `src/content/room-details.js`. The layouts follow desktop and mobile reference pages 5–7, including the room-specific copy, activity lists, staff-support details, age-range labels where shown, practical image panels and next-step cards. The room photographs and Preschool activity image are cropped from the supplied reference PDF for local use.


## Learning & Development page

The `/learning-and-development` page now follows desktop PDF page 8 and its mobile counterpart.

- Seven EYFS area cards expand on tap/click with concise descriptions and practical examples.
- Three characteristics of effective teaching and learning are presented as separate cards.
- The parent update section covers key persons, observation, the progress check between ages two and three, and parent partnership.
- The page ends with the reference booking strip and shared animated CTA.

The area summaries are short paraphrases of the Department for Education's EYFS statutory framework for group and school-based providers, effective 1 September 2026:
https://assets.publishing.service.gov.uk/media/6a5f8e4fb00f3323bf1a23a1/EYFS_group_and_school_based_from_September_2026.pdf

The page should be reviewed by the nursery before publication to confirm that the described day-to-day examples reflect Beanstalk's actual practice.


## Meet the Team page

The `/meet-the-team` page is populated from the supplied source: https://beanstalk-uk.vercel.app/team. It includes the 12 listed staff profiles, the published role titles and the qualifications/training displayed on that page. Portraits load from the source site's image hosts; the two GIF portraits are marked unoptimized so their original animation can be retained. If the source site changes or removes an image, the corresponding portrait will need to be copied into `public/images/team/` and switched to a local path.


## Fees and Funding page

The `/fees-and-funding` page has been implemented from page 10 of the supplied desktop and mobile PDFs.

- The session fee section does not invent prices; the reference asks families to contact the nursery for current fees.
- Funding guidance includes the three eligibility groups and hours shown in the reference.
- A responsive funding table, four-step process, Tax Free Childcare information card and contact card are included.
- Official Childcare Choices and GOV.UK destinations are linked for families to verify current eligibility and apply.
- The page includes the source note from the PDF: details checked against GOV.UK guidance in November 2026.

Review all funding guidance with the nursery before publication because government eligibility rules can change.


## Our Prospectus page

The `/our-prospectus` page now follows page 11 of the supplied Beanstalk desktop and mobile website PDFs.

- Thirteen prospectus sections are structured in `src/content/prospectus.js`.
- Desktop includes a sticky contents list with working in-page anchor links; the contents list is hidden on mobile to match the reference layout.
- The page includes the same section summaries, internal links, contact details, visit actions and the environment media placeholder shown in the reference.
- The Prospectus PDF control remains disabled and labelled "coming soon" because the project does not currently contain an approved prospectus PDF. No placeholder download or fabricated document is supplied.


## Arrange a Visit page

The `/arrange-a-visit` page follows page 12 of the supplied desktop and mobile reference PDFs.

- The three visit steps and the "request is not a confirmed appointment" explanation are retained.
- The responsive request form includes parent name, email, optional telephone, child's age group, approximate start date, preferred visit date/time, optional message and privacy consent.
- The form validates in the browser and again on the server with Zod.
- The `/api/visits` route sends a notification email through Resend. It does not claim that an appointment is booked; nursery staff must contact the parent to agree a time.
- A honeypot field filters basic automated submissions.
- The location card links to Google Maps directions for the nursery's published Leicester address.

### Configure visit request emails

The form's email delivery is deliberately not marked as live until the nursery configures a verified sender.

1. Create a Resend account and verify the domain that will send nursery emails.
2. Create an API key.
3. Copy `.env.example` to `.env.local`.
4. Set `RESEND_API_KEY` to the API key.
5. Set `RESEND_FROM_EMAIL` to a sender address on the verified domain, for example `Beanstalk Day Nursery <visits@your-verified-domain.co.uk>`.
6. Set `VISIT_NOTIFICATION_EMAIL` to the inbox that should receive visit requests. If omitted, the published nursery email is used.
7. Restart the Next.js development server and submit a test request.

Until these environment variables are configured, the form displays a clear fallback with the nursery's phone and email instead of pretending the request was sent.

Before launch, add production rate limiting (for example, at the hosting/WAF layer) and confirm the privacy notice covers visit-request processing and the selected email provider.


## Admissions and Enrolment page

The `/admissions-and-enrolment` page follows page 13 of the supplied desktop and mobile PDFs.

- Desktop uses the six-step admissions journey shown in the desktop reference.
- Mobile uses the seven more detailed steps shown in the mobile reference.
- The contact section includes working Enquire and Request a visit tabs. The visit tab reuses the shared visit request form.
- The enquiry form includes the parent name, email, telephone, child's age/date of birth, preferred start date, enquiry topic, childcare requirement, optional message and privacy consent.
- The registration-interest card switches the enquiry form into registration mode and preselects Registration as the enquiry topic.
- The admissions FAQ questions are preserved from the reference.
- `/api/admissions` validates the submission with Zod and sends a notification through Resend.
- The form does not claim a place is reserved or a registration is complete; nursery staff follow up with the family.

### Admissions email configuration

The admissions route uses the same verified Resend sender as visit requests:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `ENQUIRY_NOTIFICATION_EMAIL` (defaults to the published nursery email)

Until Resend is configured, the form explains that online submission is unavailable and gives the nursery's published phone and email details.

Before production launch, complete the privacy notice, test both enquiry and registration-interest email delivery, configure rate limiting at the hosting/WAF layer, and confirm that the nursery's admission team is ready to respond to submissions.


## Gallery page

The `/gallery` page uses the 14 original nursery photographs visible on:

https://beanstalk-uk.vercel.app/gallery

- Original image descriptions from the source gallery are retained as accessible alt text.
- The four filters follow the supplied design reference: All, Rooms, Learning and play, and Around the nursery.
- The lightbox supports previous/next controls, Escape to close, and left/right keyboard navigation.
- The image cards are responsive and use the source website's image-optimisation URLs.

The gallery photographs are currently referenced from the source website rather than duplicated in `public/`. This keeps the project archive light and uses the exact photos supplied by the existing site. For long-term asset ownership, copy the original files into `public/images/gallery/` before the source hosting is retired.


## Parent Information page

The `/parent-information` page follows page 15 of the supplied desktop and mobile references.

- The page includes the six original sections: Getting in touch, Fees and funding, Opening times, Policies and documents, Safeguarding, and Concerns and complaints.
- Desktop includes a sticky left-hand section index with active-section highlighting based on scroll position.
- Mobile follows the reference's single-column layout without the desktop index.
- Telephone, email, directions, fees/funding, contact, privacy-notice and Ofsted links are actionable.
- The page uses only the nursery contact details and statements shown in the reference. It does not invent opening hours or safeguarding lead details.

The Privacy notice route linked from the policy card remains a separate draft page to be completed and approved before publication.


## Frequently Asked Questions page

The `/faqs` page follows page 16 of the supplied desktop and mobile references.

- Preserves the four reference categories and all nine question titles.
- Search filters questions instantly by question text, answer text, category and link label.
- Accordion answers open one at a time with height/opacity motion and respect reduced-motion preferences.
- The result count is announced to screen readers; no-results state offers a clear-search action.
- Includes the reference's "Still have a question?" visit/call strip and shared sunburst CTA.

The PDF reference shows the FAQ questions in their collapsed state and does not expose the original answer copy. The answers in `src/content/faqs.js` are therefore written from facts already present in the approved project content (nursery age range, visit-request process, published contact details, funding page, address, parent-information page and complaint guidance). The child's-progress answer deliberately directs parents to the team rather than inventing a communication policy. Please have nursery management approve the FAQ answer wording before launch.


## Contact page

The `/contact` page follows page 17 of the supplied desktop and mobile references.

- Desktop: dark-green contact details card beside the enquiry form.
- Mobile: contact details card stacks above the enquiry form.
- The nursery phone number, email, postal address, directions link and opening-hours note are sourced from `src/content/site.js`.
- Opening hours are not invented; the reference says "Please call to ask."
- The enquiry form reuses the validated `EnquiryForm` component and posts to `/api/enquiries`.
- `/api/enquiries` delegates to the existing validated admissions enquiry handler, which sends notifications through Resend when `RESEND_API_KEY` and `RESEND_FROM_EMAIL` are configured.
- The Google Map does not load until the visitor chooses "Load the map". This avoids contacting Google's map service before an intentional interaction.
- The map includes an external Google Maps directions link after loading.

Before production, configure the Resend variables in `.env.local` / hosting environment and verify the sender domain. The notification recipient defaults to the nursery email in `src/content/site.js`, and can be overridden with `ENQUIRY_NOTIFICATION_EMAIL`.


## Privacy Notice page

The `/privacy-notice` page follows page 18 of the supplied desktop and mobile PDFs.

- Preserves the seven source headings and the wording shown in the reference: Who we are; What we collect; Why we collect it; How long we keep it; Who sees it; Your rights; Cookies and third parties.
- Uses the source's published nursery address, email and telephone number, with working mailto/tel links.
- Links the Information Commissioner's Office to its official website.
- Keeps the reference's "Retention period to be confirmed" wording visible rather than inventing a retention schedule.
- The footer now includes a working Cookie settings dialog. Essential storage is always on; optional analytics preference is stored locally and defaults to off.
- No analytics provider is currently connected. The dialog explicitly says that saving an analytics preference does not turn tracking on by itself.
- The page follows the reference's narrow centred text column and does not add an unrequested CTA.

## Privacy and cookie review required before launch

The source PDF itself marks the data-retention period as "to be confirmed". Nursery management must confirm the retention period, controller/contact details, email/form providers, lawful basis and final privacy wording before publication. The cookie preference control is ready for a future analytics integration, but any analytics loader must check the saved preference before setting analytics cookies. The current build does not install or activate an analytics service.


## Careers page

The `/careers` page follows page 19 of the supplied mobile PDF. The supplied desktop PDF ends at page 18, so the desktop layout is a responsive adaptation of the mobile source.

- Preserves the source copy: the "Careers at Beanstalk" introduction; "People who put children first"; all four qualities; the "Send us a short note" introduction card; and "Safe recruitment".
- The four qualities animate in with the existing stagger motion component.
- The introduction card has a subtle hover lift and an "Email us" action that opens the visitor's email application, addressed to the nursery's published email with a prefilled subject.
- No application form, vacancy list, role, salary, or application deadline is invented.
- The careers link is included in the global Explore footer navigation.
- The shared Beanstalk sunburst CTA closes the page.

The source design uses an email link rather than a form. For that reason, no careers submission API is exposed; the unused placeholder `/api/careers` handler has been removed.


## Reference-page completion status

All 19 website routes now have dedicated page implementations. The supplied PDFs contain 18 desktop pages and 19 mobile pages; the Careers page is present only in the mobile PDF, so its desktop layout is a responsive adaptation. No website route still uses `PagePlaceholder`.

The next phase is site-wide validation and approval, not another page from the supplied PDFs. `npm install` was attempted in the current build environment but did not complete because package-registry access timed out. No production build or ESLint result is claimed until dependencies can be installed successfully.
