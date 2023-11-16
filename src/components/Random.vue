<script setup>

import { getRandomNumber } from '../util';

defineProps(['min', 'max'])
</script>

<template>
    <div>
        <!-- Corrregir 13:51. calucular un número aleatorio entre min y max y colocarlo donde la Z -->
        Random value between {{ min }} and {{ max }} => {{ getRandomNumber(min, max) }}
    </div>
</template>

<style scoped>
div {
    border: 1px solid black;
    max-width: 400px;
}
</style>