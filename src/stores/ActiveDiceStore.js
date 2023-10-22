import { defineStore } from "pinia"
import { ActiveDice } from "../dice"
import { useCurrencyStore } from "./CurrencyStore";

export const useActiveDiceStore = defineStore('activeDiceStore', {
  state: () => ({
    /** @type {ActiveDice[]} */
    activeDices: [
      new ActiveDice(4, 0, true),
      new ActiveDice(4, 100),
      new ActiveDice(4, 5000),
      new ActiveDice(4, 20000),
      new ActiveDice(4, 100000),
    ],
    resultSum: 0,
    disabled: false,
    interval: 1000,
  }),
  actions: {
    rollDices() {
      this.disabled = true
      setTimeout(() => {
        this.resultSum = 0
        this.disabled = false
      }, this.interval)
      const currency = useCurrencyStore()
      this.activeDices.forEach(dice => {
        if (dice.bought) this.resultSum += dice.roll()
      })
      currency.storeCurrency(currency.storedCurrency + this.resultSum)
    },
    buyDice(diceId) {
      const dice = this.activeDices.find(dice => dice.id === diceId)
      const currency = useCurrencyStore()
      if (currency.totalCurrency < dice.cost) return
      currency.totalCurrency -= dice.cost
      dice.bought = true
    }
  }
})