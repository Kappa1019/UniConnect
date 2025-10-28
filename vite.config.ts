import { defineConfig, Plugin, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: __dirname, // Explicitly set root to the project directory
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()), // Allow workspace root for monorepo/hoisted deps
        path.resolve(__dirname, "./client"),
        path.resolve(__dirname, "./shared"),
        __dirname, // Allow the root folder where index.html is located
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}
