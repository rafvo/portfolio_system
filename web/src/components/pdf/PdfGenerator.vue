<template>
  <div class="pdf-generator">
    <div class="fixed-top no-print">
      <v-btn
        class="pdf-generate"
        depressed
        color="primary"
        @click="pdfGenerate"
      >
        Gerar PDF
      </v-btn>
    </div>

    <slot ref="pdfContent" name="pdf-content"></slot>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";

export default {
  props: {
    pdfName: {
      type: String,
      default: "pdfGenerator",
      required: false,
    },
  },
  methods: {
    contentHTML() {
      const pdfContent = this.$refs.pdfContent.innerHTML;
      return pdfContent;
    },
    pdfHTML() {
      const html = document.documentElement.innerHTML;
      return html;
    },
    pdfGenerate() {
      //var doc = new jsPDF();
      const html = this.pdfHTML();

      let win = window.open("", "", "height=1100,width=1200");
      win.document.write(`${html}`);
      win.document.close();
      win.print();

      // console.log(`<html>${page}</html>`);

      //await doc.html(page);

      // doc.html();
      //doc.save(`${this.pdfName}.pdf`);
    },
  },
};
</script>

<style scoped>
.fixed-top {
  top: 10px !important;
}

.pdf-generate {
  position: absolute;
  top: 0;
  right: 0;
}
</style>

<!--


      // var win = window.open("", "", "height=1200,width=1200");
      // win.document.write("<!DOCTYPE html>");
      // win.document.write(html);
      // win.document.close();
      // win.print();
 // computed: {
  //   vuetifyImport() {
  //     return "import vuetify from '@/plugins/vuetify/vuetify'";
  //   },
  //   pdfImports() {
  //     return `${this.vuetifyImport}`;
  //   },
  // },
      // win.document.write("<title>Empregados</title>");
      // win.document.write(style);
      // win.document.write("</head>");
      // win.document.write("<body>");
      // win.document.write(scriptTag);
      // win.document.write(html);
      // win.document.write("</body></html>");