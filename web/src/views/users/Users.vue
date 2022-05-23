<template>
  <section>
    <v-row>
      <v-col cols="12" sm="12">
        <UserListB
          show-insert-button
          is-modal-form
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import UserListB from "@/components/list/UserListB.vue";

export default {
  components: {
    UserListB,
  },
};
</script>

<style scoped>
</style>
