### 新建三维组件和对应的API文档

#### 新建组件

1. 组件内部使用独立的 VUE 注入机制[provide/inject](https://vuejs.org/v2/api/#provide-inject)

   Webclient-Vue-Cesium-Example 是针对原始的 cesium 脚本的封装。

   一个插件组件本质上还是通过 Vue 组件的方式，核心思想是通过获取 根组件`mapgis-web-scene`中的 `Cesium` 和 `vueCesium` 以及 `viewer` 对象来进行对应的拓展功能。

   当`mapgis-web-scene`组件创建的时候，必须等到地图初始化加载完毕后，然后才会渲染子组件 同时通过 provide 的方式提供下面三个对象:

   > a. `Cesium` @mapgis/cesium
   >
   > b. `vueCesium` cesium 对象的存储管理器
   >
   > c. `viewer` mapgis Cesium.viewer 对象

只要是注入了上面的属性,你就可以添加地图要素或者执行对应的地图方法。 注入方法如下：

```js
inject: ["Cesium", "vueCesium", "viewer"];
```

封装插件的核心思想是： 保持 Vue 本身的声明规范，这样做可以容易封装额外的控制组件和图层组件。同时也容易封装第三方插件，适应不同的业务需求。

2. 新建组件

   以在 Webclient-Vue-Cesium-Example 中新建`洪水淹没`组件为例，展示如何新建组件。

   a. 在 cesium/src/components 中新建 Flood.vue 文件，并且在 Flood.vue 文件注入`Cesium`, `vueCesium`,`viewer`。

   ![components6.png](D:\3onemapantd\frame\webclient-vue-frame\docs\images\component6.png)

   b. 在 cesium/src/component.js 中导出组件。编译后，在其他项目中 use 后，即可直接使用新建的组件。

   ![components7.png](D:\3onemapantd\frame\webclient-vue-frame\docs\images\component7.png)

#### 编写对应的API文档

1. 在cesium/docs/api中新建analysis文件夹，在新建文件夹里新建flood.md。API文档主要包含属性，方法，事件，和示例。

   ![API-1.png](D:\3onemapantd\frame\webclient-vue-frame\docs\images\API-1.png)

2. 在cesium/docs/.vuepress/config.js中，将新增的scalecontrol.md引入。

   ![API-1-1.png](D:\3onemapantd\frame\webclient-vue-frame\docs\images\API-1-1.png)

   3. 在storybook示例中可预览新增的API文档。

      ![API-2-1.png](D:\3onemapantd\frame\webclient-vue-frame\docs\images\API-2-1.png)