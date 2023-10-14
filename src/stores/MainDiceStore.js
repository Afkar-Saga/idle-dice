import { defineStore } from "pinia"
import { useCurrencyStore } from "./CurrencyStore"
import { Dice } from "../dice"

export const useMainDiceStore = defineStore("mainDiceStore", {
	state: () => ({
		mainDice: new Dice(4),
		isRolling: false,
	}),
	actions: {
		rollDice() {
			setTimeout(() => {
				this.isRolling = false
				this.mainDice.roll()
				const currency = useCurrencyStore()
				currency.updateTotalCurrency(currency.totalCurrency + currency.storedCurrency * this.mainDice.result)
				currency.storeCurrency(0)
			}, 2000)
			this.isRolling = true
		}
	}
})
