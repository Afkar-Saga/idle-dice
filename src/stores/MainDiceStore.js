import { defineStore } from "pinia"
import { useCurrencyStore } from "./CurrencyStore"
import { Dice } from "../dice"

export const useMainDiceStore = defineStore("mainDiceStore", {
	state: () => ({
		mainDice: new Dice(20),
	}),
	actions: {
		rollDice() {
			setTimeout(() => {
				this.mainDice.isRolling = false
				this.mainDice.roll()
				const currency = useCurrencyStore()
				currency.updateTotalCurrency(currency.totalCurrency + currency.storedCurrency * this.mainDice.result)
				currency.storeCurrency(0)
			}, 2000)
			this.mainDice.isRolling = true
		}
	}
})
