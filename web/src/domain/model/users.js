export default class Users {
  constructor(
    { id,
      name,
      phone,
      photo,
      email,
      occupation,
      email_verified_at,
      last_access,
      password,
      remember_token
    } = {}) {
    this.id = id,
      this.name = name,
      this.phone = phone,
      this.photo = photo,
      this.email = email,
      this.occupation = occupation,
      this.email_verified_at = email_verified_at,
      this.last_access = last_access,
      this.password = password,
      this.remember_token = remember_token
  }

  /*seta a instância com as propriedades da model validadas*/
  create(json = null) {
    var model = Users.fromJson(json);

    Object.keys(json).forEach(key => {
      this[key] = model[key];
    });
  }

  /*retorna uma instância validada*/
  static fromJson(json = null) {
    var model = new Users(json);
    model.id = json['id'] ? parseint(json['id']) : null;
    model.name = json['name'] ? json['name'] : null;
    model.phone = json['phone'] ? json['phone'] : null;
    model.photo = json['photo'] ? json['photo'] : null;
    model.email = json['email'] ? json['email'] : null;
    model.email_verified_at = json['email_verified_at'] ? json['email_verified_at'] : null;
    model.last_access = json['last_access'] ? json['last_access'] : null;
    model.password = json['password'] ? json['password'] : null;
    model.remember_token = json['remember_token'] ? json['remember_token'] : null;

    return model;
  }
}