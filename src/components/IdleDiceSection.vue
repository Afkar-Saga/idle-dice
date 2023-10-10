<template>
  <div class="container">
    <h2>Idle Dices</h2>
    <div class="dice">
      <div v-for="dice in idleDices">{{ dice.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useIdleDiceStore } from '../stores/IdleDiceStore'
const idleDice = useIdleDiceStore()
const idleDices = computed(() => idleDice.idleDices)
idleDice.rollDice()
</script>

<style lang="scss" scoped>
@use "../assets/scss/section";
.container {
  text-align: center;
  padding: section.$padding;
  .dice {
    display: grid;
    grid-template-columns: repeat(10, auto);
    gap: 5px;
    font-size: 8px;
  }
}
</style>