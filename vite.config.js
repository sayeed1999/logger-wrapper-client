import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 3030,
  },
  preview: {
    port: 8080,
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx"],
    alias: {
      "@": resolve(__dirname, "src"),
      "@assets": resolve(__dirname, "src/assets"),
      "@components": resolve(__dirname, "src/components"),
    },
  },
});
