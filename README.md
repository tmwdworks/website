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
- `/privacy.html` — privacy policy

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

- `styles.css?v=20260930-v5`
- `script.js?v=20260930-v5`

Increment the version string when CSS or JavaScript changes so browsers fetch the updated assets after deployment.
