# Contact and Find Us — implementation notes

## Source
- Supplied Beanstalk Website Desktop PDF, page 17.
- Supplied Beanstalk Website Mobile PDF, page 17.

## Reference content reproduced
- Hero eyebrow: "Say hello"
- Heading: "Contact and find us."
- Description: "Call, email or come and see us. We would love to hear from you."
- Contact details card:
  - Beanstalk Day Nursery
  - 0116 254 2253
  - asha.patel@beanstalkdaynursery.co.uk
  - 4a Bishop Street, Town Hall Square, Leicester LE1 6AF
  - Get directions in Google Maps
  - Opening hours: "Please call to ask."
  - Book a Visit button
- Enquiry form fields:
  - Your name
  - Email
  - Telephone
  - Child's age or date of birth
  - Preferred start date
  - What would you like to ask about?
  - Childcare you need (Full time, Part time, Funded hours, Not sure yet)
  - Message (optional)
  - Privacy consent
  - Send enquiry / Or call 0116 254 2253
- Map block with a user-triggered "Load the map" action.

## Functional behaviour
- Phone and email links use `tel:` and `mailto:`.
- Directions open Google Maps in a new tab.
- Enquiry form posts to `/api/enquiries`.
- `/api/enquiries` delegates to the existing Zod-validated admissions enquiry handler, preserving server-side validation, honeypot handling, escaped email content and Resend delivery.
- The map iframe is only mounted after the visitor selects "Load the map"; the visitor can also open directions in Google Maps.

## Production setup
Set `RESEND_API_KEY` and `RESEND_FROM_EMAIL` in the hosting environment. Optionally set `ENQUIRY_NOTIFICATION_EMAIL`; otherwise the notification is sent to the nursery email in `src/content/site.js`. The sender domain must be verified with Resend.
