<template>
  <div class="complementary-courses-item">
    <v-row>
      <v-col>
        <p>
          <span class="text-capitalize">{{ fullCoursePeriod }}</span>
          <small class="ml-2 font-weight-light">
            <span v-if="complementaryCourses.is_completed">(CONCLUÍDO)</span>
            <span v-else>(CURSANDO)</span>
          </small>

          <span class="feature-before comma-after font-weight-light">
            <a v-if="linkEnable" :href="complementaryCourses.link" target="_blank">
              {{ complementaryCourses.course_name }}
            </a>
            <span v-else> {{ complementaryCourses.course_name }}</span>
          </span>

          <span class="mr-1 font-weight-light">{{
            complementaryCourses.school
          }}</span>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ComplementaryCourses from "@/domain/model/complementary_courses";

export default {
  props: {
    complementaryCourses: {
      type: Object,
      default: () => new ComplementaryCourses(),
      required: false,
    },
  },
  computed: {
    existComplementaryCourses() {
      return this.complementaryCourses;
    },
    isCompleted() {
      return (
        this.existComplementaryCourses && this.complementaryCourses.is_completed
      );
    },
    initialYearMonth() {
      return this.existComplementaryCourses &&
        this.complementaryCourses.initial_year_month
        ? `${this.complementaryCourses.initial_year_month}`
        : "";
    },
    finalYearMonth() {
      return this.existComplementaryCourses &&
        this.complementaryCourses.final_year_month
        ? `${this.complementaryCourses.final_year_month}`
        : "";
    },
    fullCoursePeriodList() {
      return [this.initialYearMonth, this.finalYearMonth];
    },
    cleanFullCoursePeriodList() {
      const results = this.fullCoursePeriodList.filter((element) => {
        return element !== "";
      });

      return results;
    },
    concatFullCoursePeriodList() {
      return this.cleanFullCoursePeriodList.join(" - ");
    },
    fullCoursePeriod() {
      return this.isCompleted
        ? this.finalYearMonth
        : this.concatFullCoursePeriodList;
    },
    linkEnable() {
      return this.existComplementaryCourses && this.complementaryCourses.link;
    },
  },
};
</script>

<style scoped>
.complementary-courses-item p {
  padding: 0 !important;
  margin: 0 !important;
}

.comma-after:after {
  content: ",";
  margin-right: 5px;
}

.two-points-after:after {
  content: ":";
  margin-right: 5px;
}

.feature-before:before {
  content: "-";
  margin-left: 5px;
  margin-right: 5px;
}

.feature-after:after {
  content: "-";
  margin-left: 5px;
  margin-right: 5px;
}

.capitalize::first-letter {
  text-transform: capitalize;
}
</style>