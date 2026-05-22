import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aprastyo.my.id',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        ph: ['*'],
      },
    }), 
    sitemap({
      serialize(item) {
        if (item.url === 'https://aprastyo.my.id/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        }
        return item;
      },
    })
  ],
});