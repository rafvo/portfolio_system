<template>
  <div>
    <ModalActivator
      v-model="Dialog"
      :icon-button-type="iconButtonType"
      :icon="icon"
      :icon-color="iconColor"
      :inline-button="inlineButton"
      :label="label"
      :open="dialog"
      :show-button-label="showButtonLabel"
      :show-icon-in-button="showIconInButton"
      :small-icon="smallIcon"
    >
      <template slot-scope="{ activeModal }">
        <UserModalForm
          v-if="activeModal"
          v-model="Dialog"
          :open="dialog"
          :user-id="userId"
          modal-form
          show-insert-label
          show-insert-icon-label
          show-alert-error
        />
      </template>
    </ModalActivator>
  </div>
</template>

<script>
import { Utils } from "@/util/utils";
import ModalActivator from "./ModalActivator.vue";
import UserModalForm from "./UserModalForm.vue";

export default {
  name: "UserModalFormActivator",
  components: {
    ModalActivator,
    UserModalForm,
  },
  props: {
    insertButtonLabel: {
      type: String,
      default: "Novo",
      required: false,
    },
    insertIcon: {
      type: String,
      default: "",
      required: false,
    },
    updateButtonLabel: {
      type: String,
      default: "Editar",
      required: false,
    },
    updateIcon: {
      type: String,
      default: "mdi-pencil",
      required: false,
    },
    userId: {
      type: [String, Number],
      default: null,
      required: false,
    },

    /*modal activator props*/
    iconButtonType: {
      type: Boolean,
      default: false,
      required: false,
    },
    iconColor: {
      type: String,
      default: "",
      required: false,
    },
    inlineButton: {
      type: Boolean,
      default: false,
      required: false,
    },
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
        if (this.isRequest) this.getId();
        this.dialog = isOpen;
        this.emitInput();
      },
    },
    isEditing() {
      return Boolean(Utils.exist(this.userId));
    },
    isRequest() {
      return Boolean(this.isEditing && !this.dialog);
    },
    label() {
      return this.isEditing ? this.editingButtonLabel : this.insertButtonLabel;
    },
    icon() {
      return this.isEditing ? this.updateIcon : this.insertIcon;
    },
  },
  methods: {
    getId() {
      this.loading = true;
      this.$store
        .dispatch("users/getId", this.userId)
        .then((data) => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    emitInput() {
      this.$emit("input", this.dialog);
    },
  },
};
</script>

<!-- <template v-if="iconButtonType">
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
          v-if="showButtonIcon"
          small
          :color="iconColor"
          :class="{ 'mr-2': showButtonLabel }"
          >{{ icon }}</v-icon
        >
        <span v-if="showButtonLabel">{{ label }}</span>
      </v-btn>
    </template>

    <slot v-if="activeModal" :isOpen="dialog" :userId="userId">
      <UserModalForm
        v-model="Dialog"
        :open="dialog"
        :user-id="userId"
        modal-form
        show-insert-label
        show-insert-icon-label
        show-alert-error
      />
    </slot> -->