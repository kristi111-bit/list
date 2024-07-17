import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Используем стили Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Иконки Material Design

// Импортируем ваши глобальные стили
import './assets/styles/global.scss';

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        primary: '#3498db',
        secondary: '#2ecc71',
      },
    },
  },
});

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app');