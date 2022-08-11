<template>
  <div class="map-box">
    <div class="map">
      <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="cords"
        :options="mapOptions"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="cords">
          <l-tooltip>our ubication</l-tooltip>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Map",
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
  },
  data() {
    return {
      zoom: 16,
      iconWidth: 25,
      iconHeight: 40,
      cords: [20.677089, -103.3479139],
      mapOptions: {
        scrollWheelZoom: false,
      },
    };
  },
};
</script>

<style scoped>
.map-box {
  z-index: 0;
}
.map {
  height: 400px;
  width: 100%;
}
</style>