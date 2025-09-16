<script setup>
import { useI18n } from 'vue-i18n'

// Configuración de i18n
const { t, locale } = useI18n()

// Opciones de idioma
const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' }
]

// Función para cambiar idioma
const changeLanguage = (event) => {
  locale.value = event.target.value
}
</script>

<template>
  <div class="language-selector">
    <label for="lang">Select language:</label>
    <select id="lang" @change="changeLanguage" :value="locale">
      <option v-for="lang in languages" :key="lang.code" :value="lang.code">
        {{ lang.label }}
      </option>
    </select>
  </div>

  <div class="container">
    <p>{{ t('name.firstName') }}: John</p>
    <p>{{ t('name.lastName') }}: Doe</p>
  </div>
</template>

<style scoped>
.language-selector {
  margin-bottom: 1rem;
}
</style>
