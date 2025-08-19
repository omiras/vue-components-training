<script setup>
import BoxColor from './components/BoxColor.vue';
import CreditCard from './components/CreditCard.vue';
import IdCard from './components/IdCard.vue';
import Random from './components/Random.vue';
import Rating from './components/Rating.vue';

</script>

<template>
  <h1>Creación de componentes con Vue</h1>
  <p>Crea a conitnuación todos los componentes del ejercicio.</p>
  <h2>Id Cards</h2>
  <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg" firstName="John" lastName="Tremor" gender="male"
    :height="178" :birth="new Date('1985-02-11')" />
  <h2>Random</h2>
  <Random :min="1" :max="10"></Random>
  <h3>RGB Color</h3>
  <BoxColor :r="255" :g="0" :b="0" />
  <h3>Credit Card</h3>
  <CreditCard type="visa" bg-color="#11aa99" number="0123456789018845" :expiration-month="3" :expiration-year="2021"
    bank="N26" owner="Maxenne Bourete" />
  <h3>Rating</h3>
  <Rating :rate="0" />
  <Rating :rate="1.49" />
  <Rating :rate="1.5" />
  <Rating :rate="3" />
  <Rating :rate="4" />
  <Rating :rate="5" />
</template>

<style scoped></style>
