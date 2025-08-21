<script setup>

defineEmits({
    operation: Number,
    reset: String
})

</script>

<template>
<button @click="$emit('operation', 1)">+1</button>
<button @click="$emit('operation', -1)">-1</button>
<button @click="$emit('reset')">Reset</button>
</template>

<style scoped>

</style>