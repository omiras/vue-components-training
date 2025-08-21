<script setup>
import { ref } from 'vue';


const props = defineProps({
    images: Array // array de urls en formato string
})

// Una varible de estado para controlar la imagen en la que nos encotramos (índice del array)
const imageIndex = ref(0)

// Recordad en jugar con el valor de la variable de estado para ver si vuestro carousel funciona correctamente (cambiar el valor del indice)

// Luego, ya podéis añadir los eventos para obtener la imagen anterior o la siguiente (hay dos funciones para gestionar cada uno de los clicks)
const setNextImage = () => {

    // Si nos encotramos en el último índice, debemos volver al principio del  array (índice 0)
    if (imageIndex.value == props.images.length - 1) {
        imageIndex.value = 0
    } else {
        imageIndex.value++
    }

}

const setPrevImage = () => {
// Si nos encotramos en el índice 0, debemos ir al útlimo elemento del array (props.images.length - 1)
    if (imageIndex.value == 0) {
        imageIndex.value = props.images.length - 1
    } else {
        imageIndex.value--
    }

}

</script>



<template>
    <div>
        <button @click="setPrevImage">Prev</button>
        <!-- El atributo SRC debe pasar a ser dinámico y calculado en función del índice del array  -->
        <img :src="images[imageIndex]" alt="">
        <button @click="setNextImage">Next</button>
    </div>
</template>

<style scoped>
button {
    background-color: aqua;
}
</style>