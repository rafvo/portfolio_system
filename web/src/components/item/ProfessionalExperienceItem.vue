<template>
  <div class="professional-experience-item">
    <v-row>
      <v-col>
        <p>
          <span class="comma-after">{{ professionalExperience.employer }}</span>
          <span class="font-weight-light">{{ professionalExperience.location }}</span>
        </p>
        <p>
          <span class="comma-after">{{
            professionalExperience.occupation
          }}</span>
          <span class="font-weight-light">{{ fullExperiencePeriod }}</span>
        </p>
        <p class="font-weight-light">
          {{ professionalExperience.description }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProfessionalExperience from "@/domain/model/professional_experience";

export default {
  props: {
    professionalExperience: {
      type: Object,
      default: () => new ProfessionalExperience(),
      required: false,
    },
  },
  computed: {
    fullExperiencePeriod() {
      return this.professionalExperience.current_job
        ? `${this.professionalExperience.initial_year_month} - Atual`
        : `${this.professionalExperience.initial_year_month} - ${this.professionalExperience.final_year_month}`;
    },
  },
};
</script>

<style scoped>
.professional-experience-item p {
  padding: 0 !important;
  margin: 0 !important;
}

.comma-after:after {
  content: ",";
  margin-right: 5px;
}
</style>