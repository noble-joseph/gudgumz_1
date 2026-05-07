/**
 * Single source of truth for site-wide constants.
 * Edit here, propagates everywhere. Never hardcode these elsewhere.
 */

export const SITE = {
  // Identity
  name: 'Gudgumz',
  legalName: 'Gudgumz Private Limited',
  domain: 'gudgumz.com',
  url: 'https://gudgumz.com',

  // Voice
  positioning: 'Made from sap. Made to age. Made to return.',
  tagline: 'Good, the honest way.',
  description:
    'Natural latex objects from Kanjirappally, Kerala. 94–99% Hevea brasiliensis. FlexiBoot, GrowPouch, Latex Gloves and Sanitary Socks — made to age honestly and return to the earth.',
  shortDescription:
    'Natural latex objects from Kerala. 94–99% Hevea brasiliensis. Made to age. Made to return.',

  // Locale
  locale: 'en_IN',
  language: 'en-IN',
  currency: 'INR',

  // Contact
  whatsapp: {
    number: '+917306348351',
    e164: '917306348351',
    display: '+91 73063 48351',
    deepLink: 'https://wa.me/917306348351',
  },
  email: 'hello@gudgumz.com',

  // Address — used in LocalBusiness schema
  address: {
    street: 'Kanjirappally',
    locality: 'Kanjirappally',
    region: 'Kerala',
    postalCode: '686507',
    country: 'IN',
    countryName: 'India',
  },

  // Geo — Kanjirappally coordinates (update if precise location differs)
  geo: {
    latitude: 9.5594,
    longitude: 76.7872,
  },

  // Founders & team — fuels Organization schema E-E-A-T
  team: {
    founders: [
      {
        name: 'Manoj Sebastian',
        role: 'Founder & Managing Director',
        slug: 'manoj-sebastian',
      },
      {
        name: 'Michael Thomas',
        role: 'Co-founder & Director',
        slug: 'michael-thomas',
      },
    ],
    employees: [
      {
        name: 'Noble Joseph',
        role: 'Technical & Operations Lead, PR & Marketing',
        slug: 'noble-joseph',
      },
    ],
  },

  // Founding
  foundingDate: '2024-01-01', // update if you have exact date
  foundingLocation: 'Kanjirappally, Kerala, India',

  // Social — every URL strengthens the Knowledge Graph entity
  social: {
    instagram: '', // e.g. 'https://instagram.com/gudgumz'
    facebook: '',
    youtube: '',
    linkedin: '',
    twitter: '',
  },

  // Defaults
  defaultOgImage: '/og/default.jpg',

  // Material truths — reused across schema and copy
  material: {
    primary: 'Hevea brasiliensis natural latex',
    contentMin: 94,
    contentMax: 99,
    origin: "Kerala's rubber belt",
    biodegradable: true,
  },

  // Hero products — order matters (FlexiBoot is the hero)
  products: [
    { slug: 'flexiboot', name: 'FlexiBoot' },
    { slug: 'growpouch', name: 'GrowPouch' },
    { slug: 'latex-gloves', name: 'Latex Gloves' },
    { slug: 'sanitary-socks', name: 'Sanitary Socks' },
  ],
} as const;

// Helper: build absolute URL from a path
export const absoluteUrl = (path: string = '/'): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${cleanPath === '/' ? '' : cleanPath}`;
};

// Helper: build a WhatsApp deep link with prefilled message
export const whatsappLink = (message?: string): string => {
  const base = SITE.whatsapp.deepLink;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};
