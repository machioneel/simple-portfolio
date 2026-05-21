import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aprastyo.my.id', // Wajib untuk sitemap dan meta tag canonical
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
    sitemap()
  ],
});