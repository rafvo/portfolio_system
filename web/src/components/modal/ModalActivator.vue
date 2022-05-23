<template>
  <div :class="{ 'inline-block': inlineButton }">
    <template v-if="iconButtonType">
      <v-icon
        :color="iconColor"
        :small="smallIcon"
        class="mr-2"
        @click="activate()"
        >{{ icon }}</v-icon
      >
    </template>
    <template v-else>
      <v-btn color="primary" outlined @click="activate()">
        <v-icon
          v-if="showIconInButton"
          :color="iconColor"
          :small="smallIcon"
          :class="{ 'mr-2': showButtonLabel }"
          >{{ icon }}</v-icon
        >
        <span v-if="showButtonLabel">{{ label }}</span>
      </v-btn>
    </template>

    <slot v-if="activeModal" :activeModal="activeModal">
      <Modal v-model="Dialog" :open="dialog" />
    </slot>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
  },
  /*ordenaçao: 1ª letra asc*/
  props: {
    /*define se o botão é um ícone*/
    iconButtonType: {
      type: Boolean,
      default: false,
      required: false,
    },
    icon: {
      type: String,
      default: "",
      required: false,
    },
    iconColor: {
      type: String,
      default: "",
      required: false,
    },
    label: {
      type: String,
      default: "{Ativar}",
      required: false,
    },
    /*define se o botão ficará em linha (row)*/
    inlineButton: {
      type: Boolean,
      default: false,
      required: false,
    },
    /*define se o modal será aberto por padrão*/
    open: {
      type: Boolean,
      default: false,
      required: false,
    },
    showButtonLabel: {
      type: Boolean,
      default: false,
      required: false,
    },
    showIconInButton: {
      type: Boolean,
      default: false,
      required: false,
    },
    smallIcon: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      dialog: false,
      loading: false,
      activeKey: null,
    };
  },
  computed: {
    Dialog: {
      get() {
        return this.dialog;
      },
      set(isOpen) {
        if (!isOpen) this.activeKey = null;
        this.dialog = isOpen;
        this.emitInput();
      },
    },
    /*define se o html do modal será mostrado*/
    activeModal() {
      return Boolean(this.activeKey == this.uniqueKey);
    },
    uniqueKey() {
      return this._uid;
    },
  },
  watch: {
    open(isOpen) {
      this.dialog = isOpen;
      if (!isOpen) this.activeKey = null;
    },
  },
  methods: {
    activate() {
      this.Dialog = true;
      this.activeKey = this.uniqueKey;
    },
    inactivate() {
      this.Dialog = false;
      this.activeKey = null;
    },
    emitInput() {
      this.$emit("input", this.dialog);
    },
  },
  created() {
    this.dialog = this.open;
    if (!this.open) this.activeKey = null;
  },
};
</script>