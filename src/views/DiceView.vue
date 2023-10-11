<template>
	<div class="sectionContainer">
		<SectionShop />
		<SectionDiceIdle />
		<SectionDiceMain />
	</div>
</template>

<script setup>
import SectionShop from "../components/SectionShop.vue"
import SectionDiceIdle from "../components/SectionDiceIdle.vue"
import SectionDiceMain from "../components/SectionDiceMain.vue"
</script>

<style lang="scss" scoped>
.sectionContainer {
	height: 100vh;
	display: grid;
	grid-template-columns: 2fr 3fr 2fr;
}
</style>
