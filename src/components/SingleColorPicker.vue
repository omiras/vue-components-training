<script setup>
import { computed, onMounted, ref } from 'vue';

const props = defineProps(['color', 'value'])

const localValue = ref(0)

onMounted(()=> {
    // Valor inicial de la variable de estado que nos proporciona el usuario
    localValue.value = props.value
})

const bgColor = computed(()=> {
    if (props.color == "r") {
        return `rgb(${localValue.value},0,0)`
    } else if (props.color == "g") {
        return `rgb(0,${localValue.value},0)`
    }
    return `rgb(0,0,${localValue.value})`
})

</script>

<template>
    <div class="container">
        <div class="square" :style="{backgroundColor: bgColor}"></div>
        <div>
            <span class="color"> {{ color }}</span>
            <input v-model="localValue" type="number" min="0" max="255">
        </div>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.color {
    margin: 0 0.5rem;
    text-transform: uppercase;
}

.square {
    width: 50px;
    height: 50px;
    border: 2px solid black;
}
</style>