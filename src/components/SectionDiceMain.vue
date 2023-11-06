<template>
	<div class="main-container">
    <h2>Main Dice</h2>
		<div class="main-dice" @click="mainDiceStore.rollDice">
      <div>{{ mainDice.result }}</div>
      <img src="../assets/dice-logo.svg" alt="dice" :class="{ rolling: mainDice.isRolling }" />
      <div>{{ mainDice.sides }}</div>
    </div>
		<div class="stored-currency">Alea: {{ currency.storedCurrency }}</div>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCurrencyStore } from "../stores/CurrencyStore"
import { useMainDiceStore } from "../stores/MainDiceStore"

const mainDiceStore = useMainDiceStore()
const { mainDice } = storeToRefs(mainDiceStore)
const currency = useCurrencyStore()
</script>

<style lang="scss" scoped>
@use "../assets/scss/section";
@use "../assets/scss/dice";
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: section.$padding 5px;
  h2 {
    @include section.h2;
  }
  .main-dice {
    min-width: 100px;
    img {
      max-width: dice.$main-width;
      cursor: pointer;
    }
    img:hover {
      transform: scale(1.1);
    }
    .idle {
      animation: rotateZ 100s linear infinite;
    }
    .rolling {
      animation: rolling 2s ease-out;
    }
  }
  .stored-currency {
    font-size: 30px;
    margin: 20px 0;
  }
}
@keyframes rotateZ {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(1080deg);
  }
}
@keyframes rolling {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>
