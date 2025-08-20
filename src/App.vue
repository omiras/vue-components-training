<!-- single file components: SFC. -->

<!-- Lógica JavaScript y reactividad -->
<script setup>
import { ref } from 'vue';
import IdCard from './components/IdCard.vue';
import BoxColor from './components/BoxColor.vue';

import catPicture from './assets/images/gato.png'
import LikeButton from './components/LikeButton.vue';

const mariaHeight = ref(199)

</script>

<!-- HTML y directivas Vue -->
<template>
  <div>
    <h1>Creación de componentes con Vue</h1>
    <p>Crea a continuación todos los componentes del ejercicio.</p>
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

   
  </div>
</template>

<!-- Estilos. Con el modificador "scoped" permite que estos estilos solo se apliquen a este componente -->
<style scoped>
h2 {
  margin: 1rem 0;
}
</style>
