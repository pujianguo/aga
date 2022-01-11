import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'

export default ({ mode }) => {
  // const isDev = mode === 'development'
  return defineConfig({
    plugins: [
      vue(),
      viteSvgIcons({
        // Specify the icon folder to be cached
        iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
        // Specify symbolId format
        symbolId: 'svg-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        styles: resolve(__dirname, 'src/styles'),
        hooks: resolve(__dirname, 'src/hooks'),
        components: resolve(__dirname, 'src/components'),
        utils: resolve(__dirname, 'src/utils'),
        api: resolve(__dirname, 'src/api'),
      },
    },
    build: {
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true,
        },
      },
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: (content, loaderContext) => {
            return "@import 'styles/mixins.scss';" + content
          },
        },
      },
    },
    server: {
      proxy: {
        '/devApi': {
          target: 'http://devapi.xxx.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/devApi/, '/'),
        },
      },
      // hmr: {
      //   overlay: false,
      // },
    },
  })
}
