<script setup>
import { ref, computed } from 'vue'

const nombre = ref("Ana")

// computed property
const mayusculas = computed(() => nombre.value.toUpperCase())

// función normal
function mayusculasFuncion() {
  return nombre.value.toUpperCase()
}
</script>

<template>
  <p>{{ mayusculas }}</p> <!-- usa cache -->
  <p>{{ mayusculasFuncion() }}</p> <!-- se ejecuta cada vez -->
</template>
