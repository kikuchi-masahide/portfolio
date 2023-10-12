import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    root: "src",
    build: {
        outDir: "..",
        assetsDir: "./dist",
        rollupOptions: {
            input: {
                main: "src/index.html",
            },
        },
    },
});
