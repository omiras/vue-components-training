<script setup>

const props = defineProps({
    min: Number,
    max: Number
})

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomValue = getRandom(props.min,props.max)

</script>

<template>
<div>
    Random value between {{ min }} and {{ max }} : {{ randomValue }}
</div>
</template>

<style scoped>
div {
    color: #eee;
    border: 1px solid #ccc;
}
</style>