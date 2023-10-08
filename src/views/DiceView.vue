<template>
	<div class="sectionContainer">
		<GeneratorSection :main-dice-sides="mainDiceSides" />
		<div></div>
		<div></div>
	</div>
</template>

<script setup>
import { ref } from "vue"
import GeneratorSection from "../components/GeneratorSection.vue"

const mainDiceSides = ref(4)
</script>

<style lang="scss" scoped>
.sectionContainer {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}
</style>
