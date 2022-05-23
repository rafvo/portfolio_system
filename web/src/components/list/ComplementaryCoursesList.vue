<template>
  <div class="academic-education-list">
    <v-row>
      <v-col class="mb-0 pb-0" cols="12">
        <slot name="title">
          <SectionTitle :title="title" />
        </slot>
      </v-col>
    </v-row>

    <v-row v-for="(item, key) in list" :key="key">
      <v-col class="pb-0" cols="12">
        <ComplementaryCoursesItem :complementary-courses="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ComplementaryCourses from "@/domain/model/complementary_courses";
import ComplementaryCoursesItem from "@/components/item/ComplementaryCoursesItem.vue";
import SectionTitle from "@/components/typography/SectionTitle.vue";

export default {
  components: {
    SectionTitle,
    ComplementaryCoursesItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [
        new ComplementaryCourses({
          id: 1,
          user_id: 1,
          school: "Udemy",
          course_name: "Vuejs 2 - O Guia Completo com Vue Router e Vuex",
          initial_year_month: null,
          final_year_month: "dez 2021",
          is_completed: true,
          description: "",
        }),
        new ComplementaryCourses({
          id: 2,
          user_id: 1,
          school: "Udemy",
          course_name: "Introdução ao Laravel",
          initial_year_month: null,
          final_year_month: "mai 2021",
          is_completed: true,
          description: "",
        }),
        new ComplementaryCourses({
          id: 3,
          user_id: 1,
          school: "Udemy",
          course_name: "Loja Virtual Completa - Android e IOS Com Flutter",
          initial_year_month: null,
          final_year_month: "nov 2020",
          is_completed: true,
          description: "",
        }),
        new ComplementaryCourses({
          id: 4,
          user_id: 1,
          school: "Senac",
          course_name: "Programador de Dispositivos Móveis",
          initial_year_month: null,
          final_year_month: "dez 2017",
          is_completed: true,
          description: "",
        }),
        new ComplementaryCourses({
          id: 5,
          user_id: 1,
          school: "Senac",
          course_name: "HTML5 e CSS3 - Criação de Websites",
          initial_year_month: null,
          final_year_month: "jun 2017",
          is_completed: true,
          description: "",
        }),
      ],
      required: false,
    },
    title: {
      type: String,
      default: "Cursos Complementares",
      required: false,
    },
  },
  computed: {
    existList() {
      return this.list;
    },
  },
};
</script>

<style>
</style>