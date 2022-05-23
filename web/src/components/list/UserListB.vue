<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12">
        <UserModalFormActivator
          v-if="isModalForm && showInsertButton"
          show-button-label
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Card>
          <PaginatedTable
            header-title="Lista de Usuários"
            :loading="loading"
            with-search
            with-text-mark
          >
            <!-- <template v-slot:name="{ item }">
                {{ item.name }} teste
              </template> -->
            <!-- <template v-slot:extra:name>
                teste
              </template> -->
          </PaginatedTable>
        </Card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Utils } from "@/util/utils";
import UserFilter from "@/domain/filters/users";
import SkeletonLoader from "@/components/loaders/SkeletonLoader.vue";
import Card from "@/components/card/Card.vue";
import UserModalForm from "@/components/modal/UserModalForm.vue";
import UserModalFormActivator from "@/components/modal/UserModalFormActivator.vue";
import ConfirmDialog from "@/components/dialog/ConfirmDialog.vue";
import PaginatedTable from "@/components/tables/PaginatedTable.vue";

export default {
  components: {
    SkeletonLoader,
    Card,
    UserModalForm,
    UserModalFormActivator,
    ConfirmDialog,
    PaginatedTable,
  },
  props: {
    userFilter: {
      type: Object,
      default: () => new UserFilter(),
      required: false,
    },
    showFilters: {
      type: Boolean,
      default: false,
      required: false,
    },
    showInsertButton: {
      type: Boolean,
      default: false,
      required: false,
    },
    isModalForm: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      search: "",
      loading: false,
    };
  },
  computed: {
    cols() {
      return [
        {
          text: "Nome",
          align: "start",
          filterable: true,
          value: "name",
        },
        { text: "E-mail", value: "email" },
        { text: "Telefone", value: "phone" },
        { text: "Ações", value: "actions", filterable: false, sortable: false },
      ];
    },
    existUsers() {
      return Boolean(Utils.exist(this.users));
    },
    users() {
      return Object.values(this.$store.state.users.all).sort((a, b) => {
        return b.id - a.id;
      });
    },
  },
  methods: {
    getAll() {
      this.loading = true;
      this.$store
        .dispatch("users/getAll", this.userFilter)
        .then((data) => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    remove(id) {
      if (!id) return;

      this.loading = true;
      this.$store
        .dispatch("users/remove", id)
        .then((data) => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
  created() {
    //this.getAll();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>

<style>
</style>