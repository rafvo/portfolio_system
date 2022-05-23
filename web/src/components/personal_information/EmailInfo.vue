<template>
  <div>
    <v-icon small>email</v-icon>
    <a class="ml-2" :href="emailLink">{{ email }}</a>
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: "",
      required: false,
    },
  },
  computed: {
    emailLink() {
      return this.email ? `mailto:${this.email}` : "#";
    },
  },
};
</script>

<style>
</style>