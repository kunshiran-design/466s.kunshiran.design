import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }), tailwind()],
  output: "server",
  adapter: netlify()
});