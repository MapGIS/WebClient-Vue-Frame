# 创建StoryBook示例

## 一、注册组件到StoryBook
这里以一个Flood组件为例，创建了一个新组件

![img.png](./images/component1.png)
<br>在cesium/src/component.js中导出新建组件，cesium/src/main.js已将install写好，只需在.storybook/preview.js引入示例组件库，然后use，即可开始写storybook示例。

![img_1.png](./images/component2.png)

## 二、创建一个StoryBook的3D组件示例

找到如下文件夹：stories/mapgis3d，新建一个storybook的3D示例CesiumAnalysisFlood.stories.js

![img_2.png](./images/component3.png)

## 三、stories的结构解析

一个storybook示例包含如下三部分：标题、示例代码、接口展示

![img_3.png](./images/component4.png)
<br>
标题结构如下：

```vue
export default {
  title: "三维/三维分析/洪水淹没",
  argTypes: {
    startHeight: {
      description: "洪水淹没水体起始高度",
      table: {
        defaultValue: { summary: "0" },
      },
      control: "number",
    },
    minHeight: {
      description: "淹没动画高度起始点",
      table: {
        defaultValue: { summary: "0" },
      },
      control: "number",
    },
    maxHeight: {
      description: "最大淹没高度，淹没动画高度终止点",
      table: {
        defaultValue: { summary: "2000" },
      },
      control: "number",
    },
    floodColor: {
      description: "洪水颜色",
      table: {
        defaultValue: { summary: "rgba(149,232,249,0.5)" },
      },
      control: "color",
    },
    floodSpeed: {
      description: "洪水淹没速度，单位 米/秒",
      table: {
        defaultValue: { summary: "80" },
      },
      control: "number",
    },
    specularIntensity: {
      description: "反射光线强度",
      table: {
        defaultValue: { summary: "2" },
      },
      control: "number",
    },
    amplitude: {
      description: "水波高度",
      table: {
        defaultValue: { summary: "10" },
      },
      control: "number",
    },
    animationSpeed: {
      description: "水纹速度",
      table: {
        defaultValue: { summary: "0.01" },
      },
      control: "number",
    },
    frequency: {
      description: "水纹频率",
      table: {
        defaultValue: { summary: "500" },
      },
      control: "number",
    },
    defaultOffsetHeight: {
      description: "默认偏移高度，只会生效一次",
      table: {
        defaultValue: { summary: "0" },
      },
      control: "number",
    },
  },
};
```

title里面每一个斜杠'/'，代表一个文件夹，最后一个斜杠'/'后面的文字就是最终的标题，这里的标题就是“洪水淹没”
<br>

示例代码结构如下：

```vue
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      url: "http://t0.tianditu.gov.cn/img_c/wmts",
      tileMatrixSet: "c",
      tilingScheme: "EPSG:4326",
      layer: "img",
      format: "tiles",
      token: {
        key: "tk",
        value: "2ddaabf906d4b5418aed0078e1657029",
      },
    };
  },
  template: `
      <mapgis-web-scene style="height: 95vh"
          v-on:load="handleLoad"
      >
      <mapgis-3d-ogc-wmts-layer
          :baseUrl="url"
          :wmtsLayer="layer"
          :tileMatrixSet="tileMatrixSet"
          :format="format"
          :tilingScheme="tilingScheme"
          :token="token"
      ></mapgis-3d-ogc-wmts-layer>
      <mapgis-3d-igs-terrain :url="terrainUrl" :requestVertexNormals="true"/>
      <mapgis-ui-card class="storybook-ui-card">
        <mapgis-3d-analysis-flood 
            :startHeight="startHeight"
            :minHeight="minHeight"
            :maxHeight="maxHeight"
            :floodColor="floodColor"
            :floodSpeed="floodSpeed"
            :specularIntensity="specularIntensity"
            :amplitude="amplitude"
            :animationSpeed="animationSpeed"
            :frequency="frequency"
            :defaultOffsetHeight="defaultOffsetHeight"/>
      </mapgis-ui-card>
      </mapgis-web-scene>
    `,
  methods: {
    handleLoad(e) {
      const { component, Cesium } = e;
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiM2Q0ZGMxYy1iZGZkLTQ4OWItODlhMy1iOWNkMDE0M2U3YWEiLCJpZCI6NTEzNSwiaWF0IjoxNjA2MjE0OTkyfQ.2aktNrUASlLsPwSFtkgKBTQLJTAnOTyjgKDRQmnafiE";
      const { viewer } = component;
      viewer.camera.setView({
        direction: {
          x: 0.4680575394156845,
          y: -0.8267033643312148,
          z: 0.31222377744109403,
        },
        position: {
          x: -674271.5790185562,
          y: 5530042.656916835,
          z: 3232882.3357299212,
        },
      });
      debugger;
      viewer.scene.globe.depthTestAgainstTerrain = true;
      viewer.scene.farToNearRatio = 1000;
      viewer.scene.logarithmicDepthBuffer = true;
      //视点跳转（经度，纬度，视角高度，方位角，俯仰角，翻滚角）
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(121, 24, 5900),
        orientation: {
          heading: Cesium.Math.toRadians(60),
          pitch: Cesium.Math.toRadians(-16),
          roll: 0,
        },
        duration: 1,
      });
    },
  },
});
```

