<template>
  <div>
    <div class="d-flex flex-direction-row align-items-center mb-5">
      <slot name="header">
        <span class="mr-5">{{ headerTitle }}</span>
      </slot>
      <v-text-field
        v-if="withSearch"
        v-model="find"
        :append-icon="searchAppenIcon"
        :label="searchLabel"
        :disabled="loading"
        single-line
        hide-details
      ></v-text-field>
    </div>
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th
                  v-for="(item, key) in cols"
                  :key="key"
                  :class="`text-${
                    item[colsAlignProp] ? item[colsAlignProp] : defaultColsAlign
                  }`"
                >
                  {{ item[colTextProp] }}
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-if="loading">
                <tr>
                  <td :colspan="colspan">
                    <CircularProgressIndicator class="p-40" />
                  </td>
                </tr>
              </template>
              <template v-else-if="existSearchRows">
                <tr v-for="(row, rowKey) in searchRows" :key="rowKey">
                  <td
                    v-for="(rowCol, rowColKey) in rowsProps[rowKey]"
                    :key="rowColKey"
                  >
                    <slot :name="rowCol" :item="row">
                      <template v-if="valueInSearch(row[rowCol])">
                        <span
                          v-for="(item, searchIndex) in `${row[rowCol]}`.length"
                          :key="searchIndex"
                        >
                          <template
                            v-if="characterInSearch(row[rowCol], searchIndex)"
                          >
                            <span class="yellow">{{
                              searchedCharacter(row[rowCol], searchIndex)
                            }}</span>
                          </template>
                          <template v-else>
                            <span>{{
                              searchedCharacter(row[rowCol], searchIndex)
                            }}</span>
                          </template>
                        </span>
                      </template>
                      <template v-else>
                        {{ row[rowCol] }}
                      </template>
                    </slot>
                    <slot :name="`extra:${rowCol}`" :item="row"></slot>
                  </td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td :colspan="colspan">
                    <slot name="noRecordsArea">
                      <v-alert class="mt-3 mb-3" dense outlined type="info">
                        {{ noRecordsMessage }}
                      </v-alert>
                    </slot>
                  </td>
                </tr>
              </template>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <div class="d-flex flex-direction-row align-items-center">
      <small class="mr-2">Registros por página: </small>
      <v-row>
        <v-col cols="2">
          <v-select
            v-model="perPage"
            :items="perPageAll"
            :disabled="loading"
            item-text="text"
            item-value="id"
            return-object
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-content-end align-items-center">
          <small class="mr-2">{{
            `Página ${currentPage}-${perPageNumber} de ${totalRows} registros`
          }}</small>
          <v-btn icon :disabled="currentPage <= 1">
            <v-icon>chevron_left</v-icon>
          </v-btn>
          <v-btn icon :disabled="totalPages <= 1">
            <v-icon>chevron_right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { Utils } from "@/util/utils";
import CircularProgressIndicator from "@/components/loaders/CircularProgressIndicator.vue";
// import { paginate } from "@/util/paginate.ts";
import _cloneDeep from "lodash/cloneDeep";
import Vue from "vue";

export default {
  components: {
    CircularProgressIndicator,
  },
  props: {
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
    backEndSearch: {
      type: Boolean,
      default: false,
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
    headerTitle: {
      type: String,
      default: "{Tabela}",
      required: false,
    },
    initialPerPage: {
      type: [Number, String],
      default: 10,
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
    perPageOptions: {
      type: Array,
      default: () => [1, 2, 5, 10, 15, 20, 25, 50, 100],
      required: false,
    },
    search: {
      type: String,
      default: "",
      required: false,
    },
    searchLabel: {
      type: String,
      default: "Pesquisar",
      required: false,
    },
    searchAppenIcon: {
      type: String,
      default: "mdi-magnify",
      required: false,
    },
    withSearch: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      find: "",
      perPage: null,
      currentPage: 1,
      perPageAll: [],
      all: [],
    };
  },
  computed: {
    colspan() {
      return this.cols.length;
    },
    filterableCols() {
      return this.cols.filter(
        (f) =>
          f[this.colFilterableProp] || f[this.colFilterableProp] == undefined
      );
    },
    existSearchRows() {
      return Boolean(Utils.exist(this.searchRows));
    },
    perPageNumber() {
      return this.perPage.id;
    },
    rowsKeys() {
      return Object.keys(this.rows);
    },
    rowsProps() {
      let lines = [];

      this.rows.forEach((m, index) => {
        lines.push(JSON.parse(JSON.stringify(Object.keys(m))));
      });

      return lines;
    },
    searchRows() {
      if (!this.find || this.backEndSearch) return this.rows;

      let result = [];

      for (const rowKey in this.rows) {
        const row = this.rows[rowKey];
        for (const rowColKey in this.rowsProps[rowKey]) {
          const rowCol = this.rowsProps[rowKey][rowColKey];
          if (this.valueInSearch(row[rowCol])) {
            result.push(this.rows[rowKey]);
            break;
          }
        }
      }

      return result;
    },
    totalRows() {
      return this.rows.length;
    },
    totalPages() {
      return Math.ceil(this.totalRows / this.perPageNumber).toFixed();
    },
  },
  watch: {
    search() {
      this.find = this.search;
    },
    initialPerPage() {
      this.perPage = _cloneDeep(this.selectedPerPageOption());
    },
    perPageOptions: {
      handler() {
        this.perPageAll = _cloneDeep(this.perPageList());
      },
      deep: true,
    },
  },
  methods: {
    valueInSearch(value) {
      if (!this.find) return false;

      return Boolean(
        value.toString().toLowerCase().indexOf(this.find.toLowerCase()) >= 0
      );
    },
    searchedCharacter(value, index = 0) {
      return `${value}`.substring(index, index + 1);
    },
    characterInSearch(value, index = 0) {
      return Boolean(
        this.find
          .toString()
          .toLowerCase()
          .includes(`${value}`.toLowerCase().substring(index, index + 1))
      );
    },
    selectedPerPageOption() {
      return this.perPageAll.filter((f) => f.id == this.initialPerPage).shift();
    },
    perPageList() {
      let list = [];

      this.perPageOptions.filter((f) => {
        list.push({
          id: f,
          text: f,
        });
      });

      return [...[{ id: null, text: "Todos" }], ...list];
    },
    // paginate(items, itemsPerPage = 1) {
    //   let currentPage = 1;
    //   return items.reduce((acc, val, i) => {
    //     const index = i + 1;
    //     const page = index % itemsPerPage == 0 ? currentPage : currentPage++;
    //     console.log(page);

    //     //const pageIndex = index <= itemsPerPage ? currentPage : currentPage++;
    //     //let page = acc[pageIndex] || (acc[pageIndex] = []);
    //    // page.push(val);

    //     return acc;
    //   }, []);
    // },
  },
  created() {
    this.find = this.search;
    this.perPageAll = _cloneDeep(this.perPageList());
    this.perPage = _cloneDeep(this.selectedPerPageOption());
    // this.all = paginate(this.rows.length);
  },
};
</script>

<style>
</style>