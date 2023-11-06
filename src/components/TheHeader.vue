<template>
  <div class="header">
    <div class="title">
      <img src="../assets/dice-logo.svg" alt="dice logo" />
      <h1>Dice Incrementum</h1>
    </div>
    <div class="currency">
      Talis: {{ currency.totalCurrency }}
    </div>
  </div>
</template>

<script setup>
import { useCurrencyStore } from "../stores/CurrencyStore"

const currency = useCurrencyStore()
</script>

<style lang="scss" scoped>
.header {
  height: 30vh;
  .title {
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
  .currency {
    text-align: center;
    margin: 20px;
    font-size: 4em;
    color: #00ff00;
}
}
</style>
