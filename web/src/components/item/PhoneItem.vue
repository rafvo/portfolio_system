<template>
  <div>
    <v-row>
      <v-col>
        <a :href="link" target="_blank">
          <v-icon small v-if="isWhatsapp" color="green">whatsapp</v-icon>
          <v-icon small v-else-if="isPhone">mdi-phone</v-icon>
          <v-icon small v-else-if="isCelphone">phone_android</v-icon>
          <span class="ml-2">{{ phone.number }}</span>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Phone from "@/domain/model/phone";

export default {
  props: {
    phone: {
      type: Object,
      default: () => new Phone(),
      required: false,
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