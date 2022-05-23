<template>
  <Modal
    :open="dialog"
    :modal-label="modalLabel"
    :loading="loading"
    fullscreen
    @close="Dialog = false"
  >
    <template v-if="dialog">
      <slot :isOpen="dialog" :userId="userId">
        <UserForm
          :user-id="userId"
          modal-form
          show-insert-label
          show-insert-icon-label
          show-alert-error
          @insert="Dialog = false"
        />
      </slot>
    </template>
  </Modal>
</template>

<script>
import Modal from "./Modal";
import UserForm from "@/components/form/UserForm.vue";

export default {
  name: "UserModalForm",
  components: {
    Modal,
    UserForm,
  },
  /*ordenaçao: 1ª letra asc*/
  props: {
    insertModalLabel: {
      type: String,
      default: "Novo Usuário",
      required: false,
    },
    loading: {
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
    userId: {
      type: [String, Number],
      default: null,
      required: false,
    },
    updateModalLabel: {
      type: String,
      default: "Alterar Usuário",
      required: false,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    Dialog: {
      get() {
        return this.dialog;
      },
      set(isOpen) {
        this.dialog = isOpen;
        this.emitInput();
      },
    },
    modalLabel() {
      return this.userId ? this.updateModalLabel : this.insertModalLabel;
    },
  },
  watch: {
    open() {
      this.dialog = this.open;
    },
  },
  methods: {
    emitInput() {
      this.$emit("input", this.dialog);
    },
  },
  created() {
    this.dialog = this.open;
  },
};
</script>