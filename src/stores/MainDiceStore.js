import { defineStore } from "pinia"
import { useCurrencyStore } from "./CurrencyStore"

export const useMainDiceStore = defineStore("mainDiceStore", {
	state: () => ({
		sides: 4,
	}),
	actions: {
		rollDice() {
			const diceResult = Math.floor(Math.random() * this.mainDiceSides) + 1
			const currency = useCurrencyStore()
			currency.updateTotalCurrency(currency.totalCurrency + this.storedIdleResults * diceResult)
		}
	}
})
