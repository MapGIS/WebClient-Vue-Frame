> mapgis-scale

## 属性

### `position`

- **类型:** `String`
- **可选**
- **非侦听属性**
- **默认值:** `top-right`
- **描述:** 比例尺控件的位置。选项有 'center' 、 'top' 、 'bottom' 、 'left' 、 'right' 、 'top-left' 、 'top-right' 、 'bottom-left' 和 'bottom-right' 。 如果未设置，锚点将被动态设置以确保弹出窗口位于地图容器内，并优先选择 'bottom' 。

### `maxWidth`

- **类型:** `Number`
- **可选**
- **非侦听属性**
- **默认值:** `150`
- **描述:** 比例尺控件的最大长度（以像素为单位）。

### `unit`

- **类型:** `String`
- **可选**
- **默认值:** `metric`
- **侦听属性**
- **描述:** 距离单位（ 'imperial' 、 'metric' 或 'nautical' ）。

## 方法

## 事件

## 示例

```vue
<template>
  <mapgis-web-map v-bind="{ ...mapOptions }" style="height:95vh">
    <mapgis-rastertile-layer
      layerId="tdt"
      url="http://t0.tianditu.com/DataServer?T=vec_c&L={z}&Y={y}&X={x}&tk=9c157e9585486c02edf817d2ecbc7752"
    />
    <mapgis-scale :position="position" :maxWidth="maxWidth" :unit="unit" />
  </mapgis-web-map>
</template>

<script>
export default {
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
      position: "bottom-left",
      maxWidth: 300,
      unit: "metric",
    };
  },
  methods: {},
};
</script>
```
