import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: ["/"],
  // Deploy branch. Identical to Vite `base`, including the trailing slash,
  // so the dev-server check `basename.startsWith(base)` passes.
  // On main this line stays commented.
  basename: "/IntroSectionWithDropdownNavigation/",
} satisfies Config;
