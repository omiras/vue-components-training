<script setup>

import { rgbToHex } from '../util';

defineProps(['r', 'g', 'b'])

function whiteOrBlack(r, g, b) {
    if (r < 128 || g < 128 || b < 128) {
        return "white"
    }

    return "black"
}

</script>

<!-- Reto

    1. Codifica el BoxColor.vue para que se muestre el cada uno de los valores de los colores en el lugar adecuado
   2. Necesitarás definir las propiedades con defineProps (mirad ejemplos anteriores en este mismo proyecto)
   3. Buscad por inet una forma (función o computed property) de pasar de un color en formato RGB a hexadecimal

    Corregir el 3 a las 10.02

-->



<template>
    <!-- Reto: haced que el atributo style sea dinámico. Estableced el color de backgroundColor con el valor que devuelve la functión rgbToHex. Corregir 10.24 -->
    <div :style="{ backgroundColor: `rgb(${r}, ${g}, ${b})`, color: whiteOrBlack(r, g, b) }" class="container">
        <div>
            rgb( {{ r }}, {{ g }}, {{ b }} )
        </div>
        <div>
            {{ rgbToHex(r, g, b) }}
        </div>
    </div>
</template>

<style scoped>
div.container {

    border: 1px solid black;
    width: 50%;
    padding: 2rem;
}
</style>