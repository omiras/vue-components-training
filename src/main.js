import './assets/main.css'
import { createI18n } from 'vue-i18n'

import { createApp } from 'vue'
import App from './App.vue'

const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界'
      }
    }
  }
})
createApp(App).use(i18n).mount('#app')
