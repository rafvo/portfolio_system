<template>
  <v-row class="fill-height" :align="align" :justify="justify">
    <v-col :align="align">
      <v-progress-circular
        :color="color"
        :size="size"
        :width="width"
        indeterminate
      ></v-progress-circular>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
      required: false,
    },
    size: {
      type: [String, Number],
      default: 50,
      required: false,
    },
    width: {
      type: [String, Number],
      default: 5,
      required: false,
    },
    align: {
      type: String,
      default: "center",
      required: false,
    },
    justify: {
      type: String,
      default: "center",
      required: false,
    },
  },
};
</script>

<style>
</style>