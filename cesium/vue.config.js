/* const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); */

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  productionSourceMap: false,
  outputDir: "dist-libs",
  configureWebpack: {
    externals: {
      vue: "vue",
      "@mapgis/webclient-vue-ui": "@mapgis/webclient-vue-ui",
      "@vuepress/plugin-active-header-links":
        "@vuepress/plugin-active-header-links",
      "@vuepress/plugin-nprogress": "@vuepress/plugin-nprogress",
      "compression-webpack-plugin": "compression-webpack-plugin",
      "core-js": "core-js",
      "uglifyjs-webpack-plugin": "uglifyjs-webpack-plugin",
      vuepress: "vuepress",
      less: "less",
      "less-loader": "less-loader",
      "sass-loader": "sass-loader",
      "node-sass": "node-sass"
    },
    plugins: [
      /* new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: productionGzipExtensions,
        threshold: 2048,
        minRatio: 0.8
      }), */
      /* new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false
          }
        },
        parallel: true
      }) */
    ]
  }
};