argTypes代表对外展示的接口，所有的argTypes里面的值，都会展示到示例页面里

props、template、data。methods就是标准的vue模板语法，可完全按照vue来编写
<br>

接口展示结构如下：

```vue
export const 洪水淹没 = Template.bind({});
洪水淹没.args = {
  startHeight: 0,
  minHeight: 0,
  maxHeight: 2000,
  floodColor: "rgba(149,232,249,0.5)",
  floodSpeed: 80,
  specularIntensity: 2,
  amplitude: 10,
  animationSpeed: 0.01,
  frequency: 500,
  defaultOffsetHeight: 0,
  terrainUrl: `http://${window.webclient.igsIp}:${window.webclient.igsPort}/igs/rest/g3d/Scene:TwTerrain`,
};

洪水淹没.parameters = {
  docs: {
    description: {
      component: Markdown,
    },
  },
};
```

请注意这句话export const 洪水淹没= Template.bind({});
<br>

"洪水淹没"这个名称就是次级标题的名称

洪水淹没.args里面的值将会展示在示例页面的form表单中

![img_5.png](./images/component5.png)
<br>

在展示示例的接口展示表单中修改接口的值，可以实时更新示例，但请注意，更新走的是初始化的方法，不会触发watch函数！！！！

编写接口描述信息，这里以startHeight字段为例，展示如何编写Description以及Default的值

在export default中的argTypes添加一个startHeight字段，如下所示

```vue
export default {
  title: "三维/三维分析/洪水淹没",
  argTypes: {
    //要描述的字段
    startHeight: {
      //描述信息，即页面上Description那一栏的值
      description: "洪水淹没水体起始高度",
      table: {
        //description描述信息下的提示框，可选，添加这一项就会在描述信息文字下生成一个提示信息按钮
        //summary：提示按钮里的文字，detail：提示信息
        type:{ summary: 'tips',detail: "这里是提示" },
        //默认值，即页面上Default那一栏的值，不在这里填写，则页面上不会有默认值
        //如果加了detail,{ summary: 'null',detail: "这里是提示" },则页面会多出一个描述信息的提示框
        defaultValue: { summary: "0",detail: "这里是提示" },
      },
      //Control这里一栏里面展示数据的方式，可以是input、textArean、boolean等，可选值如下
      control: "number",
    }
  },
};
```

control的可选值：
<br>

![img_7.png](./images/img_1.png)

![img_8.png](./images/img_2.png)



## 四、完整storybook示例

```vue
import "../style/card.css";
import Markdown from "../../cesium/docs/api/analysis/Flood.md";

