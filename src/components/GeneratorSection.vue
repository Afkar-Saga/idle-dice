<template>
	<div class="container">
		<h2>Generators</h2>
		<div v-for="generator in generators" :key="generator.id">
			<div v-if="generatorStore.isGeneratorAvailable(generator.id)">
				<div>{{ generator.name }}</div>
				<div>You have {{ generator.count }}</div>
				<div>Cost: {{ generator.cost }}</div>
				<div>Interval: {{ generator.interval / 1000 }} seconds</div>
				<button type="button" @click="generatorStore.buyGenerator(generator.id)">Buy</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, computed } from "vue"
import { useGeneratorStore } from "../stores/GeneratorStore"

const generatorStore = useGeneratorStore()
const generators = computed(() => generatorStore.generators)

const autoRoll = () => {
	generators.value.forEach(generator => {
		const rollGenerator = () => {
			if (generatorStore.isGeneratorAvailable(generator.id) && generator.count > 0) {
				generatorStore.rollDice(generator.id)
			}
		}
		setInterval(rollGenerator, generator.interval)
	})
}

onMounted(() => {
	// Start auto roll when the component is mounted
	autoRoll()
})
</script>

<style lang="scss" scoped>
@use '../assets/scss/section';
.container {
	padding: section.$padding 8px;
	h2 {
		text-align: center;
	}
}
</style>
