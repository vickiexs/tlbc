import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./build",
  },
  optimizeDeps: {
    exclude: ["portabletext_react"],
  },
});