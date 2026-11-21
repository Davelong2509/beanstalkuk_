# Parent Information — implementation notes

## Source
- Supplied Beanstalk Website Desktop PDF, page 15.
- Supplied Beanstalk Website Mobile PDF, page 15.

## Page structure
1. Getting in touch
2. Fees and funding
3. Opening times
4. Policies and documents
5. Safeguarding
6. Concerns and complaints

## Responsive behaviour
- Desktop: narrow sticky section index on the left, content column on the right.
- The active section in the desktop index updates while scrolling using IntersectionObserver.
- Mobile: section index is hidden and the six content sections flow vertically, matching the reference.

## Functional links
- Telephone uses the nursery's published phone number.
- Email uses the nursery's published email address.
- Address opens directions in Google Maps.
- Fees and funding links to `/fees-and-funding`.
- Contact links to `/contact`.
- Privacy notice links to `/privacy-notice`.
- Ofsted opens the official Ofsted information page.

## Content accuracy
The source reference says to contact the nursery for opening times; no opening hours are invented.
The source reference says the safeguarding policy and designated safeguarding lead's name will be shown there; neither is invented or represented as already published.
The privacy notice is presented as a document card linking to its own route. That separate route still needs its approved policy text before production launch.
