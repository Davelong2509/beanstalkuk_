# Admissions and Enrolment — implementation notes

## Source references
- Supplied Beanstalk Website Desktop PDF, page 13.
- Supplied Beanstalk Website Mobile PDF, page 13.

## Desktop / mobile difference
The source PDFs intentionally show different journey presentations:
- Desktop: six compact cards — Discover, Explore, Trust, Enquire, Visit, Register.
- Mobile: seven expanded cards — Enquiry, Nursery visit, Meeting the team, Fees and funding discussion, Registration, Settling in, Starting nursery.

Both presentations are implemented at their matching responsive breakpoints rather than forcing one version onto both layouts.

## Page sections
- Admissions and enrolment hero with the original introductory copy.
- Responsive admissions journey.
- "Visit us, or ask us anything" contact section.
- Enquire / Request a visit tabs.
- General enquiry form and reused visit request form.
- Questions worth asking list.
- Register your interest CTA.
- Shared animated sunburst CTA.

## Enquiry form fields
Required:
- Your name
- Email
- Telephone
- Child's age or date of birth
- Privacy consent

Optional:
- Preferred start date
- What would you like to ask about?
- Childcare you need
- Message

The source PDF shows the topic selector and childcare choices but does not show the expanded dropdown options. Topic options are therefore kept to the subjects explicitly referenced on the page: places, funded hours, what a day looks like, fees, settling in, registration and something else.

## Registration interest
The reference presents a "Register your interest" card rather than a separate second form. Its CTA switches the shared enquiry form into registration-interest mode and preselects the Registration topic. This keeps the workflow functional without inventing an additional registration process.

## Submission
- `/api/admissions` uses server-side Zod validation.
- Email notifications use the existing Resend environment variables.
- The form sends a notification to `ENQUIRY_NOTIFICATION_EMAIL`, defaulting to the published nursery email.
- Parent email is set as reply-to.
- A honeypot field filters basic bot submissions.
- No place is reserved and no registration is completed automatically.

## Before production
- Configure and test Resend.
- Finish the privacy notice and confirm the data-use wording.
- Configure rate limiting at the hosting or WAF layer.
- Confirm the admissions team can monitor and respond to incoming requests.
