<template>
	<div class="sectionContainer">
		<GeneratorSection />
		<IdleDiceSection />
		<MainDiceSection />
	</div>
</template>

<script setup>
import GeneratorSection from "../components/GeneratorSection.vue"
import IdleDiceSection from "../components/IdleDiceSection.vue"
import MainDiceSection from "../components/MainDiceSection.vue"
</script>

<style lang="scss" scoped>
.sectionContainer {
	height: 100%;
	display: grid;
	grid-template-columns: 2fr 3fr 2fr;
}
</style>
