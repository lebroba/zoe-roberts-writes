import { useEffect } from "react";
import { SITE } from "@/content/site";

interface PageMeta {
  title: string;
  description: string;
  /** Route path, e.g. "/book". Used for the canonical URL. */
  path: string;
}

function setMeta(selector: string, attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

/**
 * Per-route title, description, canonical, and Open Graph tags.
 *
 * A single-page app leaves the document title on whatever index.html shipped
 * with unless something updates it, so every route previously shared one title
 * and one canonical URL.
 */
export function usePageMeta({ title, description, path }: PageMeta): void {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);

    const url = `${SITE.url}${path}`;
    setMeta('meta[property="og:url"]', "property", "og:url", url);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path]);
}
