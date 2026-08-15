import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Cambia esto por tu dominio real de Vercel (o tu dominio propio si le pones uno).
  // Es importante para que el sitemap y las etiquetas SEO generen URLs correctas.
  site: "https://football-data-mx-web.vercel.app",
  integrations: [sitemap()],
});
