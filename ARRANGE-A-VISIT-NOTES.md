# Arrange a Visit — implementation notes

## Source
- Supplied Beanstalk Website Desktop PDF, page 12.
- Supplied Beanstalk Website Mobile PDF, page 12.

## Page content and layout
- "Arrange a visit." hero and introductory invitation.
- "What happens on a visit?" with three numbered steps:
  1. Come and say hello.
  2. See the rooms.
  3. Ask anything.
- The request-not-confirmation explanation appears beside the steps and inside the form introduction.
- Form fields and consent wording follow the reference.
- The location section uses the published nursery address and a directions link.
- Shared animated deep-green CTA remains at the bottom.

## Form behaviour
- Client-side native form validation and server-side Zod validation.
- Required: parent name, email, child's age group, privacy consent.
- Optional: telephone, approximate start date, preferred visit date, preferred visit time, message.
- Submits to `/api/visits`.
- Resend sends a notification to `VISIT_NOTIFICATION_EMAIL`, defaulting to the nursery email already published in the site content.
- The reply-to address is the parent's email so nursery staff can reply directly.
- Success copy explicitly says the nursery will contact the parent to agree a time; it does not promise an appointment.
- The API returns a clear service-unavailable response until Resend is configured.

## Required production setup
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` (must be on a verified Resend domain)
- Optional `VISIT_NOTIFICATION_EMAIL`

## Important before launch
- Test email delivery from the deployed domain.
- Review the privacy notice to ensure the stated use of parent contact details matches actual processing and the email provider.
- Configure rate limiting at the hosting or WAF layer.
- Confirm the age-group labels match the nursery's admission policy.
