<template>
  <div>
    <template v-if="valueInSearch && !withoutBookMark">
      <span v-for="(item, index) in bindValueLength" :key="index">
        <template v-if="characterInSearch(index)">
          <span :class="markColorClass">{{ searchedCharacter(index) }}</span>
        </template>
        <template v-else>
          <span>{{ searchedCharacter(index) }}</span>
        </template>
      </span>
    </template>
    <template v-else>
      {{ bindValue }}
    </template>
  </div>
</template>

<script>
export default {
  props: {
    searchedValue: {
      type: [String, Number],
      default: null,
      required: false,
    },
    bindValue: {
      type: [String, Number],
      default: null,
      required: false,
    },
    markColorClass: {
      type: String,
      default: "yellow",
      required: false,
    },
    withoutBookMark: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    bindValueToString() {
      return `${this.bindValue}`;
    },
    bindValueLength() {
      return this.bindValueToString ? this.bindValueToString.length : 0;
    },
    valueInSearch() {
      if (!this.searchedValue) return false;

      return Boolean(
        this.bindValueToString
          .toString()
          .toLowerCase()
          .indexOf(this.searchedValue.toLowerCase()) >= 0
      );
    },
  },
  methods: {
    searchedCharacter(index = 0) {
      return this.bindValueToString.substring(index, index + 1);
    },
    characterInSearch(index = 0) {
      return Boolean(
        this.searchedValue
          .toString()
          .toLowerCase()
          .includes(
            this.bindValueToString.toLowerCase().substring(index, index + 1)
          )
      );
    },
  },
};
</script>

<style>
</style>