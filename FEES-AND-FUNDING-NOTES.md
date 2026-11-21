# Fees and Funding page — implementation notes

Source: supplied Beanstalk Website Desktop PDF, page 10, checked against the supplied mobile PDF page 10.

## Content fidelity

- No session fee amounts are displayed in the source page. The page says to contact the nursery for current fees; no prices have been invented.
- Funding rows preserve the three groups, weekly hours and explanatory notes shown in the reference.
- The four getting-started steps preserve the reference wording.
- The Tax Free Childcare and contact cards preserve the source copy.
- The November 2026 source note is retained as printed in the PDF.

## Components

- `src/app/(website)/fees-and-funding/page.jsx`
- `src/content/fees.js`
- `src/components/sections/FundingEligibilityTable.jsx`
- `src/components/sections/FundingSteps.jsx`
- `src/components/sections/FundingHourVisual.jsx`

## Publication note

The nursery should verify eligibility wording and the government guidance date before publishing. Funding rules and availability can change. The website should not imply that every family qualifies for 30 hours or that every funded hour covers meals, consumables or extras.
