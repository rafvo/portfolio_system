export default class Competences {
  constructor(
    { id,
      user_id,
      title,
      ranked_value,
      ranked_per,
      description
    } = {}) {
    this.id = id,
      this.user_id = user_id,
      this.title = title,
      this.ranked_value = ranked_value,
      this.ranked_per = ranked_per,
      this.description = description
  }

  /*seta a instância com as propriedades da model validadas*/
  create(json = null) {
    var model = Competences.fromJson(json);

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
    model.ranked_value = json['ranked_value'] ? json['ranked_value'] : null;
    model.ranked_per = json['ranked_per'] ? json['ranked_per'] : null;
    model.description = json['description'] ? json['description'] : null;

    return model;
  }
}