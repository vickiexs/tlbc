import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tlbc/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ["portabletext_react"],
  },
});
