import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';

import es from '../locales/es';
import en from '../locales/en';


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    locale: {
      locale: 'es',
      messages: {
        es,
        en,
      }
    }
  });
  app.vueApp.use(vuetify);
});
