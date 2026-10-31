import { reactRouter } from "@react-router/dev/vite";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // Deploy branch: assets are served from mmalabugin.ru/IntroSectionWithDropdownNavigation/.
  // On main this line stays commented so Vercel serves the site from /.
  // Keep basename in react-router.config.ts in the same state (no trailing slash there).
  // Trailing slash is required so Vite joins `base + "assets/..."` instead of
  // gluing the path onto the last segment. `basename` uses the same string.
  base: "/IntroSectionWithDropdownNavigation/",
});
