import Markdown from "../../mapboxgl/docs/api/control/scalecontrol.md";

export default {
  title: "二维/控件/比例尺",
  argTypes: {
    position: "bottom-left",
    maxWidth: 300,
    unit: "metric",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      mapOptions: {
        crs: "EPSG:4326", //经纬度一定要设置crs参数
        maxBounds: [
          [-180, -90],
          [180, 90],
        ],
        zoom: 7.5,
        center: [116.39, 40.2],
      },
    };
  },
  template: `
    <mapgis-web-map v-bind="{...mapOptions}" style="height:95vh">
        <mapgis-rastertile-layer layerId="tdt" url="http://t0.tianditu.com/DataServer?T=vec_c&L={z}&Y={y}&X={x}&tk=9c157e9585486c02edf817d2ecbc7752" />
        <mapgis-scale v-bind="$props" />
    </mapgis-web-map>
    `,
});

export const 比例尺 = Template.bind({});
比例尺.args = {
  position: "bottom-left",
  maxWidth: 300,
  unit: "metric",
};
比例尺.parameters = {
  docs: {
    description: {
      component: Markdown,
    },
  },
};
