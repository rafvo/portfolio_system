<template>
  <h3 class="font-weight-light">{{ title }}</h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "{Título}",
      required: false,
    },
  },
};
</script>

<style>
</style>