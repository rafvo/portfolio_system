<template>
  <div>
    <v-list>
      <v-list-item
        :style="{
          'flex-flow': 'column',
        }"
      >
        <v-list-item-content>
          <v-list-item-subtitle class="mt-2">
            <EmailInfo :email="user.email" classes="sidebar-title" />
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <PhonesList row-classes="p-0 mt-0" phone-classes="sidebar-title" />
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import User from "@/domain/model/users";
import PhonesList from "@/components/list/PhonesList.vue";
import EmailInfo from "@/components/personal_information/EmailInfo.vue";
import OccupationInfo from "@/components/personal_information/OccupationInfo.vue";

export default {
  components: {
    PhonesList,
    EmailInfo,
    OccupationInfo,
  },
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
        email: "rafaelvalerio1995@hotmail.com",
      })
    );
  },
};
</script>

<style>
</style>

          <!-- <v-list-item-title>
            <span class="text"> {{ user.name }} </span>
          </v-list-item-title>
          <v-list-item-subtitle class="mt-2">
            <OccupationInfo :occupation="user.occupation" />
          </v-list-item-subtitle> -->