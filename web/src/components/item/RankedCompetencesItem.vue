<template>
  <div class="ranked-competences-item">
    <v-row>
      <v-col class="p-0 mt-2">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>
              <span class="font-weight-light">{{ competence.title }}</span>
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-progress-linear
                :value="competence.ranked_per"
                color="grey darken-3"
              ></v-progress-linear>
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="competence.description">{{
              competence.description
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Competence from "@/domain/model/competences";

export default {
  props: {
    competence: {
      type: Object,
      default: () => new Competence(),
      required: false,
    },
  },
};
</script>

<style scoped>
.ranked-competences-item p {
  padding: 0 !important;
  margin: 0 !important;
}

.comma-after:after {
  content: ",";
  margin-right: 5px;
}
</style>

<!-- <v-rating
  v-model="competence.ranked_value"
  color="yellow darken-3"
  background-color="grey darken-1"
  empty-icon="$ratingFull"
  half-increments
  readonly
  hover
  size="12"
></v-rating> -->