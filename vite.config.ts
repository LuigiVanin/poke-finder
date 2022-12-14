import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => "ion-icon" === tag,
                },
            },
        }),
    ],
    // build: {
    //     rollupOptions: {
    //         external: "/src/main.js",
    //     },
    // },
});
