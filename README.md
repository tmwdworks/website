# TMWD Works Website

Public website for **TMWD Works**.

- Production domain: `https://tmwdworks.jp`
- Hosting: GitHub Pages
- Stack: static HTML / CSS / JavaScript

## Pages

- `/` — overview / entry point
- `/personal.html` — personal and household IT support
- `/business.html` — AI / software / IT support for sole proprietors and small businesses
- `/learning.html` — IT / programming tutoring and technical mentoring
- `/contact.html` — contact form UI
- `/privacy.html` — website privacy policy
- `/apps/rhythmquiz/privacy/` — RhythmQuiz privacy policy (Japanese / English)
- `/app-ads.txt` — authorized seller declaration for AdMob

## Contact form

The contact page posts directly to Formspree:

- Endpoint: `https://formspree.io/f/moevrdwn`
- Method: `POST`
- Encoding: UTF-8
- Submission: asynchronous `fetch` with `Accept: application/json`
- UI: Japanese success/error messages are shown on the page
- Fallback contact: `tmwdworks@gmail.com`

The Formspree project is restricted to the production domain, so form submission should
be tested from `https://tmwdworks.jp/` rather than localhost.

## Google Analytics

Google Analytics 4 is installed on the root website pages.

- Measurement ID: `G-C59W6H3G6D`
- Enhanced Measurement: configured in the GA4 web stream
- Successful Formspree submissions emit the recommended GA4 event `generate_lead`
- Event parameters:
  - `lead_source`: `website_contact_form`
  - `service_category`: selected inquiry category
- Name, email address, message body, and other contact-form PII are not sent in the custom GA event
- Nested app-specific privacy pages under `apps/` are intentionally not tagged by this website release

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub Pages

Publish from the `main` branch, repository root (`/`).
The `CNAME` file configures `tmwdworks.jp` as the custom domain.

## Static asset cache busting

CSS and JavaScript references include a release query string:

- `styles.css?v=20260930-v6`
- `script.js?v=20260930-v6`

Increment the version string when CSS or JavaScript changes so browsers fetch the updated assets after deployment.
