/** Shared types for the webclaw integration layer. */

export interface ScrapedPage {
  url: string;
  title?: string;
  /** Clean markdown extracted from the page. */
  markdown: string;
  links: string[];
  scrapedAt: string;
}

export interface CrawlOptions {
  /** Maximum number of pages to visit, including the start URL. */
  maxPages?: number;
  /** Only follow links under the start URL's path prefix. */
  stayOnPath?: boolean;
}

export interface SearchHit {
  url: string;
  title: string;
  snippet: string;
  score?: number;
}
