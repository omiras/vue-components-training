<script setup>
import IdCard from './components/IdCard.vue';
</script>

<template>
  <h1>Creación de componentes con Vue</h1>
  <p>Crea a conitnuación todos los componentes del ejercicio.</p>
  <h2>Id Cards</h2>
  <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg" firstName="John" lastName="Tremor" gender="male" :height="178" :birth="new Date('1985-02-11')"/>
</template>

<style scoped></style>
