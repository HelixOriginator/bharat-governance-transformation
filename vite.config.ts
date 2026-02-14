import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This configuration is REQUIRED for GitHub Pages deployment
// It ensures all assets and PDF links work correctly

export default defineConfig({
  base: "/bharat-governance-transformation/",
  
  plugins: [react()],
  
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
