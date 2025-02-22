import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "chatapp",
      filename: "remoteEntry.js",
      remotes: {
        store: "http://localhost:5003/assets/remoteEntry.js"
      },
      exposes: {
        "./Chat": "./src/Chat",
      },
      shared: ["react", "react-dom","react-redux","@reduxjs/toolkit"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
