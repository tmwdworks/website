# TMWD Works Website — Codex engineering instructions

This is the existing production site repository. Preserve its current HTML/CSS/JS architecture and existing URLs.

## Source of truth / task
- Begin with `docs/agent/PROJECT_CONTEXT.md`, `docs/agent/tasks/2026-11-10-site-refresh.md`, and relevant source files.
- User-facing service strategy: business AI adoption/verification, internal enablement, bounded AI-BPO/automation, plus existing personal support and learning.
- RhythmQuiz is a **self-developed released iPhone app**, not a paid client case. App Store URL is in task spec. Do not invent app features or pretend outbound click means installation.
- Preserve GitHub Pages root publishing, CNAME, sitemap, robots, Formspree and `generate_lead`, GA4, app-ads.txt, and existing RhythmQuiz privacy links.

## Working protocol
1. Check `git status --short`, `git branch --show-current`, `git log -1` before editing; stop when other people's or unrelated dirty changes might be affected.
2. Work on the installed `codex/20261110-site-refresh` feature branch, never main. Do not reset, clean, stash, force push, or overwrite without explicit owner consent.
3. Start with a concise plan. Implement the approved task with minimal dependencies (prefer zero; site is static).
4. Verify links, relative paths, responsive menu, existing form handling, accessibility, search metadata, and `app-ads.txt`. Test locally and report anything unverified.
5. Optional bounded subagents: `reviewer` for accessibility/regressions; `security_reviewer` for privacy/analytics/form changes. They must only review, not edit; role descriptions do not enforce OS read-only restrictions. Parent owns implementation and integration. Never delegate merely to increase parallelism.
6. Do not push/merge/deploy, change production domains/secret settings, or incur costs without owner permission. Prepare a commit/PR proposal and ask before production publication.
7. Document meaningful decisions in `docs/agent/DECISIONS.md`; add one concise factual task report to `docs/agent/runs/` per completed milestone. Include base/HEAD SHA, changed paths, tests, findings, remaining work, and reviewer invocation. Do not save full chat transcripts, chain of thought, tokens guesses, personal data, secrets or incidental tool logs.
8. Keep reports and commit messages in English, site copy in Japanese. Don't claim successful test if not executed.

## Required deliverable
- Implement requirements and check each criterion in `docs/agent/tasks/2026-11-10-site-refresh.md`.
- Show readable diff summary and review/acceptance result before requesting a merge.
