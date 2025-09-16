import './assets/main.css'
import { createI18n } from 'vue-i18n'

import { createApp } from 'vue'
import App from './App.vue'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      title: 'Creating components with Vue',
      name: {
        firstName: 'First Name'
      }
    },
    es: {
      title: 'Creación de componentes con Vue',
      name: {
        firstName: 'Nombre'
      }
    }
  }
})
createApp(App).use(i18n).mount('#app')
