<template>
	<div>
		<img src="/src/assets/dice-logo.svg" alt="dice logo" />
		<h1>Idle Dice</h1>
	</div>
	<div>
		<h2>Talis: {{ currency.totalCurrency }}</h2>
	</div>
</template>

<script setup>
import { useCurrencyStore } from "../stores/CurrencyStore"

const currency = useCurrencyStore()
</script>

<style lang="scss" scoped>
div {
	text-align: center;
	padding-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		max-width: 60px;
	}

	h1 {
		margin: 0;
		font-size: 2em;
		padding-top: 25px;
		margin-left: 15px;
	}
}
</style>
