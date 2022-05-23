export default class ProfessionalExperience {
  constructor(
    { id,
      user_id,
      occupation,
      employer,
      initial_year_month,
      final_year_month,
      current_job,
      location,
      description
    } = {}) {
    this.id = id,
      this.user_id = user_id,
      this.occupation = occupation,
      this.employer = employer,
      this.initial_year_month = initial_year_month,
      this.final_year_month = final_year_month,
      this.current_job = current_job,
      this.location = location,
      this.description = description
  }

  /*seta a instância com as propriedades da model validadas*/
  create(json = null) {
    var model = ProfessionalExperience.fromJson(json);

    Object.keys(json).forEach(key => {
      this[key] = model[key];
    });
  }

  /*retorna uma instância validada*/
  static fromJson(json = null) {
    var model = new ProfessionalExperience(json);
    model.id = json['id'] ? parseint(json['id']) : null;
    model.user_id = json['user_id'] ? parseint(json['user_id']) : null;
    model.occupation = json['occupation'] ? json['occupation'] : null;
    model.employer = json['employer'] ? json['employer'] : null;
    model.initial_year_month = json['initial_year_month'] ? json['initial_year_month'] : null;
    model.final_year_month = json['final_year_month'] ? json['final_year_month'] : null;
    model.current_job = json['current_job'] ? json['current_job'] : null;
    model.location = json['location'] ? json['location'] : null;
    model.description = json['description'] ? json['description'] : null;

    return model;
  }
}