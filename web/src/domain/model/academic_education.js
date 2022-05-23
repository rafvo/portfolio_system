export default class AcademicEducation {
  constructor(
    { id,
      user_id,
      title,
      formation_name,
      school,
      initial_year_month,
      final_year_month,
      is_completed,
      description
    } = {}) {
    this.id = id,
      this.user_id = user_id,
      this.title = title,
      this.formation_name = formation_name,
      this.school = school,
      this.initial_year_month = initial_year_month,
      this.final_year_month = final_year_month,
      this.is_completed = is_completed,
      this.description = description
  }

  /*seta a instância com as propriedades da model validadas*/
  create(json = null) {
    var model = AcademicEducation.fromJson(json);

    Object.keys(json).forEach(key => {
      this[key] = model[key];
    });
  }

  /*retorna uma instância validada*/
  static fromJson(json = null) {
    var model = new AcademicEducation(json);
    model.id = json['id'] ? parseint(json['id']) : null;
    model.user_id = json['user_id'] ? parseint(json['user_id']) : null;
    model.title = json['title'] ? json['title'] : null;
    model.formation_name = json['formation_name'] ? json['formation_name'] : null;
    model.school = json['school'] ? json['school'] : null;
    model.initial_year_month = json['initial_year_month'] ? json['initial_year_month'] : null;
    model.final_year_month = json['final_year_month'] ? json['final_year_month'] : null;
    model.is_completed = json['is_completed'] ? json['is_completed'] : null;
    model.description = json['description'] ? json['description'] : null;

    return model;
  }
}