<template>
  <div>
    <PdfGenerator ref="pdfGenerator">
      <template slot="pdf-content">
        <Sidebar permanent dark fixed>
          <PersonalInfo />
        </Sidebar>

        <MainInformation />
        <ProfessionalExperienceList class="mt-2" />
        <AcademicEducationList class="mt-2" />
        <ComplementaryCoursesList class="mt-2" />
        <RankedCompetencesList class="mt-5" />
      </template>
    </PdfGenerator>
  </div>
</template>

<script>
import User from "@/domain/model/users";
import PdfGenerator from "@/components/pdf/PdfGenerator.vue";
import Sidebar from "@/components/menu/Sidebar.vue";
import PersonalInfo from "@/components/personal_information/PersonalInfo.vue";
import ProfessionalExperienceList from "@/components/list/ProfessionalExperienceList.vue";
import AcademicEducationList from "@/components/list/AcademicEducationList.vue";
import ComplementaryCoursesList from "@/components/list/ComplementaryCoursesList.vue";
import RankedCompetencesList from "@/components/list/RankedCompetencesList.vue";
import MainInformation from "@/components/personal_information/MainInformation.vue";

export default {
  components: {
    PdfGenerator,
    Sidebar,
    PersonalInfo,
    ProfessionalExperienceList,
    AcademicEducationList,
    ComplementaryCoursesList,
    RankedCompetencesList,
    MainInformation,
  },
  props: {
    user: {
      type: Object,
      default: () => new User(),
      required: false,
    },
  },
  methods: {},
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

<!-- 
    VueHtml2pdf,
import VueHtml2pdf from "vue-html2pdf";
    // generateReport() {
    //   this.$refs.html2Pdf.generatePdf();
    // },

     generateReport() {
      this.$refs.pdfGenerator.pdfGenerate();
    },

<VueHtml2pdf
      :show-layout="true"
      :float-layout="false"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1400"
      filename="hee hee"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="landscape"
      pdf-content-width="800px"
      @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <Sidebar permanent dark fixed app floating width="21%">
          <PersonalInfo />
        </Sidebar>

        <h2>{{ user.name }}</h2>
        <ProfessionalExperienceList />
        <AcademicEducationList class="mt-3" />
        <ComplementaryCoursesList class="mt-7" />
        <RankedCompetencesList class="mt-7" />
      </section>
    </VueHtml2pdf> -->