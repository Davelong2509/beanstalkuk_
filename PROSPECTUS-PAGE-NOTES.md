# Our Prospectus — implementation notes

## Source
- Supplied Beanstalk Website Desktop PDF, page 11.
- Supplied Beanstalk Website Mobile PDF, page 11.

## Implemented
- Original page introduction: "Our prospectus."
- Introductory line and the "Prospectus PDF coming soon" / "Book a Visit" actions.
- All 13 prospectus sections, preserving the source wording and order.
- Desktop sticky table of contents with in-page anchors.
- Mobile single-column section flow.
- Environment image placeholder and its source caption.
- About, ethos, nursery rooms, learning, team and fees internal links.
- Location, telephone, email and directions links.
- Visit and telephone actions in the final section.
- Final in-page visit strip and shared animated CTA.

## PDF availability
The source page says the prospectus PDF is coming soon. The project's `public/documents` folder contains no prospectus PDF, so both "coming soon" controls are intentionally disabled. They must only be enabled after the nursery supplies and approves the actual PDF.

## Content gaps preserved
The source page says to contact the nursery for opening hours and says meals/nutrition information will be shared here. These details have not been invented.
