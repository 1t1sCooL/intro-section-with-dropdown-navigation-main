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
  // Deploy branch only. Uncomment so the build is served from
  // mmalabugin.ru/IntroSectionWithDropdownNavigation/ (Jenkins → nginx).
  // On main this stays commented: Vercel serves the site from /.
  // Keep the same path uncommented in react-router.config.ts (basename).
  // base: "/IntroSectionWithDropdownNavigation/",
});
