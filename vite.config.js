// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://jiyeon.han347.com/", // <-- 예: '/portfolio-react-new/'
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
