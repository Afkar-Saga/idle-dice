<template>
	<div class="container">
    <h2>Main Dice</h2>
		<img src="../assets/dice-logo.svg" alt="dice" />
		<div class="result">{{ mainDice.storedIdleResults }}</div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: section.$padding 5px;
  h2 {
    @include section.h2;
  }
  img {
    max-width: section.$m-dice-width;
    cursor: pointer;
    animation: rotate 100s linear infinite;
  }
  img:hover {
    transform: scale(1.1);
  }
  .result {
    font-size: 30px;
    margin: 20px 0;
  }
  button {
    width: 100px;
    height: 48px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
}
@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
