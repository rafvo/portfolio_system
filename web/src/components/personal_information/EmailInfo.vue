<template>
  <div>
    <InlineRow>
      <ImageRender
        imageLoaderComputedProp="email64pxLight2"
        max-height="16"
        max-width="16"
      />
      <a class="text-decoration-none ml-2" :class="classes" :href="emailLink">{{
        email
      }}</a>
    </InlineRow>
  </div>
</template>

<script>
import InlineRow from "@/components/rows/InlineRow.vue";
import ImageRender from "@/components/images/ImageRender.vue";

export default {
  components: {
    InlineRow,
    ImageRender,
  },
  props: {
    email: {
      type: String,
      default: "",
      required: false,
    },
    classes: {
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

    <!-- <v-icon small>email</v-icon> -->