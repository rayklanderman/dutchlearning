import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  optimizeDeps: {
    include: ['react-router-dom', 'react-router'],
    force: true
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
        manifest: {
        name: 'Dutch Learning',
        short_name: 'DL',
        description: 'Learn Dutch language with interactive lessons, quizzes, and vocabulary tools',
        theme_color: '#AE1C28',
        background_color: '#FFFFFF',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
          src: '/favicon.svg',
          sizes: '48x48 72x72 96x96 128x128 256x256 512x512',
          type: 'image/svg+xml',
          purpose: 'any maskable'
          }
        ]
        },
      workbox: {
      globPatterns: ['**/*.{js,css,html,svg}'],
        runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
          }
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/i,
          handler: 'CacheFirst',
          options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 60 * 60 * 24 * 7 // 1 week
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
          }
        }
        ]
      }
    })
  ],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: './',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true
  }
})

