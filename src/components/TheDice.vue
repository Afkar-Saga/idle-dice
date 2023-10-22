<template>
  <div class="dice">
    <div class="side">{{ props.side }}</div>
    <img src="../assets/dice-logo.svg" alt="dice" :class="{ rolling: props.isRolling }">
    <div v-if="props.result">{{ props.result }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  side: Number,
  result: Number,
  isRolling: Boolean,
})
</script>

<style lang="scss" scoped>
@use '../assets/scss/dice';
.dice {
  .rolling {
    @include dice.rolling;
  }
}
</style>