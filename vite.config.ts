import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), viteSingleFile(), tailwindcss()],
  server: {
    host: true,
  },
})
