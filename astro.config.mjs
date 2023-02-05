import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://ericdew.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
