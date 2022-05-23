<template>
  <div>
    <v-icon small>work</v-icon>
    <span class="ml-2">{{ occupation }}</span>
  </div>
</template>

<script>
export default {
  props: {
    occupation: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>

<style>
</style>