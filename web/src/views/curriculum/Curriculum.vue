<template>
  <div>
    <CurriculumPrototype1 ref="curriculumPrototype1" />
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
import CurriculumPrototype1 from "@/components/prototypes/CurriculumPrototype1.vue";

export default {
  components: {
    CurriculumPrototype1,
  },
  methods: {
    prototypeHTML() {
      const contentHtml = this.$refs.curriculumPrototype1.$el;
      return contentHtml;
    },
    pdfGenerate() {
      const doc = new jsPDF();
      const html = this.prototypeHTML();
      doc.html(html);
      doc.save("sample.pdf");
    },
  },
  //mounted() {
  // Default export is a4 paper, portrait, using millimeters for units
  //const doc = new jsPDF();
  //doc.text("Hello world!", 10, 10);
  //doc.save("a4.pdf");
  //},
};
</script>

<style>
</style>