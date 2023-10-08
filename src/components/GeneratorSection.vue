<template>
	<div class="container">
		<h2>Generators</h2>
		<div v-for="generator in generators" :key="generator.id">
			<div v-if="isGeneratorAvailable(generator)">
				<div>{{ generator.name }}</div>
				<div>You have {{ generator.count }}</div>
				<div>Cost: {{ generator.cost }}</div>
				<button type="button" @click="buyGenerator(generator)">Buy</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, computed } from "vue"
import { useGeneratorStore } from "../stores/GeneratorStore"

const generatorStore = useGeneratorStore()
const generators = computed(() => generatorStore.generators)

const buyGenerator = generator => {
	generatorStore.buyGenerator(generator)
}

const isGeneratorAvailable = generator => {
	return generatorStore.isGeneratorAvailable(generator)
}

const autoRoll = generator => {
	setInterval(() => {
		generatorStore.rollDice(generator)
	}, generator.interval)
}

onMounted(() => {
	// Start auto roll when the component is mounted
	generators.value.forEach(generator => {
		if (isGeneratorAvailable(generator)) autoRoll(generator)
	})
})
</script>

<style lang="scss" scoped>
.container {
	padding: 25px;
	h2 {
		text-align: center;
	}
}
</style>
