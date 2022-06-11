<template>
  <div class="ranked-competences-list">
    <v-row>
      <v-col class="py-0 my-0" cols="12">
        <slot name="title">
          <SectionTitle :title="title" />
        </slot>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        class="py-0"
        cols="4"
        v-for="(item, key) in list"
        :key="key"
      >
        <RankedCompetencesItem :competence="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Competence from "@/domain/model/competences";
import SectionTitle from "@/components/typography/SectionTitle.vue";
import RankedCompetencesItem from "@/components/item/RankedCompetencesItem.vue";

export default {
  components: {
    SectionTitle,
    RankedCompetencesItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [
        new Competence({
          id: 9,
          user_id: 1,
          title: "POO",
          ranked_value: 5,
          ranked_per: 100,
          description: "",
        }),
        new Competence({
          id: 9,
          user_id: 1,
          title: "Arquitetura MVC",
          ranked_value: 5,
          ranked_per: 100,
          description: "",
        }),
        new Competence({
          id: 19,
          user_id: 1,
          title: "HTML",
          ranked_value: 5,
          ranked_per: 100,
          description: "",
        }),
        new Competence({
          id: 21,
          user_id: 1,
          title: "CSS",
          ranked_value: 4.5,
          ranked_per: 90,
          description: "",
        }),
        new Competence({
          id: 10,
          user_id: 1,
          title: "Vuetify",
          ranked_value: 4.5,
          ranked_per: 90,
          description: "",
        }),
        new Competence({
          id: 24,
          user_id: 1,
          title: "Bootstrap",
          ranked_value: 4.5,
          ranked_per: 90,
          description: "",
        }),
        
        new Competence({
          id: 8,
          user_id: 1,
          title: "VueJs",
          ranked_value: 4.5,
          ranked_per: 90,
          description: "",
        }),
        new Competence({
          id: 9,
          user_id: 1,
          title: "Vuex",
          ranked_value: 4,
          ranked_per: 80,
          description: "",
        }),
        new Competence({
          id: 1,
          user_id: 1,
          title: "Laravel",
          ranked_value: 4,
          ranked_per: 80,
          description: "",
        }),
        new Competence({
          id: 13,
          user_id: 1,
          title: "MySQL",
          ranked_value: 4,
          ranked_per: 80,
          description: "",
        }),
        new Competence({
          id: 2,
          user_id: 1,
          title: "Flutter",
          ranked_value: 4,
          ranked_per: 80,
          description: "",
        }),
        new Competence({
          id: 22,
          user_id: 1,
          title: "Javascript",
          ranked_value: 4,
          ranked_per: 80,
          description: "",
        }),
        new Competence({
          id: 23,
          user_id: 1,
          title: "Jquery",
          ranked_value: 4,
          ranked_per: 80,
          description: "",
        }),
        // new Competence({
        //   id: 9,
        //   user_id: 1,
        //   title: "Clean Code",
        //   ranked_value: 4,
        //   ranked_per: 80,
        //   description: "",
        // }),
        new Competence({
          id: 9,
          user_id: 1,
          title: "Injeção de Dependência",
          ranked_value: 4,
          ranked_per: 80,
          description: "",
        }),
        new Competence({
          id: 25,
          user_id: 1,
          title: "Metodologia Ágil Scrum",
          ranked_value: 4,
          ranked_per: 80,
          description: "",
        }),
        new Competence({
          id: 3,
          user_id: 1,
          title: "C#",
          ranked_value: 3.5,
          ranked_per: 70,
          description: "",
        }),
        new Competence({
          id: 4,
          user_id: 1,
          title: "Asp.Net MVC",
          ranked_value: 3.5,
          ranked_per: 70,
          description: "",
        }),
        new Competence({
          id: 14,
          user_id: 1,
          title: "SQL Server",
          ranked_value: 3.5,
          ranked_per: 70,
          description: "",
        }),
        new Competence({
          id: 7,
          user_id: 1,
          title: "Provider (Flutter)",
          ranked_value: 3.5,
          ranked_per: 70,
          description: "",
        }),
        new Competence({
          id: 12,
          user_id: 1,
          title: "PL/SQL",
          ranked_value: 3,
          ranked_per: 60,
          description: "",
        }),
        new Competence({
          id: 17,
          user_id: 1,
          title: "Git",
          ranked_value: 3.5,
          ranked_per: 70,
          description: "",
        }),
        // new Competence({
        //   id: 18,
        //   user_id: 1,
        //   title: "Composer",
        //   ranked_value: 3.5,
        //   ranked_per: 70,
        //   description: "",
        // }),
        new Competence({
          id: 16,
          user_id: 1,
          title: "Docker",
          ranked_value: 3,
          ranked_per: 60,
          description: "",
        }),
        new Competence({
          id: 5,
          user_id: 1,
          title: "Codeigniter",
          ranked_value: 3,
          ranked_per: 60,
          description: "",
        }),
        new Competence({
          id: 6,
          user_id: 1,
          title: "Getx (Flutter)",
          ranked_value: 3,
          ranked_per: 60,
          description: "",
        }),
        new Competence({
          id: 20,
          user_id: 1,
          title: "SASS",
          ranked_value: 3,
          ranked_per: 60,
          description: "",
        }),
        new Competence({
          id: 15,
          user_id: 1,
          title: "Firebase",
          ranked_value: 3,
          ranked_per: 60,
          description: "",
        }),
        //  new Competence({
        //   id: 26,
        //   user_id: 1,
        //   title: "Windows",
        //   ranked_value: 5,
        //   ranked_per: 100,
        //   description: "",
        // }),
        new Competence({
          id: 26,
          user_id: 1,
          title: "Linux",
          ranked_value: 3,
          ranked_per: 60,
          description: "",
        }),
         new Competence({
          id: 11,
          user_id: 1,
          title: "TypeScript",
          ranked_value: 2.5,
          ranked_per: 50,
          description: "",
        }),
        new Competence({
          id: 11,
          user_id: 1,
          title: "Nuxt (Vue.js)",
          ranked_value: 2.5,
          ranked_per: 50,
          description: "",
        }),
        new Competence({
          id: 30,
          user_id: 1,
          title: "Entity Framework Core",
          ranked_value: 2,
          ranked_per: 40,
          description: "",
        }),
        // new Competence({
        //   id: 31,
        //   user_id: 1,
        //   title: "Windows Forms",
        //   ranked_value: 2,
        //   ranked_per: 40,
        //   description: "",
        // }),
        // new Competence({
        //   id: 31,
        //   user_id: 1,
        //   title: "Pacote Office",
        //   ranked_value: 4.5,
        //   ranked_per: 90,
        //   description: "",
        // }),
      ],
      required: false,
    },
    title: {
      type: String,
      default: "Competências",
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