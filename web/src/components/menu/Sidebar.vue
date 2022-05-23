<template>
  <nav class="sidebar">
    <v-navigation-drawer
      :permanent="permanent"
      :dark="dark"
      :fixed="fixed"
      :app="app"
      :floating="floating"
      :width="width"
    >
      <slot></slot>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  props: {
    permanent: {
      type: Boolean,
      default: false,
      required: false,
    },
    dark: {
      type: Boolean,
      default: false,
      required: false,
    },
    fixed: {
      type: Boolean,
      default: false,
      required: false,
    },
    app: {
      type: Boolean,
      default: false,
      required: false,
    },
    floating: {
      type: Boolean,
      default: false,
      required: false,
    },
    width: {
      type: String,
      default: '21%',
      required: false,
    }
  },
};
</script>

<style>
</style>
