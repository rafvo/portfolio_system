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
      <v-col class="py-0" cols="12">
        <AcademicEducationItem :academic-education="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AcademicEducation from "@/domain/model/academic_education";
import AcademicEducationItem from "@/components/item/AcademicEducationItem.vue";
import SectionTitle from "@/components/typography/SectionTitle.vue";

export default {
  components: {
    SectionTitle,
    AcademicEducationItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [
        new AcademicEducation({
          id: 1,
          user_id: 1,
          school: 'Fatec Rio Preto',
          title: "Superior",
          formation_name: "Análise e Desenvolvimento de Sistemas",
          initial_year_month: "jan 2018",
          final_year_month: "dez 2020",
          is_completed: true,
          description: "",
        }),
        new AcademicEducation({
          id: 2,
          user_id: 1,
          school: 'Senac',
          title: "Técnico",
          formation_name: "Tecnico em Informática",
          initial_year_month: "jan 2018",
          final_year_month: "dez 2019",
          is_completed: true,
          description: "",
        }),
         new AcademicEducation({
          id: 2,
          user_id: 1,
          school: 'Etec Philadelpho Gouvêa Netto',
          title: "Técnico",
          formation_name: "Tecnico em Informática para Internet",
          initial_year_month: "ago 2016",
          final_year_month: "dez 2017",
          is_completed: true,
          description: "",
        }),
      ],
      required: false,
    },
    title: {
      type: String,
      default: "Formação Acadêmica",
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