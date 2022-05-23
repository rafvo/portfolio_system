<template>
  <div>
    <Paginate
      :rows="rows"
      :cols="cols"
      :header-title="headerTitle"
      :with-search="withSearch"
    >
      <template slot-scope="{ searchedValue, currentPageRows }">
        <SimpleTable
          :cols="cols"
          :rows="currentPageRows"
          :cols-align-prop="colsAlignProp"
          :col-text-prop="colTextProp"
          :col-filterable-prop="colFilterableProp"
          :default-cols-align="defaultColsAlign"
          :loading="loading"
          :no-records-message="noRecordsMessage"
          :searched-value="searchedValue"
          :with-text-mark="withTextMark"
        />
      </template>
    </Paginate>
  </div>
</template>

<script>
import _cloneDeep from "lodash/cloneDeep";
import Paginate from "@/components/pagination/Paginate.vue";
import SimpleTable from "@/components/tables/SimpleTable.vue";

export default {
  components: {
    Paginate,
    SimpleTable,
  },
  props: {
    /*paginated props*/
    backEndSearch: {
      type: Boolean,
      default: false,
      required: false,
    },
    headerTitle: {
      type: String,
      default: "{Paginação}",
      required: false,
    },
    initialPerPage: {
      type: [Number, String],
      default: 10,
      required: false,
    },
    perPageOptions: {
      type: Array,
      default: () => [1, 2, 5, 10, 15, 20, 25, 50, 100],
      required: false,
    },
    withSearch: {
      type: Boolean,
      default: false,
      required: false,
    },

    /*simple table props*/
    cols: {
      type: Array,
      default: () => [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          filterable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
    },
    rows: {
      type: Array,
      default: () => [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
      ],
      required: false,
    },
    colsAlignProp: {
      type: String,
      default: "align",
      required: false,
    },
    colTextProp: {
      type: String,
      default: "text",
      required: false,
    },
    colFilterableProp: {
      type: String,
      default: "filterable",
      required: false,
    },
    defaultColsAlign: {
      type: String,
      default: "left",
      required: false,
    },
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
    noRecordsMessage: {
      type: String,
      default: "Nenhum registro encontrado",
      required: false,
    },
    searchedValue: {
      type: [String, Number],
      default: null,
      required: false,
    },
    withTextMark: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style>
</style>