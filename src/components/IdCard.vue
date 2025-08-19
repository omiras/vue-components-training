<script setup>

// La variable firstName que es informada por el componente padre esta disponible indemediatamente en el <template>
defineProps({
    lastName: String,
    firstName: String,
    height: Number,
    gender: String, //male, female, non-binary
    picture: String,
    birth: Date
})

// Aquí va todo el JavaScvript
</script>

<template>
 <!-- Recomiendo empezar haciendo una pequeña parte estática-->
  <!-- Cuando veas que mas o menos se empieza a ver como quieres, empezar a pasar propiedades -->
  <div class="container">
    <img :src="picture" alt="">
    <div>
        <p><strong>First name: </strong>{{ firstName.toUpperCase() }}</p>
        <p><strong>Last name: </strong>{{ lastName }}</p>
        <p><strong>Height: </strong> {{ height / 100 }}m</p>
        <p><strong>Gender: </strong> {{ gender }}</p>
        <p><strong>Birth:</strong> {{ birth.toDateString() }}</p>
    </div>
  </div>
</template>

<!-- El modificar scoped permite que todos los estilos definidos aquí se apliquen solamente al componente -->
<style scoped>

div > img {
    margin-right: 1rem;
    width: 100px;
    
}

div.container {
    display: flex;
    border: 2px solid #ccc;
    padding: 1rem;
}
</style>

