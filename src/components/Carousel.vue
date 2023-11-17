<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';


// Guardamos las props en una variable, para poder acceder a ellas en la sección <script>
const props = defineProps(['images'])

// Variable de estado para determinar en que índice del array de imágenes me encuentro
const index = ref(0)

// las funciones que dan respuesta a un event listener (evento), nunca son computed properties. 
const goLeft = () => {
    index.value--

    if (index.value == -1) {
        index.value = props.images.length - 1
    }
}

const goRight = () => {

    index.value++

    if (index.value == props.images.length) {
        index.value = 0
    }
}

const messageFirstSlide = computed(() => {
    return index.value == 0 ? "Te encuentras en la primera diapositiva" : "";
});
</script>

<template>
    <div>
        <!-- Mostrar un mensaje cuando nos encontremos en el primer slide -->
        <p> {{ messageFirstSlide }} </p>
        <button v-on:click="goLeft">Left</button>
        <img v-bind:src="images[index]" alt="">
        <button @click="goRight">Right</button>
    </div>
</template>

<style scoped></style>