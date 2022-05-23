<template>
  <v-row class="fill-height" :align="align" :justify="justify">
    <v-col :align="align">
      <v-btn :color="buttonColor" :outlined="isOutlinedButton" disabled>
        <CircularProgressIndicator
          :color="loaderColor"
          :size="size"
          :width="width"
        />
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import CircularProgressIndicator from "@/components/loaders/CircularProgressIndicator.vue";

export default {
  components: {
    CircularProgressIndicator,
  },
  props: {
    buttonColor: {
      type: String,
      default: "primary",
      required: false,
    },
    loaderColor: {
      type: String,
      default: "primary",
      required: false,
    },
    isOutlinedButton: {
      type: Boolean,
      default: false,
      required: false,
    },
    size: {
      type: [String, Number],
      default: 30,
      required: false,
    },
    width: {
      type: [String, Number],
      default: 3,
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