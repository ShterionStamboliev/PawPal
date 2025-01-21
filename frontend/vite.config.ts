import path from 'path';
import react from '@vitejs/plugin-react';
/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
