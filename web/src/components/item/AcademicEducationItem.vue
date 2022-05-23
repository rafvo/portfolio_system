<template>
  <div class="academic-education-item">
    <v-row>
      <v-col>
        <p>
          <span class="text-capitalize">{{ fullFormationPeriod }}</span>
          <small
            class="ml-2 font-weight-light"
            v-if="academicEducation.is_completed"
            >(CONCLUÍDO)</small
          >

          <span class="feature-before comma-after font-weight-light">{{
            academicEducation.formation_name
          }}</span>

          <span class="mr-1 font-weight-light">{{
            academicEducation.school
          }}</span>
          <small class="text-uppercase font-weight-light">({{ academicEducation.title }})</small>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AcademicEducation from "@/domain/model/academic_education";

export default {
  props: {
    academicEducation: {
      type: Object,
      default: () => new AcademicEducation(),
      required: false,
    },
  },
  computed: {
    fullFormationPeriod() {
      return this.academicEducation.is_completed
        ? `${this.academicEducation.final_year_month}`
        : `${this.academicEducation.initial_year_month} - ${this.academicEducation.final_year_month}`;
    },
  },
};
</script>

<style scoped>
.academic-education-item p {
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