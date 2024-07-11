import { defineStore } from "pinia";
import { useActiveDiceStore } from "./ActiveDiceStore";

export const useCurrencyStore = defineStore("currencyStore", {
  state: () => ({
    totalCurrency: 0,
    storedCurrency: 0,
    allTimeCurrency: 0,
  }),
  actions: {
		storeCurrency(newStoredCurrency) {
			this.storedCurrency = newStoredCurrency
		},
    updateTotalCurrency(newTotalCurrency) {
      this.totalCurrency = newTotalCurrency
      this.allTimeCurrency += this.totalCurrency

      const activeDiceStore = useActiveDiceStore()
      const activeDices = activeDiceStore.activeDices
      activeDices.forEach(dice => {
        if (this.allTimeCurrency > dice.cost) dice.unlocked = true
      });
    },
  },
});
