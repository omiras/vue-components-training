<script setup>
import { ref } from 'vue';


// Guardamos las props en una variable, para poder acceder a ellas
const props = defineProps(['images'])

// Variable de estado para determinar en que índice del array de imágenes me encuentro
const index = ref(0)

</script>

<template>
    <div>
        <button>Left</button>
        <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="">
        <button>Right</button>
    </div>
</template>

<style scoped></style>