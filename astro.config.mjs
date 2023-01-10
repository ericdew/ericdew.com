import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://ericdew.com',
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ]
});