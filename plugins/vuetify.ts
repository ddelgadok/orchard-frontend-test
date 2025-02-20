import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';

import es from '../locales/es';
import en from '../locales/en';


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    display: {
      thresholds: {
        xs: 0,
        sm: 320,
        md: 540,
        lg: 800,
        xl: 1280,
      }
    },
    theme: {
      defaultTheme: 'dark'
    },
    locale: {
      locale: 'en',
      messages: {
        es,
        en,
      }
    }
  });
  app.vueApp.use(vuetify);
});
