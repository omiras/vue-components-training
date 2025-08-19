<script setup>
import { computed } from 'vue';


const props = defineProps({
    rate: Number
})

const fillStarts = computed(()=> {
    return Math.round(props.rate)
})

const emptyStars = computed(()=> {
    return 5 - fillStarts.value
})

</script>

<template>
 <div>
    <span v-for="r in fillStarts">★</span>
    <span v-for="r in emptyStars">☆</span>
 </div>
</template>

<style scoped>
div {
    color: #ccc;
}
</style>