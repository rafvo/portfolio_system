<template>
  <div>
    <TextField
      :append-icon="appendIcon"
      :default-value="defaultValue"
      :default-rules="defaultRules"
      :field-readonly="fieldReadonly"
      :autofocus="autofocus"
      :id="id"
      :label="label"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :rules="rules"
      :reset="reset"
      :show-label="showLabel"
      :text-readonly="textReadonly"
      :vid="vid"
      :single-line="singleLine"
      :hide-details="hideDetails"
      :outlined="outlined"
      @input="emitInput"
    />
  </div>
</template>

<script>
import TextField from "./TextField.vue";

export default {
  components: { TextField },
  props: {
    appendIcon: {
      type: String,
      default: "mdi-magnify",
      required: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
      required: false,
    },
    defaultValue: {
      type: [Number, String],
      default: "",
      required: false,
    },
    defaultRules: {
      type: String,
      default: "email",
      required: false,
    },
    fieldReadonly: {
      type: Boolean,
      default: false,
      required: false,
    },
    singleLine: {
      type: Boolean,
      default: false,
      required: false,
    },
    hideDetails: {
      type: Boolean,
      default: false,
      required: false,
    },
    id: {
      type: String,
      default: null,
      required: false,
    },
    label: {
      type: String,
      default: "Pesquisar",
      required: false,
    },
    name: {
      type: String,
      default: null,
      required: false,
    },
    placeholder: {
      type: String,
      default: "",
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
      required: false,
    },
    rules: {
      type: String,
      default: "",
      required: false,
    },
    reset: {
      type: Boolean,
      default: false,
      required: false,
    },
    showLabel: {
      type: Boolean,
      default: false,
      required: false,
    },
    textReadonly: {
      type: Boolean,
      default: false,
      required: false,
    },
    vid: {
      type: String,
      default: null,
      required: false,
    },
    outlined: {
       type: Boolean,
      default: false,
      required: false,
    }
  },
  methods: {
    emitInput(payload) {
      this.$emit("input", payload);
    },
  },
};
</script>

<style scoped>
</style>