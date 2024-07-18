// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://cleanuri.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/v1/shorten"), // Reescribe el path para incluir el endpoint
      },
    },
  },
});
