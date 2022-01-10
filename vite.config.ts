import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

let alias = {
  "@": path.resolve(__dirname, "./src"),
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [react()],
});
