# TMWD Works — website context (2026-11-10)

- Repo: `https://github.com/tmwdworks/website`
- Production domain: `https://tmwdworks.jp/` (GitHub Pages via main / repo root; **not Cloudflare Pages**)
- Runtime: static HTML/CSS/JavaScript, no framework/build chain. Cache busting versions on static CSS/JS URLs.
- Existing pages: `/`, `/business.html`, `/personal.html`, `/learning.html`, `/contact.html`, `/privacy.html`
- App files: `/apps/rhythmquiz/privacy/` and language-specific privacy URLs. Preserve them.
- Contact: Formspree form in `contact.html` and JS async submission in `script.js`; successful submission emits GA4 `generate_lead`. Never put name/email/message in analytics.
- GA4 property measurement ID already in source. `robots.txt`, `sitemap.xml`, `app-ads.txt` exist. Preserve.
- Brand identity: TMWD Works; service priorities: AI adoption/in-house enablement, AI-BPO/automation, small software tools; individual IT help and tutoring remain.
- Capacity: part-time service (weekday evenings/weekends); don't promise round-the-clock or instant SLA. Business scale aspirations are not existing client references.
- Public App Store listing for RhythmQuiz: https://apps.apple.com/jp/app/rhythmquiz/id6818729522
- Do not conflate released self-built app with commissioned work. App Store screenshots should be real source assets, not invented product UI.

## Working boundaries
- Main website is customer acquisition, not ad monetization. RhythmQuiz is an App Store acquisition channel and also a demonstration of end-to-end product delivery.
- Minimum-dependency changes; baseline locally before touching code, detect conflicts first.
