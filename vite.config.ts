import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [viteReact()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@minimals': resolve(__dirname, './src/minimals'),
            '@minimalsTheme': resolve(__dirname, './src/minimals/theme'),
        },
    },
});
