import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

// import pt from 'vuetify/lib/locale/pt'

// import pt from 'vuetify/lang/pt/pt.ts';

export default new Vuetify({
  lang: {
    // locales: { pt },
    current: 'pt',
  },
  theme: {
    options: { customProperties: true, },
  },
  icons: {
    iconfont: 'fa' || 'md'
  }
});