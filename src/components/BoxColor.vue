<!-- A partir de los valores r,g,b tenemos que calcular dos valores derivados
 
1. Color notación rgb
2. Color notación hexadecimal (necestio una función auxiliar para calcular esto)
3. Hay que asignar dicho color a un estilo en línea del  componente
-->
<script setup>
import { computed } from 'vue'


const props = defineProps({
    r: Number,
    g: Number,
    b: Number
})

// En ocasiones, a mi me puede interesar acceder a las propiedades para hacer cáclulos O crear funciones o estados derivados mediante computed properties
console.log(props.r)

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

const stringHex = computed(()=> {
    return rgbToHex(props.r, props.g, props.b)
})

const stringRGB = computed(() => {
    return `rgb(${props.r}, ${props.g}, ${props.b})`
})

// Necesitaremos otra computed property para calcular el valor hexadecimal (y también una función auxiliar para pasar de RGB a Hexedecimal)

</script>



<template>
    <!-- Realmente, el color que va en la etiqueta style YA LO TENEMOS. Es la misma función computada stringRGB-->
    <div :style="{ backgroundColor: stringRGB }">
        <p>{{ stringRGB }}</p>
        <p>{{ stringHex }}</p>
    </div>
</template>

<style scoped>
div {
    color: black;
    font-weight: 700;
    padding: 2rem;
    text-align: center;
    border: 2px solid #ccc;
}
</style>