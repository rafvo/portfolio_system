<template>
  <div>
    <v-row>
      <v-col>
        <a
          class="text-decoration-none ml-2"
          :class="classes"
          :href="link"
          target="_blank"
        >
          <InlineRow>
            <ImageRender
              v-if="isWhatsapp"
              imageLoaderComputedProp="whatsapp64px2"
              max-height="16"
              max-width="16"
            />
            <ImageRender
              v-else-if="isPhone"
              imageLoaderComputedProp="phone64pxLight2"
              max-height="16"
              max-width="16"
            />
            <ImageRender
              v-else-if="isCelphone"
              imageLoaderComputedProp="smartphone64pxLight"
              max-height="16"
              max-width="16"
            />
            <span class="ml-2">{{ phone.number }}</span>
          </InlineRow>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Phone from "@/domain/model/phone";
import InlineRow from "@/components/rows/InlineRow.vue";
import ImageRender from "@/components/images/ImageRender.vue";

export default {
  components: {
    InlineRow,
    ImageRender,
  },
  props: {
    phone: {
      type: Object,
      default: () => new Phone(),
    },
    classes: {
      type: String,
      default: "",
    },
  },
  computed: {
    isPhone() {
      return this.phone.type == 0;
    },
    isCelphone() {
      return this.phone.type == 1;
    },
    isWhatsapp() {
      return this.isCelphone && this.phone.is_whatsapp;
    },
    cleanNumber() {
      var number = this.phone.number;
      return number.replace(/[^0-9]/g, "");
    },
    whatsappLink() {
      if (!this.phone.number) return "";
      return this.isWhatsapp ? `https://wa.me/${this.cleanNumber}` : "";
    },
    link() {
      return this.whatsappLink ? this.whatsappLink : "#";
    },
  },
};
</script>

<style>
</style>
          <!-- <v-icon small v-if="isWhatsapp" color="green">whatsapp</v-icon>
          <v-icon small v-else-if="isPhone">mdi-phone</v-icon>
          <v-icon small v-else-if="isCelphone">phone_android</v-icon> -->