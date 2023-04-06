import Vue from "vue";
import axios from "axios";

import MapgisCesiumExampleComponents from "../cesium/src/main";

import MapgisMapboxglExampleComponents from "../mapboxgl/src/main";

import "@mapgis/webclient-vue-ui/dist-libs/webclient-vue-ui.css";
import MapgisUIComponents from "@mapgis/webclient-vue-ui";

import "@mapgis/webclient-vue-cesium/dist-libs/webclient-vue-cesium.css";
import MapgisCesiumComponents from "@mapgis/webclient-vue-cesium";

import "@mapgis/webclient-vue-mapboxgl/dist-libs/webclient-vue-mapboxgl.css";
import MapgisMapboxglComponents from "@mapgis/webclient-vue-mapboxgl";

Vue.use(MapgisUIComponents, {});
Vue.use(MapgisCesiumComponents, {});
Vue.use(MapgisMapboxglComponents, {});
Vue.use(MapgisCesiumExampleComponents, {});

window.webclient = {
  ip: "localhost",
  port: "8895",
  igsIp: "192.168.82.89",
  igsPort: "8089",
};

window.VueCesiumLibPath = `http://${window.webclient.ip}:${window.webclient.port}/cesium/Cesium.js`;

window.VueCesiumPluginPath = `http://${window.webclient.ip}:${window.webclient.port}/cesium/webclient-cesium-plugin.min.js`;

async function initConfig() {
  const res = await axios.get("./config.json");
  const data = res.data;
  Object.keys(data).forEach((key) => {
    window[key] = data[key];
  });
  console.log("当前站点的环境配置是:", data);
}

initConfig();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: "canvas", // docs canvas
};
