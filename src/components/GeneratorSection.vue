<script setup>
import { onMounted } from 'vue'

// Props to pass in variables from Parent Component
const props = defineProps({
    generators: Array,
    totalCurrency: Number,
    mainDiceSides: Number, // higher-level generators will be unlocked based on the main dice
})
// Event emitter to update the total currency in the Parent Component
const emit = defineEmits(['update-total-currency'])

const buyGenerator = generator => {
    if (props.totalCurrency >= generator.cost && props.mainDiceSides >= generator.requiredDiceSides) {
        const newTotalCurrency = props.totalCurrency - generator.cost
        generator.count++

        emit('update-total-currency', newTotalCurrency)
    }
}

const isGeneratorAvailable = generator => {
    return props.mainDiceSides >= generator.requiredDiceSides
}

const rollDice = generator => {
    // Simulate rolling a dice
    const diceResult = Math.floor(Math.random() * generator.requiredDiceSides) + 1
    const generatedIdleDices = diceResult * generator.count * generator.multiplier

    // don't have idle dices yet so i'll just console.log it ¯\_(ツ)_/¯
    console.log(`Generated ${generatedIdleDices} idle dices for ${generator.name}`)
}

const autoRollDice = () => {
    // Rolling every generator if there's at least 1 generator
    for (const generator of props.generators) {
        if (generator.count) {
            rollDice(generator)
        }
    }
}

onMounted(() => {
    // Start auto roll when the component is mounted
    setInterval(autoRollDice, 20000) //change interval later
})
</script>

<template>
    <div>
        <h2>Generators</h2>
        <div v-for="generator in generators" :key="generator.id">
            <div v-if="isGeneratorAvailable(generator)">
                {{ generator.name }} - Cost: {{ generator.cost }} - You have {{ generator.count }}
                <button type="button" @click="buyGenerator(generator)">Buy</button>
            </div>
        </div>
    </div>
</template>