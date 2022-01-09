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
          keep_infinity: true, // (默认: false) -- 传递true以防止Infinity被压缩成1/0，这可能会导致 Chrome 上的性能问题。
          drop_console: true, // 生产环境删除console
          drop_debugger: true,
        },
      },
      reportCompressedSize: false, // 默认true, 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
      chunkSizeWarningLimit: 2000, // 默认500 chunk 大小警告的限制（以 kbs 为单位）。
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
