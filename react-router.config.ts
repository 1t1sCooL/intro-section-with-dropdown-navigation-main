import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: ["/"],
  // Deploy branch. No trailing slash — React Router adds it.
  // Vite `base` in vite.config.ts is the same path WITH a trailing slash.
  // On main this line stays commented.
  basename: "/IntroSectionWithDropdownNavigation",
} satisfies Config;
