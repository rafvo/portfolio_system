<template>
  <div class="complementary-courses-item">
    <v-row>
      <v-col>
        <p>
          <span class="text-capitalize">{{ fullCoursePeriod }}</span>
          <small
            class="ml-2 font-weight-light"
            v-if="complementaryCourses.is_completed"
            >(CONCLUÍDO)</small
          >

          <span class="feature-before comma-after font-weight-light">{{
            complementaryCourses.course_name
          }}</span>

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
    fullCoursePeriod() {
      return this.complementaryCourses.is_completed
        ? `${this.complementaryCourses.final_year_month}`
        : `${this.complementaryCourses.initial_year_month} - ${this.academicEducation.final_year_month}`;
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