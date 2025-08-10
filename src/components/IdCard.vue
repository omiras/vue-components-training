<script setup>
defineProps(['firstName', 'lastName', 'gender', 'height', 'birth', 'picture'])
</script>

<template>
    <div class="card">

        <img :src="picture" alt="face photo">
        <div>
            <p><strong>First Name: </strong> {{ firstName }}</p>
            <p><strong>Last Name: </strong>{{ lastName }}</p>
            <p><strong>Gender: </strong>{{ gender }}</p>
            <p><strong>Height: </strong> {{ height / 100 }}m</p>
            <p><strong>Birth: </strong> {{ birth.toLocaleDateString()  }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    gap: 1rem;
    border: 1px solid #ccc;
    padding: 5px;

}

</style>