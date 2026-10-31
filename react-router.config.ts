import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: ["/"],
  // Deploy branch only. No trailing slash — React Router adds it.
  // Vite `base` in vite.config.ts is the same path WITH a trailing slash.
  // basename: "/IntroSectionWithDropdownNavigation",
} satisfies Config;
