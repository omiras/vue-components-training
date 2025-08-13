<script setup>
import { computed } from 'vue';
import { rgbToHex } from '../utils';

const props = defineProps({
    r: Number,
    g: Number,
    b: Number
})

const rgbString = computed(() => {
    return `rgb(${props.r}, ${props.g}, ${props.b})`
})

const hexString = computed(() => rgbToHex(props.r, props.g, props.b))

const textColor = computed(() => {
  // Cálculo de luminancia relativa (fórmula WCAG)
  const luminance = (0.299 * props.r + 0.587 * props.g + 0.114 * props.b) / 255;
  return luminance > 0.5 ? 'black' : 'white';
});

</script>

<template>
    <div class="container" :style="{ backgroundColor: rgbString, color: textColor }">
        <div>
            <div>{{ rgbString }}</div>
            <div>{{ hexString }}</div>
        </div>
    </div>
</template>

<style scoped>
div.container {
    border: 1px solid #ccc;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>