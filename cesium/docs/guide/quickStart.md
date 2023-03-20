# 快速上手

本节将介绍如何在项目中使用，使用前请先确认是否 npm 安装，没有安装请先参考安装章节。

## 使用之前

在开始使用 webclient-vue-cesium-example 之前，请先确保开发者已经了解并掌握 vue 开发的基本操作，重点包含以下内容。

- [Vue 组件](https://cn.vuejs.org/v2/guide/components.html)
- [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

webclient-vue-cesium-example 中涵盖以下 vue 的技术点，建议先掌握其使用方法。

- prop 传递数据
- slot 建立插槽，内容分发
- events \$emit @click 事件

## 引入 webclient-vue-cesium-example

在 main.js 中全局引入组件，注意：下列两个引入缺一不可。

```js
import "@mapgis/webclient-vue-cesium-example/dist-libs/webclient-vue-cesium-example.css";

import Mapgis3d from "@mapgis/webclient-vue-cesium-example";

Vue.use(Mapgis3d);
```
