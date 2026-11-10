# Task WEB-20261110-01 — Business services refresh + RhythmQuiz launch landing

Status: approved for implementation on feature branch; **not approved for publishing/merging**.

## Goals
1. Reframe business services around customer outcomes, verifiable implementation and operations.
2. Introduce a standalone RhythmQuiz promotional / portfolio page with a direct official App Store link.
3. Add homepage discovery, shared navigation, SEO and measurement without disrupting current operations.

## A. Business service messages
- Main page / `business.html`: four lanes:
  1. AI introduction/feasibility & evaluation (RAG / agent / AI vs deterministic software separation)
  2. AI internal enablement & handoff (docs, training, reproducible operations)
  3. Business automation & bounded AI-BPO recurring operation
  4. Small apps & systems / infrastructure (Python, APIs, Web, Linux, Docker etc.)
- Present discover → verify → implement/handoff → operate/improve with explicit evidence and acceptance criteria.
- Distinguish consulting, prototype, actual deployed operation; never claim client projects or outcomes without evidence.
- No 24/7 support or guaranteed urgent weekday-daytime response. Do not state fixed pricing or revenue claims.
- Preserve individual and tutoring service discovery; homepage hero may emphasize business but no wholesale erasure.
- Update page title, meta description and OGP appropriately.

## B. RhythmQuiz app and development-work page
- New URL: `/apps/rhythmquiz/` using `apps/rhythmquiz/index.html` (preserve existing privacy subfolders).
- Official destination: https://apps.apple.com/jp/app/rhythmquiz/id6818729522
- Verified listing: iPhone, iOS 17+, free with ads, Japanese/English; listen and choose 1 of 4 displayed rhythm patterns, Easy/Normal/Hard, adjustable BPM, score/streak, local cumulative statistics, no account sign-up.
- Text sections: what it does, who benefits (instrument/drum practice, rhythm sight-reading / ear training), feature highlights, self-developed product and its development lifecycle, install CTA, privacy link.
- Two visible App Store CTAs (hero and bottom). Use readable text, direct https URL, `target=_blank` with `rel=noopener noreferrer` if new tab.
- Provide natural link to the business service page and sensible navigation (prefer a general label e.g. 'アプリ・開発実績'; only one app currently exists).
- **No false screenshots**. If authentic screenshots exist locally and are usable, ask to include/verify; otherwise finish with a tasteful typography-based hero and report screenshot follow-up.
- Explicitly call it 自主開発 / 自社制作 rather than 受託実績.

## C. Shared infrastructure / analytics
- Add homepage promotional section and navigation on all main website pages (including privacy); do not add unwanted GA4 site tags to app privacy pages merely for site navigation.
- Add new URL to `sitemap.xml`, canonical, mobile metadata and OGP where useful.
- Preserve `app-ads.txt`, robots, CNAME and every previous privacy route.
- GA4 event for outbound App Store CTA click: `app_store_click`, parameters `app_name=RhythmQuiz`, `link_position={home|hero|bottom}`; no PII. It records clicks, **not installations**.
- Preserve existing GA4 `generate_lead` exactly semantically, Formspree post, validation, error handling, category query preselection.
- Update CSS/JS cache-busting tokens consistently on all affected static pages.
- Avoid new dependencies, remotely fetched JS beyond what site already has, invented product graphics/screenshots, third-party tracking pixels.

## Acceptance and validation
- [ ] Before modification: status / branch / baseline commit captured in report; no unrelated work overwritten.
- [ ] Home, business, app landing and all main pages render and mobile menu works at 375px and desktop.
- [ ] From home to app page to official App Store; app page to privacy and business; all links resolve.
- [ ] App details match App Store listing, no unsupported claims or accidental 'customer case'.
- [ ] Formspree and GA4 `generate_lead` code path preserved; test network submission ONLY with owner approval (avoid noisy live inquiries).
- [ ] `app_store_click` event scoped to outbound links; no PII, no misleading 'download count'.
- [ ] Sitemap XML valid, new page present and no previous entries removed.
- [ ] `app-ads.txt`, `CNAME`, `robots.txt`, app privacy files unchanged.
- [ ] No absolute links accidentally point to test/staging domains; no broken relative paths in `/apps/rhythmquiz/`.
- [ ] Focused reviewer and privacy reviewer only if useful; findings resolved by parent; report unrun tests.
- [ ] Show diff, evidence and report. No push, PR, merge or production publish until explicit owner approval.

## Deliverable: first Codex thread
Implement the approved refresh in this existing repository; do not initialize a new Git repo or replace website files wholesale. Create one reviewed coherent diff on feature branch. Log work to `docs/agent/runs/2026-11-10-WEB-20261110-01.md`. Resume this task as needed; don't reopen already settled scope.
