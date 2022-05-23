<template>
  <div :class="{ 'inline-block': isInlineButton }">
    <ButtonCircularProgressIndicator v-if="buttonModalLoading" />
    <template v-else>
      <v-dialog
        v-model="dialog"
        :persistent="persistent"
        :scrollable="scrollable"
        :fullscreen="fullscreen"
        :max-width="maxWidth"
      >
        <template v-if="isButtonModal" v-slot:activator="{ on, attrs }">
          <v-btn
            :color="buttonColor"
            :outlined="isOutlinedButton"
            dark
            v-bind="attrs"
            v-on="on"
          >
            {{ buttonLabel }}
          </v-btn>
        </template>
        <v-card>
          <slot name="header">
            <v-toolbar v-if="showHeader">
              <v-toolbar-title class="pl-5">
                {{ modalLabel }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-row align="center" no-gutters>
                  <v-col>
                    <slot name="header-actions">
                      <v-btn icon @click="dialog = false">
                        <i class="fa fa-times"></i>
                      </v-btn>
                    </slot>
                  </v-col>
                </v-row>
              </v-toolbar-items>
            </v-toolbar>
          </slot>
          <CircularProgressIndicator v-if="bodyModalLoading" />
          <template v-else>
            <v-card-text :style="modalHeight">
              <slot></slot>
            </v-card-text>
            <v-card-actions v-if="showFooter"
              ><slot name="footer"></slot
            ></v-card-actions>
          </template>
        </v-card>
      </v-dialog>
    </template>
  </div>
</template>

<script>
import ButtonCircularProgressIndicator from "@/components/loaders/ButtonCircularProgressIndicator.vue";
import CircularProgressIndicator from "@/components/loaders/CircularProgressIndicator.vue";

export default {
  components: {
    ButtonCircularProgressIndicator,
    CircularProgressIndicator,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
    inButtonLoading: {
      type: Boolean,
      default: false,
      required: false,
    },
    open: {
      type: Boolean,
      default: false,
      required: false,
    },
    isButtonModal: {
      type: Boolean,
      default: false,
      required: false,
    },
    isInlineButton: {
      type: Boolean,
      default: false,
      required: false,
    },
    isOutlinedButton: {
      type: Boolean,
      default: true,
      required: false,
    },
    persistent: {
      type: Boolean,
      default: true,
      required: false,
    },
    fullscreen: {
      type: Boolean,
      default: false,
      required: false,
    },
    scrollable: {
      type: Boolean,
      default: true,
      required: false,
    },
    showFooter: {
      type: Boolean,
      default: false,
      required: false,
    },
    showHeader: {
      type: Boolean,
      default: true,
      required: false,
    },
    buttonLabel: {
      type: String,
      default: "Button Label",
      required: false,
    },
    modalLabel: {
      type: String,
      default: "Modal Title",
      required: false,
    },
    buttonColor: {
      type: String,
      default: "primary",
      required: false,
    },
    maxWidth: {
      type: String,
      default: "100%",
      required: false,
    },
    height: {
      type: String,
      default: "100vh",
      required: false,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  watch: {
    open: {
      handler(newVal) {
        this.dialog = newVal;
      },
    },
    dialog(newVal) {
      if (!newVal) this.$emit("close", newVal);
      else this.$emit("open", newVal);
    },
  },
  computed: {
    buttonModalLoading() {
      return this.loading && this.inButtonLoading;
    },
    bodyModalLoading() {
      return this.loading && !this.buttonModalLoading;
    },
    modalHeight() {
      return this.scrollable ? { height: this.height } : null;
    },
  },
  created(){
    this.dialog = this.open;
  }
};
</script>

<style>
</style>
