import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env": { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "production") },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
    vueDevTools(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ce.ts"),
      name: "MyVueCustomElement",
      fileName: (format) => `my-customized.${format}.js`,
      formats: ["es"],
    },
    minify: false,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
