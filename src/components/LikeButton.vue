<script setup>
import { computed, ref } from 'vue';

const colors = ['red', 'green', 'blue', '#125467', 'rgb(233,111,44)']

// 1. Primero ver si tu variable de estado se comporta como esperas cambiando su valor inicial 
const likes = ref(0)

const incrementLikes = () => likes.value++

const buttonColor = computed(()=> {
    return colors[likes.value % colors.length]
})

</script>

<template>
<button :style="{backgroundColor: buttonColor}" @click="incrementLikes">{{ likes }} Likes</button>
</template>

<style scoped>
button {
    cursor: pointer;
}
</style>