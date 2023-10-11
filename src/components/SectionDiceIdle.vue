<template>
	<div class="container">
		<h2>Idle Dices</h2>
		<div class="dice-container">
			<div v-for="side in idleDiceStore.groupBySides" class="dice-sides-container">
				<div v-for="dice in side">
					<img src="../assets/dice-logo.svg" alt="dice" />
					<div>{{ dice.sides }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useIdleDiceStore } from "../stores/IdleDiceStore"

const idleDiceStore = useIdleDiceStore()
</script>

<style lang="scss" scoped>
@use "../assets/scss/section";
.container {
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
			img {
				max-width: section.$i-dice-width;
			}
		}
	}
}
</style>
