<template>
	<div class="idle-container">
		<h2>Idle Dices</h2>
		<div class="dice-container">
			<div v-for="side in groupBySides" class="dice-sides-container">
				<div v-for="dice in side" :key="dice.id">
					<DiceIdle :dice-id=dice.id />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import DiceIdle from './DiceIdle.vue'
import { useIdleDiceStore } from "../stores/IdleDiceStore"
import { storeToRefs } from "pinia"

const idleDiceStore = useIdleDiceStore()
const { groupBySides } = storeToRefs(idleDiceStore)

</script>

<style lang="scss" scoped>
@use "../assets/scss/section";
.idle-container {
  grid-row: span 2;
	padding: section.$padding;
	h2 {
		@include section.h2;
	}
	.dice-container {
		display: grid;
		grid-template-rows: repeat(6, auto);
		gap: 5px;
		font-size: 8px;
		.dice-sides-container {
			background-color: rgba($color: #444, $alpha: 0.7);
			padding: 5px;
			display: grid;
			grid-template-columns: repeat(10, auto);
		}
	}
}
</style>
