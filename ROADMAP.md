# ClawChat Roadmap

Development happens in small, focused pull requests. This file is the backlog.

## Phase 1 — Foundation
- [x] Repository scaffold (README, LICENSE, roadmap)
- [ ] webclaw client module (`src/webclaw/client.ts`) — typed scrape/crawl/search wrappers
- [ ] Environment config loader with validation
- [ ] Shared TypeScript types (Page, Chunk, ChatMessage)

## Phase 2 — Ingestion Pipeline
- [ ] Site crawler job (queue pages, respect robots.txt)
- [ ] Markdown chunking with overlap
- [ ] Embeddings + vector store (PostgreSQL + pgvector)

## Phase 3 — Chat API (NestJS)
- [ ] NestJS app scaffold with health endpoint
- [ ] `POST /chat` — retrieval + LLM answer with sources
- [ ] Rate limiting + API key auth per site

## Phase 4 — Widget & Demo
- [ ] Embeddable chat widget (vanilla TS, responsive, dark/light)
- [ ] Next.js demo site with live ClawChat
- [ ] Widget theming via data attributes

## Phase 5 — Polish
- [ ] Unit + e2e tests, GitHub Actions CI
- [ ] Docker compose for one-command self-hosting
- [ ] Docs site + deployment guide
