# 安装

### 方式一：npm 安装

```bash
# npm或yarn安装 webclient-vue-mapboxgl-example
npm install --save @mapgis/webclient-vue-mapboxgl-example
# 或者
yarn add @mapgis/webclient-vue-mapboxgl-example
```

### 方式二：yarn link`特殊情况下：需要使用组件最新的功能时`

1.下载最新的 Webclient-Vue-Frame 项目。

2.项目下载完成后，分别有：cesium、mapboxgl 工程，执行对应文件中的 package.json 的 yarn/npm install 安装项目依赖。

3.cd 进入 mapboxgl 工程目录下，执行

```bash
yarn link
```

4.再 cd 进入自己的项目工程，执行

```bash
yarn link @mapgis/webclient-vue-mapboxgl-example
```

5.同理，leaflet 工程也执行 3、4 步骤来链接到自己项目中

6.在项目中 main.js 中全局引入组件和样式文件即可使用

```js
import "@mapgis/webclient-vue-mapboxgl-example/dist-libs/webclient-vue-mapboxgl-example.css";

import Mapgis3d from "@mapgis/webclient-vue-mapboxgl-example";

Vue.use(Mapgis3d);
```

7.不想使用 link @mapgis/webclient-vue-mapboxgl-example 时可以执行

```bash
yarn unlink @mapgis/webclient-vue-mapboxgl-example
```

解除链接。
