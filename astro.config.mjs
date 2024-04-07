import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  server: { port: 4321, host: true },
  integrations: [mdx(), sitemap(), icon({ iconsDir: "icons" })],
});
