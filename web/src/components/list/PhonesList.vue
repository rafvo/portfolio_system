<template>
  <div>
    <v-row class="py-0" :class="rowClasses" v-for="(item, key) in list" :key="key">
      <v-col :class="colClasses">
        <PhoneItem :phone="item" :classes="phoneClasses"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Phone from "@/domain/model/phone";
import PhoneItem from "@/components/item/PhoneItem.vue";

export default {
  components: {
    PhoneItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [
        new Phone({
          id: 1,
          user_id: 1,
          title: "Casa",
          number: "+55 (17) 3305-5386",
          type: 0,
          is_whatsapp: false,
          description: "",
        }),
        new Phone({
          id: 2,
          user_id: 1,
          title: "Celular",
          number: "+55 (17) 98208-2974",
          type: 1,
          is_whatsapp: true,
          description: "",
        }),
      ],
      required: false,
    },
    rowClasses: {
      type: String,
      default: "",
      required: false,
    },
    colClasses: {
      type: String,
      default: "",
      required: false,
    },
    phoneClasses: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>