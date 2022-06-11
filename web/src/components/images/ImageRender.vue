<template>
  <v-img
    class="image-render"
    :src="src"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :style="imageRenderVars"
  ></v-img>
</template>

<script>
import ImageLoader from "@/mixins/ImageLoader";
export default {
  mixins: [ImageLoader],
  props: {
    imageLoaderComputedProp: {
      type: String,
      default: "",
    },
    showInMobile: {
      type: Boolean,
      default: true,
    },
    showInTablet: {
      type: Boolean,
      default: true,
    },
    maxHeight: {
      type: String,
      default: "",
    },
    maxWidth: {
      type: String,
      default: "",
    },
  },
  computed: {
    imageRenderVars() {
      return {
        "--image-render-mobile-display": this.showInMobile ? "block" : "none",
        "--image-render-tablet-display": this.showInTablet ? "block" : "none",
      };
    },
    src() {
      return this.imageLoaderComputedProp
        ? this[this.imageLoaderComputedProp]
        : "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/variables/constants";

@media (max-width: $mobile_max_width) {
  .image-render {
    display: var(--image-render-mobile-display) !important;
  }
}
@media (min-width: $tablet_min_width) and (max-width: $tablet_max_width) {
  .image-render {
    display: var(--image-render-tablet-display) !important;
  }
}
</style>