<template>
	<div class="container">
    <h2>Main Dice</h2>
		<div class="main-dice" @click="mainDiceStore.rollDice">
      <div>{{ mainDice.result }}</div>
      <img src="../assets/dice-logo.svg" alt="dice" v-bind:class="{ rolling: isRolling }" />
      <div>{{ mainDice.sides }}</div>
    </div>
		<div class="stored-currency">Alea: {{ currency.storedCurrency }}</div>
    <div class="active-dice">
      <div class="sum" v-if="resultSum">{{ resultSum }}</div>
      <div class="dice-container">
        <div v-for="dice in activeDices" :key="dice.id">
          <DiceActive :dice-id="dice.id" />
        </div>
      </div>
      <button type="button" @click="activeDiceStore.rollDices" :disabled="disabled">Roll</button>
    </div>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useActiveDiceStore } from "../stores/ActiveDiceStore"
import { useCurrencyStore } from "../stores/CurrencyStore"
import { useMainDiceStore } from "../stores/MainDiceStore"
import DiceActive from "./DiceActive.vue"

const mainDiceStore = useMainDiceStore()
const { mainDice, isRolling } = storeToRefs(mainDiceStore)
const activeDiceStore = useActiveDiceStore()
const { activeDices, resultSum, disabled } = storeToRefs(activeDiceStore)
const currency = useCurrencyStore()
</script>

<style lang="scss" scoped>
@use "../assets/scss/section";
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: section.$padding 5px;
  h2 {
    @include section.h2;
  }
  .main-dice {
    min-width: 100px;
    img {
      max-width: section.$m-dice-width;
      cursor: pointer;
    }
    // img:hover {
    //   transform: scale(1.1);
    // }
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
  button {
    width: 100px;
    height: 48px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  .active-dice {
    display: flex;
    flex-direction: column;
    align-items: center;
    .sum {
      text-align: center;
      font-size: 1.4em;
      position: absolute;
    }
    .dice-container {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
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
