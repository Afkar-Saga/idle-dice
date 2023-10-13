import { defineStore } from "pinia";

export const useCurrencyStore = defineStore("currencyStore", {
  state: () => ({
    totalCurrency: 100000,
    storedCurrency: 0,
  }),
  actions: {
		storeCurrency(newStoredCurrency) {
			this.storedCurrency = newStoredCurrency
		},
    updateTotalCurrency(newTotalCurrency) {
      this.totalCurrency = newTotalCurrency
    },
  },
});
