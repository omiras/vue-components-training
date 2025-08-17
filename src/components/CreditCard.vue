<script setup>

import { computed } from 'vue'

const props = defineProps({
    bgColor: String,
    type: String,
    number: String,
    expirationMonth: Number,
    expirationYear: Number,
    bank: String,
    owner: String
})

import visa from '../assets/images/visa.png'
import masterCard from '../assets/images/master-card.svg'


const formatLogo = computed(()=> {
    return props.type == 'visa' ? visa: masterCard
})

const formatNumber = computed(()=> {
    return `**** **** **** ${props.number.substring(12)}`
})

const formatDate = computed(() => {
    // Pad month with leading zero if needed
    const month = props.expirationMonth.toString().padStart(2, '0');
    const year = props.expirationYear.toString().substring(2);
    return `${month}/${year}`;
})


</script>

<template>
    <div class="card" :style="{backgroundColor: bgColor}">
            <img :src="formatLogo" alt="">
            <div class="card__number">{{ formatNumber }}</div>
            <div class="card__info">
                <div class="card__expiration">Expires {{ formatDate }} <span class="card__bank">{{ bank }}</span></div>
                <div class="card__owner"> {{ owner }}</div>
            </div>
    </div>
</template>

<style lang="css" scoped>


.card {
    display: inline-flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 8px;
    gap: 0.6em;
    line-height: 1em;
}

.card__number {
    font-weight: bold;
    font-size: 1.2rem;
    align-self: center;
}

.card__bank {
    margin-left: 1em;
}

.card img {
    width: 50px;
    align-self: flex-end;
}


</style>