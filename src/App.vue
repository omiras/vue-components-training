<script setup>
import BoxColor from './components/BoxColor.vue';
import IdCard from './components/IdCard.vue';
import Random from './components/Random.vue';
</script>

<template>
  <h1>Creación de componentes con Vue</h1>
  <p>Crea a conitnuación todos los componentes del ejercicio.</p>
  <h2>Id Cards</h2>
  <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg" firstName="John" lastName="Tremor" gender="male" :height="178" :birth="new Date('1985-02-11')"/>
  <h2>Random</h2>
  <Random :min="1" :max="10"></Random>
  <h3>RGB Color</h3>
  <BoxColor :r="255" :g="0" :b="0" />
</template>

<style scoped></style>
