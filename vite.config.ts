import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
    // 플러그인 추가 (자동으로 tsconfig 경로 매핑)
    tsconfigPaths(),
  ],
})
