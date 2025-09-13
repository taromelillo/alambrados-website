// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.alambradosmelillo.com.ar",

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["node:fs/promises", "node:path", "node:url", "node:crypto"],
    },
  },

  integrations: [sitemap(), icon()],
  adapter: cloudflare({ imageService: "cloudflare" }),

  env: {
    schema: {
      PHONE_NUMBER: envField.string({
        context: "server",
        access: "public",
      }),
      RESEND_API_KEY: envField.string({
        context: "server",
        access: "public",
      }),
      EMAIL: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },
});
