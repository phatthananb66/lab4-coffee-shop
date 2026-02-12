import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
<<<<<<< HEAD
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
})
