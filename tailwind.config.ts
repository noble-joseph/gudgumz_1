/**
 * Tailwind v4 uses CSS-first config (see src/styles/tokens.css).
 * This file exists for IDE intellisense and future tooling compatibility.
 */
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './public/**/*.html',
  ],
} satisfies Config;
