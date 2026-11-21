# Privacy Notice — implementation notes

## Source
- Supplied Beanstalk Website Desktop PDF, page 18.
- Supplied Beanstalk Website Mobile PDF, page 18.

## Source wording reproduced
1. Who we are
2. What we collect
3. Why we collect it
4. How long we keep it
5. Who sees it
6. Your rights
7. Cookies and third parties

The section copy follows the PDF, including the explicit line:
"Retention period to be confirmed."

## Functional additions
- Nursery email uses `mailto:`.
- Nursery phone uses `tel:`.
- ICO link opens https://ico.org.uk/.
- The global footer now contains a Cookie settings dialog.
- Essential storage is always on.
- Optional analytics preference defaults to off and is stored under the localStorage key `beanstalk-cookie-preferences`.
- The dialog explains that no analytics service is currently connected and that saving the preference does not itself enable tracking.

## Required review before publication
The nursery must confirm:
- The data controller identity and contact details.
- The retention period for enquiry and visit details.
- The actual email/form processors and any relevant third-party providers.
- That the stated lawful basis and consent process match the nursery's real processing.
- Whether analytics will be enabled, which provider will be used, and that any analytics loader respects the saved opt-in preference.
- The final wording and legal compliance of this notice.

Do not replace "Retention period to be confirmed" with an assumed number of months or years.
