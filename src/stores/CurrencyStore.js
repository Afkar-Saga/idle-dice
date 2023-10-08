import { defineStore } from "pinia";

export const useCurrencyStore = defineStore("currencyStore", {
  state: () => ({
    totalCurrency: 10,
  }),
  actions: {
    updateTotalCurrency(newTotalCurrency) {
      this.totalCurrency = newTotalCurrency;
    },
  },
});
