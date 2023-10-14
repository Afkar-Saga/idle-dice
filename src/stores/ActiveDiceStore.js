import { defineStore } from "pinia"
import { ActiveDice } from "../dice"
import { useCurrencyStore } from "./CurrencyStore";

export const useActiveDiceStore = defineStore('activeDiceStore', {
  state: () => ({
    /** @type {ActiveDice[]} */
    activeDices: [new ActiveDice(4)],
    resultSum: 0,
    disabled: false,
  }),
  actions: {
    rollDices() {
      this.disabled = true
      setTimeout(() => {
        this.resultSum = 0
        this.disabled = false
      }, 1000)
      const currency = useCurrencyStore()
      this.activeDices.forEach(dice => {
        this.resultSum += dice.roll()
      })
      currency.storeCurrency(currency.storedCurrency + this.resultSum)
    }
  }
})