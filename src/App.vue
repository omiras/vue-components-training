<script setup>
import IdCard from './components/IdCard.vue';


</script>

<template>
  <h1>Creación de componentes con Vue</h1>
  <section>
    <h2>Id Card</h2>
    <IdCard last-name='Doe' first-name='John' gender='male' :height="178" :birth='new Date("1992-07-14")'
      picture="https://randomuser.me/api/portraits/men/44.jpg" />
    <IdCard last-name='Delores ' first-name='Obrien' gender='female' :height="172" :birth='new Date("1988-05-11")'
      picture="https://randomuser.me/api/portraits/women/44.jpg" />

  </section>
</template>

<style scoped>
h2 {
  color: blueviolet;
}
</style>
