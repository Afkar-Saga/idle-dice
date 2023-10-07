<script setup>
import { ref } from 'vue'
import GeneratorSection from '../components/GeneratorSection.vue';

const totalCurrency = ref(10)
const mainDiceSides = ref(4)

const generators = ref([
  {
    id: 1,
    name: '4-Sided Dice Generator',
    cost: 10,
    requiredDiceSides: 4,
    multiplier: 1,
    count: 0
  },
  {
    id: 2,
    name: '6-Sided Dice Generator',
    cost: 100,
    requiredDiceSides: 6,
    multiplier: 1,
    count: 0
  },
  {
    id: 3,
    name: '8-Sided Dice Generator',
    cost: 1000,
    requiredDiceSides: 8,
    multiplier: 1,
    count: 0
  },
  {
    id: 4,
    name: '10-Sided Dice Generator',
    cost: 10000,
    requiredDiceSides: 10,
    multiplier: 1,
    count: 0
  },
  {
    id: 5,
    name: '12-Sided Dice Generator',
    cost: 100000,
    requiredDiceSides: 12,
    multiplier: 1,
    count: 0
  },
  {
    id: 6,
    name: '20-Sided Dice Generator',
    cost: 1000000,
    requiredDiceSides: 20,
    multiplier: 1,
    count: 0
  },
])
</script>

<template>
    <div>
        <div style="font-size: 4em;">Talis: {{ totalCurrency }}</div>
        <GeneratorSection
          :generators="generators"
          :main-dice-sides="mainDiceSides"
          :total-currency="totalCurrency"
          @update-total-currency="totalCurrency = $event"
        />
    </div>
</template>