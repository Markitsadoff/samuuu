import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 👇 Добавляем ключ "type": "module" в package.json, чтобы Vercel понимал ESM
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
