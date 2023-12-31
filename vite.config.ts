import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    root: "src",
    base: "https://kikuchi-masahide.github.io/portfolio/",
    publicDir: "../public",
    build: {
        outDir: "..",
        assetsDir: "./dist",
        copyPublicDir: false,
        rollupOptions: {
            input: {
                main: "src/index.html",
            },
        },
    },
});
