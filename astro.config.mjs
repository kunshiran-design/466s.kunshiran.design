import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify/functions'
import sitemap from '@astrojs/sitemap'

import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  site: 'https://466s.kunshiran.design',
  integrations: [
    react(),
    ,
    // partytown({
    // config: {
    //   forward: ['dataLayer.push']
    // }
    // })
    tailwind(),
    sitemap(),
    robotsTxt(),
  ],
  output: 'server',
  adapter: netlify(),
})
