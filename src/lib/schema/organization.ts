import type { Organization, WithContext } from 'schema-dts';
import { SITE } from '../site';

/**
 * Organization schema — the cornerstone entity declaration.
 * Tells Google, ChatGPT, Claude, Perplexity who Gudgumz is.
 *
 * Used sitewide in BaseLayout. Strong E-E-A-T signal via founder + employee.
 */
export const organizationSchema = (): WithContext<Organization> => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  description: SITE.description,
  slogan: SITE.positioning,
  foundingDate: SITE.foundingDate,
  foundingLocation: {
    '@type': 'Place',
    name: SITE.foundingLocation,
  },
  logo: {
    '@type': 'ImageObject',
    url: `${SITE.url}/brand/logo.png`,
    width: '512',
    height: '512',
  },
  image: `${SITE.url}${SITE.defaultOgImage}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: SITE.whatsapp.number,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Malayalam', 'Hindi'],
      contactOption: 'TollFree',
    },
  ],
  founder: SITE.team.founders.map((f) => ({
    '@type': 'Person' as const,
    name: f.name,
    jobTitle: f.role,
  })),
  employee: SITE.team.employees.map((e) => ({
    '@type': 'Person' as const,
    name: e.name,
    jobTitle: e.role,
  })),
  knowsAbout: [
    'Natural latex',
    'Hevea brasiliensis',
    'Rubber tapping',
    'Biodegradable materials',
    'Foldable gumboots',
    'Latex products',
    'Kerala rubber industry',
    'Sustainable manufacturing',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  sameAs: Object.values(SITE.social).filter(Boolean),
});

/**
 * LocalBusiness schema — geographic anchor.
 * Critical for "latex products kottayam" / "rubber products kerala" intent.
 */
export const localBusinessSchema = (): WithContext<Organization> => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#localbusiness`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.whatsapp.number,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  // @ts-expect-error — geo is valid on LocalBusiness types
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
});