export default {
  title: "三维/三维分析/洪水淹没",
  argTypes: {
    startHeight: {
      description: "洪水淹没水体起始高度",
      table: {
        defaultValue: { summary: "0" },
      },
      control: "number",
    },
    minHeight: {
      description: "淹没动画高度起始点",
      table: {
        defaultValue: { summary: "0" },
      },
      control: "number",
    },
    maxHeight: {
      description: "最大淹没高度，淹没动画高度终止点",
      table: {
        defaultValue: { summary: "2000" },
      },
      control: "number",
    },
    floodColor: {
      description: "洪水颜色",
      table: {
        defaultValue: { summary: "rgba(149,232,249,0.5)" },
      },
      control: "color",
    },
    floodSpeed: {
      description: "洪水淹没速度，单位 米/秒",
      table: {
        defaultValue: { summary: "80" },
      },
      control: "number",
    },
    specularIntensity: {
      description: "反射光线强度",
      table: {
        defaultValue: { summary: "2" },
      },
      control: "number",
    },
    amplitude: {
      description: "水波高度",
      table: {
        defaultValue: { summary: "10" },
      },
      control: "number",
    },
    animationSpeed: {
      description: "水纹速度",
      table: {
        defaultValue: { summary: "0.01" },
      },
      control: "number",
    },
    frequency: {
      description: "水纹频率",
      table: {
        defaultValue: { summary: "500" },
      },
      control: "number",
    },
    defaultOffsetHeight: {
      description: "默认偏移高度，只会生效一次",
      table: {
        defaultValue: { summary: "0" },
      },
      control: "number",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      url: "http://t0.tianditu.gov.cn/img_c/wmts",
      tileMatrixSet: "c",
      tilingScheme: "EPSG:4326",
      layer: "img",
      format: "tiles",
      token: {
        key: "tk",
        value: "2ddaabf906d4b5418aed0078e1657029",
      },
    };
  },
  template: `
      <mapgis-web-scene style="height: 95vh"
          v-on:load="handleLoad"
      >
      <mapgis-3d-ogc-wmts-layer
          :baseUrl="url"
          :wmtsLayer="layer"
          :tileMatrixSet="tileMatrixSet"
          :format="format"
          :tilingScheme="tilingScheme"
          :token="token"
      ></mapgis-3d-ogc-wmts-layer>
      <mapgis-3d-igs-terrain :url="terrainUrl" :requestVertexNormals="true"/>
      <mapgis-ui-card class="storybook-ui-card">
        <mapgis-3d-analysis-flood 
            :startHeight="startHeight"
            :minHeight="minHeight"
            :maxHeight="maxHeight"
            :floodColor="floodColor"
            :floodSpeed="floodSpeed"
            :specularIntensity="specularIntensity"
            :amplitude="amplitude"
            :animationSpeed="animationSpeed"
            :frequency="frequency"
            :defaultOffsetHeight="defaultOffsetHeight"/>
      </mapgis-ui-card>
      </mapgis-web-scene>
    `,
  methods: {
    handleLoad(e) {
      const { component, Cesium } = e;
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiM2Q0ZGMxYy1iZGZkLTQ4OWItODlhMy1iOWNkMDE0M2U3YWEiLCJpZCI6NTEzNSwiaWF0IjoxNjA2MjE0OTkyfQ.2aktNrUASlLsPwSFtkgKBTQLJTAnOTyjgKDRQmnafiE";
      const { viewer } = component;
      viewer.camera.setView({
        direction: {
          x: 0.4680575394156845,
          y: -0.8267033643312148,
          z: 0.31222377744109403,
        },
        position: {
          x: -674271.5790185562,
          y: 5530042.656916835,
          z: 3232882.3357299212,
        },
      });
      debugger;
      viewer.scene.globe.depthTestAgainstTerrain = true;
      viewer.scene.farToNearRatio = 1000;
      viewer.scene.logarithmicDepthBuffer = true;
      //视点跳转（经度，纬度，视角高度，方位角，俯仰角，翻滚角）
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(121, 24, 5900),
        orientation: {
          heading: Cesium.Math.toRadians(60),
          pitch: Cesium.Math.toRadians(-16),
          roll: 0,
        },
        duration: 1,
      });
    },
  },
});

export const 洪水淹没 = Template.bind({});
洪水淹没.args = {
  startHeight: 0,
  minHeight: 0,
  maxHeight: 2000,
  floodColor: "rgba(149,232,249,0.5)",
  floodSpeed: 80,
  specularIntensity: 2,
  amplitude: 10,
  animationSpeed: 0.01,
  frequency: 500,
  defaultOffsetHeight: 0,
  terrainUrl: `http://${window.webclient.igsIp}:${window.webclient.igsPort}/igs/rest/g3d/Scene:TwTerrain`,
};

洪水淹没.parameters = {
  docs: {
    description: {
      component: Markdown,
    },
  },
};
```
