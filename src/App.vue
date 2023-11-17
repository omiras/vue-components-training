<script setup>

import { ref, computed } from 'vue';

import IdCard from './components/IdCard.vue'
import Random from './components/Random.vue'
import BoxColor from './components/BoxColor.vue'
import LikeButton from './components/LikeButton.vue';
import Carousel from './components/Carousel.vue'
</script>

<template>
  <h1>Creación de componentes con Vue</h1>
  <section>
    <h2>Carousel</h2>
    <Carousel :images="['https://randomuser.me/api/portraits/women/1.jpg'
      , 'https://randomuser.me/api/portraits/men/1.jpg', 'https://randomuser.me/api/portraits/women/2.jpg'
      , 'https://randomuser.me/api/portraits/men/2.jpg']" />
    <LikeButton />
    <LikeButton />
    <h2>BoxColor</h2>
    <BoxColor :r="255" :g="0" :b="0" />
    <BoxColor :r="128" :g="255" :b="0" />
    <BoxColor :r="50" :g="50" :b="50" />
    <BoxColor :r="0" :g="0" :b="0" />
    <BoxColor :r="255" :g="129" :b="129" />


    <h2>Random</h2>
    <Random :min="1" :max="6" />
    <Random :min="1" :max="100" />
    <Random :min="100" :max="1000" />

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
