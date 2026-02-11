// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://yatskovanatoly.github.io",
  base: "/olbansky",
  env: {
    schema: {
      VITE_UPLOADTHING_TOKEN: envField.string({ context: "server", access: "secret" }),
      VITE_UPLOADTHING_APP_ID: envField.string({ context: "server", access: "secret", optional: true }),
    }
  }
});
