import '@/assets/scss/app.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import vuetify from './plugins/vuetify/vuetify'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";
import pt_BR from "vee-validate/dist/locale/pt_BR.json";
import * as rules from "vee-validate/dist/rules";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueHtml2pdf from 'vue-html2pdf'
import VueMask from 'v-mask'
Vue.use(VueMask);
Vue.use(VueHtml2pdf)

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize("pt_BR", pt_BR);

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.use(Toast);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

/**
 * Exemplo: 1732556543 => (17) 3255-6543
 *
 * @param {String} value
 * @return {String}
 */
Vue.filter('phone', function (value) {
  if (!value) return null;

  return value.replace(/[^0-9]/g, '')
    .replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
});

/**
 * Exemplo: 17986743566 => (17) 98674-3566
 *
 * @param {String} value
 * @return {String}
 */
Vue.filter('celphone', function (value) {
  if (!value) return null;

  return value.replace(/[^0-9]/g, '')
    .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
});

Vue.filter('currency', function (value, currency_mark = true) {
  if (value == null)
    value = 0

  value = Number(value)
  return (currency_mark ? "R$ " : "") + value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
});

Vue.filter('million', function (value) {
  value = value && !isNaN(value) ? parseFloat(value) : 0;
  value = value.toLocaleString();
  return value;
})

Vue.filter('percentage', function (value) {
  if (value == null)
    return "0,00%";
  value = Number(value);

  return value.toFixed(2).replace(",", "").replace(".", ",") + "%";
});

Vue.filter('stripHTML', function (value) {
  const div = document.createElement("div");
  div.innerHTML = value;
  const text = div.textContent || div.innerText || "";
  return text;
});

Vue.filter('strLimit', function (value, size) {
  if (!value) return "";
  value = value.toString();

  if (value.length <= size) {
    return value;
  }
  return value.substr(0, size) + "...";
});

Vue.filter('extense', function (value) {
  if (value)
    return numeroPorExtenso.porExtenso(value, numeroPorExtenso.estilo.monetario)
  return null;
});

Vue.filter('cpfcnpj', function (value) {
  value += "";

  value = value.replace(/[^\d]*/i, "");
  value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/i, "$1.$2.$3/$4-$5");
  value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/i, "$1.$2.$3-$4");

  return value;
});

Vue.filter('zipcode', function (value) {
  value += "";

  value = value.replace(/[^\d]*/i, "");
  value = value.replace(/(\d{5})(\d{3})/i, "$1-$2");

  return value;
});

Vue.filter('phoneCelphone', function (value) {
  if (!value) return "";

  value = `${value}`;

  value = value.replace(/[^0-9]/g, '');

  const isPhone = value.length <= 8;
  const isCelphone = value.length >= 9;

  if (isPhone) value = value.replace(/(\d{4})(\d{4})/, '$1-$2');
  else if (isCelphone) value = value.replace(/(\d{5})(\d{4})/, '$1-$2');

  return value;
});

Vue.filter('phoneCelphoneWithDDD', function (value) {
  if (!value) return "";

  value = `${value}`;

  value = value.replace(/[^0-9]/g, '');

  const isPhone = value.length <= 10;
  const isCelphone = value.length >= 11;

  if (isPhone) value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  else if (isCelphone) value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

  return value;
});

Vue.filter('phoneCelphoneWithDDI', function (value) {
  if (!value) return "";

  value = `${value}`;

  value = value.replace(/[^0-9]/g, '');

  const isPhone = value.length <= 12;
  const isCelphone = value.length >= 13;

  if (isPhone) value = value.replace(/(\d{2})(\d{2})(\d{4})(\d{4})/, '+$1 ($2) $3-$4');
  else if (isCelphone) value = value.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');

  return value;
});