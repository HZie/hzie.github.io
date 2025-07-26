// vite.config.js
export default defineConfig({
  base: "./", // <-- 절대경로(‘/repo/’)가 아니라 "./" 로
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html", // leading slash 없애기
    },
  },
});
