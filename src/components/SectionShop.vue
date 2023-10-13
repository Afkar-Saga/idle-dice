<template>
	<div class="container">
		<h2>Shops</h2>
		<div v-for="shop in shops" :key="shop.dice">
			<div v-if="mainDice.sides >= shop.dice.sides" class="shop" @click="shopStore.buyDice(shop.dice)">
				<img src="../assets/dice-logo.svg" alt="dice">
				<h4>D{{ shop.dice.sides }}</h4>
				<div class="cost">Cost: {{ shop.cost }}</div>
				<div class="amount">{{ shop.amount }}</div>
				<div v-if="shop.dice.result" class="result">{{ shop.dice.result }}</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useMainDiceStore } from '../stores/MainDiceStore'
import { useShopStore } from '../stores/ShopStore'

const mainDice = useMainDiceStore()
const shopStore = useShopStore()
const { shops } = storeToRefs(shopStore)
</script>

<style lang="scss" scoped>
@use '../assets/scss/section';
.container {
	padding: section.$padding 8px;
	h2 {
		@include section.h2;
	}
	.shop {
		background-color: rgba($color: #373, $alpha: 0.373);
		border: .2px solid #666;
		border-radius: 7px;
		margin-bottom: 10px;
		width: 280px;
		height: 100px;
		display: grid;
		grid-template-columns: 2fr 3fr 1fr .1fr;
		grid-template-rows: 1fr 1fr;
		cursor: pointer;
		img {
			max-width: 100%;
			grid-column: 1;
			grid-row: 1 / span 2;
			padding: 10px;
		}
		h4, .cost {
			grid-column: 2;
		}
		h4 {
			padding: 10px 0;
			font-size: 24px;
		}
		.cost {
			grid-row: 2;
		}
		.amount {
			grid-column: 3;
			grid-row: 1 / span 2;
			place-self: center;
			font-size: 4em;
		}
		.result {
			grid-row: 1 / span 2;
			place-self: center;
			transform: translateX(30px);
		}
	}
	.shop:hover {
		background-color: rgba($color: #5a5, $alpha: 0.5);
	}
	.shop:active {
		transform: scale(1.03);
	}
}
</style>
