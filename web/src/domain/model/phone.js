export default class Phone {
  constructor(
    { id,
      user_id,
      title,
      number,
      type, //0 = residencial, 1 = celular
      is_whatsapp,
      description
    } = {}) {
    this.id = id,
      this.user_id = user_id,
      this.title = title,
      this.number = number,
      this.type = type,
      this.is_whatsapp = is_whatsapp,
      this.description = description
  }

  /*seta a instância com as propriedades da model validadas*/
  create(json = null) {
    var model = Phone.fromJson(json);

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
    model.number = json['number'] ? json['number'] : null;
    model.type = json['type'] ? json['type'] : null;
    model.is_whatsapp = json['is_whatsapp'] ? json['is_whatsapp'] : null;
    model.description = json['description'] ? json['description'] : null;

    return model;
  }
}