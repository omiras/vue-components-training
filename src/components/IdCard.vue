<script setup>
defineProps(['lastName', 'firstName', 'gender', 'height', 'birth', 'picture'])
</script>

<template>
    <div class="container">
        <img :src="picture" alt="">

        <div>
            <p><strong>First Name:</strong> {{ firstName }}</p>
            <p><strong>Last Name:</strong> {{ lastName }}</p>
            <p><strong>Gender:</strong> {{ gender }}</p>
            <p><strong>Height:</strong>{{ height / 100 }}m</p>
            <p><strong>Birth:</strong> {{ birth.toDateString() }}</p>
        </div>
    </div>
</template>

<style scoped>
div.container {
    display: flex;
    gap: 1rem;
    border: 1px solid black;
    padding: 1rem;
    max-width: 500px;
}
</style>