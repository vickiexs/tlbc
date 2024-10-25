import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
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
        main: resolve(__dirname, "index.html"),
        fourzerofour: resolve(__dirname, "404.html"),
      },
    },
  },
});
