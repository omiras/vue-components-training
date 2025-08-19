<!-- A partir de los valores r,g,b tenemos que calcular dos valores derivados
 
1. Color notación rgb
2. Color notación hexadecimal (necestio una función auxiliar para calcular esto)
3. Hay que asignar dicho color a un estilo en línea del  componente
-->
<script setup>

const props = defineProps({
    r: Number
})

// En ocasiones, a mi me puede interesar acceder a las propiedades para hacer cáclulos O crear funciones o estados derivados mediante computed properties
console.log(props.r)

</script>



<template>
    <div style="background-color: rgb(255, 0, 0)">
        {{ r }}
    </div>
</template>

<style scoped>
div {
    padding: 2rem;
    text-align: center;
}
</style>