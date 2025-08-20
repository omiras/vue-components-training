<script setup>
import { computed, ref } from 'vue';


const colors = ['red', 'green', 'blue']

const likes = ref(10)

const addLike = () => {
    likes.value++
}

const buttonStyles = computed(()=> {
    // He modificado ligeramente el ejercicio para demostrar cómo aplicar varios estilos en línea en función de la variable reactiva 'like'
    return {backgroundColor: colors[likes.value % colors.length], fontSize: likes.value + 'px', padding: likes.value + 'px'}
})

</script>

<template>
    <button :style="buttonStyles"  @click="addLike">{{ likes }} Likes</button>
</template>

<style scoped>
</style>