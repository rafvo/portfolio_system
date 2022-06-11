<template>
  <div>
    <h2>{{ user.name }}</h2>
    <span>{{ user.occupation }}</span>
  </div>
</template>

<script>
import User from "@/domain/model/users";

export default {
  props: {
    user: {
      type: Object,
      default: () => new User(),
      required: false,
    },
  },
  created() {
    this.user.create(
      User.fromJson({
        name: "Rafael Valério de Oliveira Ricardi",
        occupation: "Desenvolvedor Full-Stack Júnior",
      })
    );
  },
};
</script>

<style>
</style>