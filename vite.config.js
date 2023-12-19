import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "نمو",
        short_name: "نمو",
        description: "Fluffless jasmine rice for those cold winter nights",
        icons: [
          {
            src: "/images/icon-192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/images/icon-512.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: "/images/icon-maskable-192.png",
            type: "image/png",
            sizes: "192x192",
            purpose: "maskable",
          },
          {
            src: "/images/icon-maskable-512.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "maskable",
          },
        ],
        start_url: "/home",
        orientation: "portrait",
        display: "standalone",
        scope: "/",
      },
    }),
  ],
});
