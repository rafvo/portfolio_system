export default class ComplementaryCourses {
  constructor(
    { id = "",
      user_id = "",
      course_name = "",
      school = "",
      initial_year_month = "",
      final_year_month = "",
      is_completed = false,
      link = "",
      description = ""
    } = {}) {
    this.id = id,
      this.user_id = user_id,
      this.course_name = course_name,
      this.school = school,
      this.initial_year_month = initial_year_month,
      this.final_year_month = final_year_month,
      this.link = link,
      this.is_completed = is_completed,
      this.description = description
  }

  /*seta a instância com as propriedades da model validadas*/
  create(json = null) {
    var model = ComplementaryCourses.fromJson(json);

    Object.keys(json).forEach(key => {
      this[key] = model[key];
    });
  }

  /*retorna uma instância validada*/
  static fromJson(json = null) {
    var model = new ComplementaryCourses(json);
    model.id = json['id'] ? parseint(json['id']) : null;
    model.user_id = json['user_id'] ? parseint(json['user_id']) : null;
    model.course_name = json['course_name'] ? json['course_name'] : null;
    model.school = json['school'] ? json['school'] : null;
    model.initial_year_month = json['initial_year_month'] ? json['initial_year_month'] : null;
    model.final_year_month = json['final_year_month'] ? json['final_year_month'] : null;
    model.is_completed = json['is_completed'] ? json['is_completed'] : null;
    model.link = json['link'] ? json['link'] : "";
    model.description = json['description'] ? json['description'] : null;

    return model;
  }
}