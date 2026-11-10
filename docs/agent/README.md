# Operations

- `AGENTS.md`: standing repository rules read by Codex.
- `.codex/config.toml` and `.codex/agents/`: shared project settings and optional reviewer definitions.
- `docs/agent/PROJECT_CONTEXT.md`: current architecture and product assumptions.
- `docs/agent/tasks/`: approved scope / acceptance checklists (new file for each major task).
- `docs/agent/DECISIONS.md`: short durable decisions; no speculative outcomes.
- `docs/agent/runs/`: concise actual work/test/evidence logs; no transcripts or secrets.
- `docs/agent/prompts/` is reserved for local chat starter drafts and is ignored. Keep durable instructions and scope in the tracked files above.

To start a new Codex **App** project, choose Add Project / Open Folder for this existing directory and create a new thread. The shell initializer configures the repository and may start a new Codex **CLI** interactive session, but does not claim to create an app-UI project/thread automatically.
