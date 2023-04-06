module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  productionSourceMap: false,
  outputDir: "dist-libs",
  pluginOptions: {
    /* webpackBundleAnalyzer: {
      openAnalyzer: false
    } */
  },
  configureWebpack: {
    externals: {
      vue: "vue",
      "@mapgis/mapbox-gl": "@mapgis/mapbox-gl",
      "@mapgis/webclient-vue-ui": "@mapgis/webclient-vue-ui",
      "@turf/turf": "@turf/turf",
      "map-promisified": "map-promisified",
      "mapbox-gl": "mapbox-gl",
      "node-sql-parser": "node-sql-parser",
      "postcss-inline-svg": "postcss-inline-svg",
      "resize-detector": "resize-detector",
      vcolorpicker: "vcolorpicker",
      "vue-runtime-helpers": "vue-runtime-helpers",
      vuepress: "vuepress",
    },
  },
};
