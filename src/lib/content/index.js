import { staticProvider } from "./static-provider";

// Keep page components independent of the underlying content source.
// This provider can later be replaced or extended with Sanity.
export const contentProvider = staticProvider;

export async function getPageContent(slug) {
  return contentProvider.getPage(slug);
}
