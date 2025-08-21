<!-- single file components: SFC. -->

<!-- Lógica JavaScript y reactividad -->
<script setup>
import { ref } from 'vue';
import IdCard from './components/IdCard.vue';
import BoxColor from './components/BoxColor.vue';
import Carousel from './components/Carousel.vue';

import catPicture from './assets/images/gato.png'
import LikeButton from './components/LikeButton.vue';
import KeyButton from './components/KeyButton.vue';

const mariaHeight = ref(199)
const pressedKey = ref("")
const textFromUser = ref("")

const handleKeyPress = (keyPressed) => {
  textFromUser.value += keyPressed
}

</script>

<!-- HTML y directivas Vue -->
<template>
  <div>
    <h1>Creación de componentes con Vue</h1>
    <p>Crea a continuación todos los componentes del ejercicio.</p>

    <h2>Carousel</h2>
    <Carousel :images="[
      'https://randomuser.me/api/portraits/women/1.jpg',
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/women/2.jpg',
      'https://randomuser.me/api/portraits/men/2.jpg'
    ]" />


    <h2>Like Button</h2>
    <LikeButton />

    <h2>1-Id Card</h2>
    <IdCard first-name="Maria" last-name="Dolores" gender="female" :height="mariaHeight"
      picture="https://randomuser.me/api/portraits/men/44.jpg" :birth="new Date('1999-05-11')" />
    <!-- Es interesante pasar un objeto de tipo fecha en vez de un string tipo '1988-05-11' porque de este tipo de objeto puedes extraer un formato de fecha, puedes comparar fechas, etc -->
    <IdCard last-name='Delores' first-name='Obrien' gender='female' :height="172" :birth="new Date('1988-05-11')"
      picture="https://randomuser.me/api/portraits/women/44.jpg" />
    <IdCard last-name='Garcia' first-name='Loki' gender='male' :height="172" :birth="new Date('1988-05-11')"
      :picture="catPicture" />

    <h2>Box Color</h2>
    <BoxColor :r="255" :g="0" :b="0" />
    <BoxColor :r="0" :g="255" :b="0" />

    <!-- https://vuejs.org/guide/essentials/component-basics.html#listening-to-events-->
    <h2>Ejemplo de un hijo que emite eventos al padre </h2>
    <!-- Escuchar el evento @press -->
    <KeyButton @press="handleKeyPress" label="A" />
    <KeyButton @press="handleKeyPress" label="B" />
    <br>
    <label for="">Texto escrito por el usuario:</label>
    <input v-model="textFromUser" type="text">
  </div>
</template>

<!-- Estilos. Con el modificador "scoped" permite que estos estilos solo se apliquen a este componente -->
<style scoped>
h2 {
  margin: 1rem 0;
}
</style>
