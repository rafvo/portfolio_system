<template>
  <div class="custom-row d-flex flex-direction-row" :style="cssVars">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    alignItems: {
      type: String,
      default: "center",
      required: false,
    },
    spaceBetween: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    cssVars() {
      return {
        "--custom-row-align-items": this.alignItems
          ? this.alignItems
          : "center",
        "--custom-row-justify-content": this.spaceBetween
          ? "space-between"
          : "unset",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-row {
  align-items: var(--custom-row-align-items) !important;
  justify-content: var(--custom-row-justify-content) !important;
}
</style>