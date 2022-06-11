<template>
  <div class="professional-experience-list">
    <v-row>
      <v-col class="mb-0 pb-0" cols="12">
        <slot name="title">
          <SectionTitle :title="title" />
        </slot>
      </v-col>
    </v-row>

    <v-row class="mb-1" v-for="(item, key) in list" :key="key">
      <v-col class="py-0" cols="12">
        <ProfessionalExperienceItem :professional-experience="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProfessionalExperience from "@/domain/model/professional_experience";
import ProfessionalExperienceItem from "@/components/item/ProfessionalExperienceItem.vue";
import SectionTitle from "@/components/typography/SectionTitle.vue";

export default {
  components: {
    ProfessionalExperienceItem,
    SectionTitle,
  },
  props: {
    list: {
      type: Array,
      default: () => [
        new ProfessionalExperience({
          id: 1,
          user_id: 1,
          occupation: "Desenvolvedor Full-Stack",
          employer: "Rebuut LTDA",
          initial_year_month: "jan 2021",
          final_year_month: "mai 2022",
          current_job: false,
          location: "São José do Rio Preto - SP",
          description:
            "Desenvolver aplicações web e mobile com a linguagem de programação PHP, banco de dados MySQL, e com as tecnologias: Flutter, Docker, Laravel e VueJS para a estruturação dos projetos.",
        }),
        new ProfessionalExperience({
          id: 2,
          user_id: 1,
          occupation: "Estagiário em Desenvolvimento Web",
          employer: "Centro Médico Rio Preto LTDA",
          initial_year_month: "ago 2019",
          final_year_month: "dez 2020",
          current_job: false,
          location: "São José do Rio Preto - SP",
          description:
            "Desenvolver aplicações web com a linguagem de programação PHP, banco de dados PL/SQL da Oracle, Bootstrap e Jquery como tecnologias de desenvolvimento web, além do atendimento telefônico ao usuário e de solicitações à T.I.",
        }),
        // new ProfessionalExperience({
        //   id: 3,
        //   user_id: 1,
        //   occupation: "Desenhista Projetista",
        //   employer: "Astec Engenharia LTDA",
        //   initial_year_month: "abr 2014",
        //   final_year_month: "mar 2016",
        //   current_job: false,
        //   location: "São José do Rio Preto - SP",
        //   description:
        //     "Manutenção, elaboração e interpretação de desenhos técnicos em CAD, conforme as normas técnicas, nos projetos da área de engenharia de transportes no setor de sinalização de rodovias.",
        // }),
      ],
      required: false,
    },
  },
  computed: {
    existList() {
      return this.list;
    },
    listLength() {
      return this.existList ? this.list.length : 0;
    },
    pluralList() {
      return this.listLength > 1;
    },
    title() {
      return this.pluralList
        ? "Experiências Profissionais"
        : "Experiência Profissional";
    },
  },
};
</script>

<style>
</style>