import { defineStore } from "pinia";

export const useCurrencyStore = defineStore("currencyStore", {
  state: () => ({
    totalCurrency: Infinity,
  }),
  actions: {
    updateTotalCurrency(newTotalCurrency) {
      this.totalCurrency = newTotalCurrency;
    },
  },
});
