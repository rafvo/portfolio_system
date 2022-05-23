<template>
  <div>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <v-form ref="form">
        <Card use-title-divider>
          <template slot="title">
            <v-row>
              <v-col>
                <h5>Informações do Usuário</h5>
              </v-col>
              <v-col v-if="editing" class="d-flex justify-content-end">
                <template v-if="readonly && existOldModel && !isUpdating">
                  <v-btn color="primary" outlined @click.prevent="edit()">
                    <span><i class="fa fa-pen pr-2"></i>Editar</span>
                  </v-btn>
                </template>

                <template v-else-if="existOldModel">
                  <v-btn
                    :class="{ 'mr-3': isUpdating }"
                    color="error"
                    outlined
                    @click.prevent="cancel()"
                  >
                    <span><i class="fa fa-times pr-2"></i>Cancelar</span>
                  </v-btn>
                </template>

                <v-btn
                  v-if="isUpdating"
                  color="primary"
                  type="submit"
                  :disabled="invalid || updating"
                  @click.prevent="update()"
                >
                  <template v-if="updating">
                    <v-progress-circular
                      indeterminate
                      color="white"
                    ></v-progress-circular>
                  </template>
                  <template v-else>
                    <span><i class="fa fa-save pr-2" />Alterar</span>
                  </template>
                </v-btn>
              </v-col>
            </v-row>
          </template>
          <div class="card-body">
            <v-row>
              <!-- <v-col cols="4">
                <PhotoField v-model="user.photo" />
              </v-col> -->
              <v-col cols="12">
                <v-row>
                  <v-col>
                    <TextField
                      vid="name"
                      :default-value="user.name"
                      v-model="user.name"
                      :autofocus="!isReadonly"
                      label="Nome"
                      rules="alpha_spaces|min:2"
                      :field-readonly="isReadonly"
                      required
                    >
                    <template slot="extraLabelInfo">

                    </template>
                    </TextField>
                  </v-col>
                  <v-col>
                    <EmailField
                      vid="email"
                      :default-value="user.email"
                      v-model="user.email"
                      :field-readonly="isReadonly"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <PasswordField
                      vid="password"
                      v-model="user.password"
                      :field-readonly="isReadonly"
                      :grid="6"
                      with-confirmation
                      inline-field
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <PhoneField
                      :default-value="user.phone"
                      v-model="user.phone"
                      :field-readonly="isReadonly"
                      required
                      no-mask-result
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
          {{ user }}
        </Card>
      </v-form>
    </validation-observer>
  </div>
</template>

<script>
import { Utils } from "@/util/utils";
import _cloneDeep from "lodash/cloneDeep";
import _isEqual from "lodash/isEqual";
import User from "@/domain/model/users";
import Card from "@/components/card/Card.vue";
import EmailField from "@/components/fields/EmailField.vue";
import PasswordField from "@/components/fields/PasswordField.vue";
import TextField from "@/components/fields/TextField.vue";
import PhoneField from "@/components/fields/PhoneField.vue";
import PhotoField from "@/components/fields/PhotoField.vue";

export default {
  components: {
    Card,
    EmailField,
    PasswordField,
    TextField,
    PhoneField,
    PhotoField,
  },
  props: {
    userId: {
      type: [String, Number],
      default: null,
      required: false,
    },
    user: {
      type: Object,
      default: () => new User(),
      required: false,
    },
    editing: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      oldModel: null,
      readonly: false,
      updating: false,
    };
  },
  computed: {
    existOldModel() {
      return Boolean(Utils.exist(this.oldModel));
    },
    isReadonly() {
      return Boolean(this.readonly && !this.isUpdating);
    },
    isUpdating() {
      return Boolean(!_isEqual(this.user, this.oldModel));
    },
  },
  methods: {
    validate() {
      return this.$refs.observer.validate();
    },
    async update() {
      var valid = await this.validate();
      if (!valid) return;

      this.updating = true;
      this.$store
        .dispatch("users/update", { id: this.userId, user: this.user })
        .then((data) => {
          this.oldModel = _cloneDeep(this.user);
          this.readonly = true;
          this.updating = false;
        })
        .catch((e) => {
          this.updating = false;
          this.$refs.observer.setErrors(e);
        });
    },
    edit() {
      this.readonly = false;
    },
    cancel() {
      this.readonly = true;
      this.user.create(_cloneDeep(this.oldModel));
    },
  },
  created() {
    if (this.editing) this.oldModel = _cloneDeep(this.user);
  },
};
</script>

<style>
</style>