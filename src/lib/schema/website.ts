import type { WebSite, WithContext, BreadcrumbList } from 'schema-dts';
import { SITE } from '../site';

/**
 * WebSite schema — enables sitelinks search box in Google.
 */
export const websiteSchema = (): WithContext<WebSite> => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: SITE.language,
  publisher: {
    '@id': `${SITE.url}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE.url}/?q={search_term_string}`,
    },
    // @ts-expect-error — query-input is valid per Google docs
    'query-input': 'required name=search_term_string',
  },
});

export type Crumb = { name: string; url: string };

/**
 * Breadcrumbs — navigational schema, also rendered visually.
 */
export const breadcrumbSchema = (
  crumbs: Crumb[]
): WithContext<BreadcrumbList> => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: crumb.name,
    item: crumb.url.startsWith('http') ? crumb.url : `${SITE.url}${crumb.url}`,
  })),
});
