// const demoCode = require("vuepress-plugin-demo-code");

module.exports = {
  title: "VueCesium",
  dest: "dist-docs",

  /*   evergreen: true,
  serviceWorker: true, */

  locales: {
    "/": {
      lang: "zh-CN",
      title: "中地数码",
      description: "@mapgis/webclient-vue-cesium-example",
    },
  },
  themeConfig: {
    locales: {
      "/": {
        // 多语言下拉菜单的标题
        selectText: "选择语言",
        // 该语言在下拉菜单中的标签
        label: "简体中文",
        // 编辑链接文字
        editLinkText: "在 GitHub 上编辑此页",
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新",
          },
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          {
            text: "向导",
            link: "/guide/",
          },
          {
            text: "API",
            link: "/api/",
          },
          {
            text: "WebClient",
            link: "http://develop.smaryun.com",
          },
          { text: "开源", link: "https://github.com/MapGIS/WebClient-Vue" },
        ],
        sidebar: [
          {
            title: "开发指南",
            collapsable: false,
            children: [
              ["/guide/", "安装"],
              ["/guide/quickStart.md", "快速上手"],
              ["/guide/introduction.md", "模块说明"],
            ],
          },
          {
            title: "组件",
            collapsable: false,
            children: [
              {
                title: "地图",
                collapsable: false,
              },
              ["/api/", "地图"],
              {
                title: "控件",
                collapsable: false,
              },
              ["/api/control/scalecontrol.md", "比例尺"],
            ],
          },
        ],
      },
    },
  },
  serviceWorker: true,
  head: [
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react@16.6.3/umd/react.production.min.js",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom@16.6.3/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/numerify/lib/index.umd.min.js" },
    ],
    [
      "link",
      {
        href: "http://develop.smaryun.com/static/libs/cdn/zondyclient/npm/webclient-vue-cesium.css",
        rel: "stylesheet",
        type: "text/css",
      },
    ],
    [
      "script",
      {
        src: "http://develop.smaryun.com/static/libs/cdn/zondyclient/npm/webclient-vue-cesium.umd.js",
      },
    ],
  ],
  plugins: [
    [
      "demo-block",
      {
        settings: {
          jsLibs: [],
          cssLibs: [],
          jsfiddle: true, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
  ],
};
