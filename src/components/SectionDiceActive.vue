<template>
  <div class="active-container">
    <div class="sum" v-if="resultSum">{{ resultSum }}</div>
    <div class="dice-container">
      <DiceActive
        v-for="dice in activeDices"
        :key="dice.id"
        :dice-id="dice.id"
      />
    </div>
    <button type="button" @click="activeDiceStore.rollDices" :disabled="disabled">Roll</button>
  </div>
</template>

<script setup>
import { useActiveDiceStore } from "../stores/ActiveDiceStore"
import { storeToRefs } from "pinia"
import DiceActive from './DiceActive.vue'

const activeDiceStore = useActiveDiceStore()
const { activeDices, resultSum, disabled } = storeToRefs(activeDiceStore)
</script>

<style lang="scss" scoped>
.active-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .sum {
    text-align: center;
    font-size: 1.4em;
    position: absolute;
  }

  .dice-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }
  button {
    width: 100px;
    height: 48px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>