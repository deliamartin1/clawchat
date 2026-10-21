# ClawChat

**An open-source AI chatbot for any website.** ClawChat crawls your site with [webclaw](https://webclaw.io), builds a knowledge base from your own pages, and answers your visitors' questions 24/7 — customer support, lead capture, and FAQs on autopilot.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white)

## ✨ Features

- 🕷️ **Learns from your website** — point it at a URL; it scrapes and indexes your pages automatically
- 💬 **Embeddable chat widget** — one script tag on any site, fully responsive on every screen
- 🧠 **Answers from your content** — retrieval-grounded replies, not generic AI guesses
- ⚡ **Fast & modern** — TypeScript end to end: Next.js frontend, NestJS API
- 🔓 **Open source** — MIT licensed, self-host it anywhere

## 🔧 How It Works

1. **Crawl** — webclaw scrapes your site into clean markdown
2. **Index** — pages are chunked and embedded into a vector store
3. **Chat** — the widget asks the API, which retrieves the right passages and answers in context

## 🕷️ Scrape with webclaw

ClawChat's ingestion pipeline is powered by webclaw:

```ts
import { WebclawClient } from "./src/webclaw/client";

const webclaw = new WebclawClient(process.env.WEBCLAW_API_KEY!);
const pages = await webclaw.crawl("https://example.com", { maxPages: 50 });
// pages → chunk → embed → answer visitor questions from real content
```

## 🗺️ Roadmap

See [ROADMAP.md](ROADMAP.md) — development happens in small, reviewable pull requests, in the open.

## 🤝 Contributing

Issues and PRs are welcome. Pick anything from the roadmap, open a branch, and send a focused pull request.

## 📄 License

MIT © Delia Martin
