// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://yatskovanatoly.github.io",
  base: "/olbansky",
  // env: {
  //   schema: {
  //     UPLOADTHING_TOKEN: envField.string({ context: "server", access: "secret" }),
  //     UPLOADTHING_APP_ID: envField.string({ context: "server", access: "secret" }),
  //   }
  // }
});
