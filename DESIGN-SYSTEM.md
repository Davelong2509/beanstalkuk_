# Beanstalk design foundation

## Brand palette

| Token | Hex | Intended use |
|---|---|---|
| Cream | `#FFF9ED` | Primary page background |
| Forest | `#103C30` | Main headings, dark sections and navigation |
| Sage | `#EDF2DE` | Soft alternating section background |
| Sage deep | `#DFE8D0` | Supporting surfaces |
| Butter | `#F8E9BF` | Warm highlight panels |
| Terracotta | `#B94D40` | Primary calls to action and small accents |

These are working approximations sampled from the supplied PDF screenshots. Refine against original brand assets if they become available.

## Typography

- Display: DM Serif Display, regular weight. Use for large editorial headings.
- Body/UI: DM Sans. Use for paragraphs, navigation, forms and controls.
- Eyebrows: DM Sans, uppercase, bold, generous letter spacing.

## Layout principles

- Warm cream is the default canvas.
- Use forest green for strong contrast and CTA bands.
- Alternate sage and butter sections to create rhythm without visual clutter.
- Keep generous horizontal gutters and restrained content widths.
- Use rounded corners sparingly, primarily for photography and controls.
- Motion should support hierarchy and remain respectful of reduced-motion settings.

## Component primitives

- `Button`: consistent primary, secondary, outline, light and ghost actions.
- `PageContainer`: shared responsive content width.
- `SectionHeading`: eyebrow, editorial heading and supporting copy.
- `SectionShell`: shared section background and vertical rhythm.


## Page implementation notes

- Inner-page introductions use `PageHero` with a consistent breadcrumb, eyebrow, display heading and description.
- Editorial split layouts use `SplitReveal` and `ImageReveal`.
- Empty reference-image areas use `MediaPlaceholder`; this preserves the visual rhythm without inventing nursery photography.
- Nursery room cards use the extracted reference photography and keep their copy as accessible HTML.
- Ethos rows alternate text and media on desktop and stack cleanly on narrow screens.

## Nursery room detail pages

- The Babies, Toddlers and Preschool detail pages share `RoomDetailPage` and use structured copy from `src/content/room-details.js`.
- Room pages follow the supplied desktop and mobile reference sequence: breadcrumb hero, room introduction and portrait photography, learning and staff-support lists, practical details, then visit and next-step cards.
- Age-range labels appear only on the Babies and Preschool pages, matching the reference. The Toddler page does not introduce an age range that is not stated in the source.
- The Preschool practical panel uses its reference activity photograph; the Babies and Toddlers practical panels remain intentionally blank butter-yellow image areas, as shown in the reference.
