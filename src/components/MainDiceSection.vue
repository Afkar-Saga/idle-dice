<template>
	<div class="container">
		<img src="../assets/dice-logo.svg" alt="dice" />
		<div>{{ mainDice.storedIdleResults }}</div>
    <button type="button">Roll</button>
	</div>
</template>

<script setup>
import { useMainDiceStore } from "../stores/MainDiceStore"
const mainDice = useMainDiceStore()
</script>

<style lang="scss" scoped>
@use "../assets/scss/section";
.container {
  text-align: center;
  padding: section.$padding 5px;
  img {
    max-width: 120px;
  }
}
</style>
