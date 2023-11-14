<script setup>
defineProps(['lastName', 'firstName', 'gender', 'height', 'birth'])
</script>

<template>
    <div>
        <p><strong>First Name:</strong> {{ firstName }}</p>
        <p><strong>Last Name:</strong> {{ lastName }}</p>
        <p><strong>Gender:</strong> {{ gender }}</p>
        <p><strong>Height:</strong>{{ height / 100 }}m</p>
        <p><strong>Birth:</strong> {{ birth.toDateString() }}</p>

    </div>
</template>

<style scoped>
div {
    border: 1px solid black;
    padding: 1rem;
    max-width: 500px;
}
</style>