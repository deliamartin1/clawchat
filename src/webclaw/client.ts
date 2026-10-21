import type { CrawlOptions, ScrapedPage, SearchHit } from "./types";

/**
 * Minimal typed client for the webclaw API.
 * Docs: https://webclaw.io — set WEBCLAW_API_KEY in your environment.
 */
export class WebclawClient {
  private readonly baseUrl: string;

  constructor(
    private readonly apiKey: string,
    baseUrl = "https://api.webclaw.io",
  ) {
    if (!apiKey) throw new Error("WebclawClient: apiKey is required");
    this.baseUrl = baseUrl.replace(/\/$/, "");
  }

  private async request<T>(path: string, body: unknown): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`webclaw ${path} failed: ${res.status} ${await res.text()}`);
    }
    return (await res.json()) as T;
  }

  /** Scrape a single page into clean markdown. Costs 1 credit. */
  async scrape(url: string): Promise<ScrapedPage> {
    return this.request<ScrapedPage>("/scrape", { url });
  }

  /** Crawl a site from a start URL and return every scraped page. */
  async crawl(startUrl: string, options: CrawlOptions = {}): Promise<ScrapedPage[]> {
    const { pages } = await this.request<{ pages: ScrapedPage[] }>("/crawl", {
      url: startUrl,
      maxPages: options.maxPages ?? 50,
      stayOnPath: options.stayOnPath ?? true,
    });
    return pages;
  }

  /** Search the web through webclaw. */
  async search(query: string, limit = 5): Promise<SearchHit[]> {
    const { results } = await this.request<{ results: SearchHit[] }>("/search", {
      query,
      limit,
    });
    return results;
  }
}
