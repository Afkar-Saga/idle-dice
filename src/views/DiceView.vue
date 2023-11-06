<template>
	<div class="sectionContainer">
		<section-shop />
		<section-dice-idle />
		<section-dice-main />
    <section-dice-active />
	</div>
</template>

<script setup>
import SectionShop from "../components/SectionShop.vue"
import SectionDiceIdle from "../components/SectionDiceIdle.vue"
import SectionDiceMain from "../components/SectionDiceMain.vue"
import SectionDiceActive from "../components/SectionDiceActive.vue"
</script>

<style lang="scss" scoped>
.sectionContainer {
  max-height: 70vh;
	display: grid;
	grid-template-columns: 4fr 7.84fr 4fr;
  grid-template-rows: 1fr 1fr;
}
.sectionContainer > div {
  border: 1px solid white;
  overflow-y: auto;
}
</style>
