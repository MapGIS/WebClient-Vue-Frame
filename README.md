## Webclient-vue-Frame

Webclient-vue 脚手架，用于 Cesium、Leaflet 的扩展组件开发。

### 1、代码结构

```text
├─.storybook                     -- storybook配置文件
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
│          ├─Analysis
│          ├─UI
│          │  └─Controls
│          │      └─OutputImage
│          └─Util                         
├─leaflet                        -- Leaflet组件库的代码结构
│  ├─docs                        -- Leaflet组件库的Vuepress文档说明
│  ├─node_modules
│  ├─src                         -- Leaflet组件库源代码
├─node_modules
├─stories                        -- storybook示例源代码
    ├─assets                     -- storybook示例资源
    ├─data                       -- storybook示例数据
    ├─mapgis2d                   -- Leaflet(二维)组件示例
    ├─mapgis3d                   -- Cesium(三维)组件示例
    ├─public                     
    │  └─cesium                  -- Cesium js库
    └─style
```

### 2、编译

如果您需修改源码，可自行编译打包生成 Cesium、Leaflet 的地图组件库、API 文档。

以`Cesium`为例，首先进入对应的目录下

0. 进入目录

   ```sh
   cd /path/to/cesium
   ```

1. 安装依赖

   ```sh
   npm install
   # 或者
   yarn
   ```

2. 地图组件编译

   ```sh
   npm run build           #编译 将源代码编译成Vue的地图组件
   ```

3. API 文档生成
   ```sh
   npm run docs:serve      #服务实时预览-生成API参考文档
   npm run docs:build      #编译打包预览-生成API参考文档
   ```

### 3、本地调试

以`Cesium`为例，首先进入对应的目录下，假设用户存在 2 个工程：1.WebClient-Vue-Frame 2.项目工程 MyProject

1. 进入对应的目录
   ```sh
   cd /path/to/WebClient-Vue/cesium
   ```
2. 执行本地链接操作

   ```sh
   npm link
   或者
   yarn link
   ```

3. 进入自己的项目工程
   ```sh
   cd /path/to/MyProject
   ```
4. 指定连接的 WebClient-Vue 库
   ```sh
   npm link @mapgis/webclient-vue-cesium-example
   ```
