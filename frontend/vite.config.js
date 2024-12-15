// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	server: {
// 		proxy: {
// 			"/api": {
// 				target: "http://localhost:5000",
// 			},
// 		},
// 	},
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true, // Optional: ensure proper proxy behavior
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: adjust API paths
      },
    },
  },
  build: {
    outDir: "public", // Output folder set to 'public'
    assetsDir: "assets", // Folder for static assets
  },
});
