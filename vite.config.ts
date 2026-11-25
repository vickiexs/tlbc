import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    // Sanity CORS only allows this origin, so fail loudly instead of drifting to 5174
    port: 5173,
    strictPort: true,
  },
  optimizeDeps: {
    include: [
      "react-fast-compare",
      "invariant",
      "shallowequal",
      "react-helmet-async",
    ],
    exclude: ["portabletext_react"],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        fourzerofour: resolve(import.meta.dirname, "404.html"),
      },
    },
  },
});
