<script setup>
    const name = "Vue 3";
    const styleColor = "color: red;";
    const active = true;
    const colors = ["blue", "red", "green"];
    const counter = 1;
</script>

<template>
    <h1>Hola {{ name }}!</h1>
    <h2 :style="styleColor">Hola {{ name.toUpperCase() }}</h2>
    <h3>{{ active ? "Estoy activado" : "Estoy desactivado" }}</h3>
    <h4 :style="`color: ${colors[2]}`">Color con interpolación</h4>
    <h5>Contador: {{ counter + 1 }}</h5>
</template>