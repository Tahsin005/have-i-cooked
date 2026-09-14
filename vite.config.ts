import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const tagger = mode === "development" ? componentTagger() : null;
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      tagger && {
        ...tagger,
        transform(code: string, id: string) {
          if (id.includes("Lanyard")) return null;
          return (tagger as any).transform?.call(this, code, id);
        },
      },
    ].filter(Boolean),
    assetsInclude: ["**/*.glb"],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
