# Webclient-Vue-Cesium-example

## 简介

webclient-vue-cesium-example 是基于 Cesium 的 vue 扩展组件开发示例库，介绍如何构建 Web 三维 GIS 应用的常用 vue 扩展组件。

### 1、代码结构

```text
├─cesium                         -- Cesium组件库的代码结构
│  ├─docs                        -- Cesium组件库的Vuepress文档说明
│  │  ├─.vuepress                -- Cesium组件库的配置文件
│  │  ├─api                      -- Cesium组件库的API详细说明文档
│  │  ├─guide                    -- Cesium组件库的介绍、安装部署及模块说明
│  │  └─version                  -- Cesium组件库的版本更新说明
│  ├─node_modules
│  ├─src                         -- Cesium组件库源代码
│      ├─assets
│      │  └─image
│      └─components              -- Cesium组件
```

## 安装

```bash
npm install --save @mapgis/webclient-vue-cesium-example
# 或者
yarn add @mapgis/webclient-vue-cesium-example
```

在 main.js 中全局引入组件

```js
import "@mapgis/webclient-vue-cesium/dist-libs/webclient-vue-cesium-example.css";

import Mapgis3d from "@mapgis/webclient-vue-cesium-example";

Vue.use(Mapgis3d);
```
