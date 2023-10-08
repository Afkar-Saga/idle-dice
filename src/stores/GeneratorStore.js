import { defineStore } from "pinia"
import { useCurrencyStore } from "./CurrencyStore"
import { useMainDiceStore } from "./MainDiceStore"

export const useGeneratorStore = defineStore("generatorStore", {
	state: () => ({
		generators: [
			{
				id: 1,
				name: "4-Sided Dice Generator",
				cost: 10,
				requiredDiceSides: 4,
                interval: 5000,
				multiplier: 1,
				count: 0,
			},
			{
				id: 2,
				name: "6-Sided Dice Generator",
				cost: 100,
				requiredDiceSides: 6,
                interval: 10000,
				multiplier: 1,
				count: 0,
			},
			{
				id: 3,
				name: "8-Sided Dice Generator",
				cost: 1000,
				requiredDiceSides: 8,
                interval: 20000,
				multiplier: 1,
				count: 0,
			},
			{
				id: 4,
				name: "10-Sided Dice Generator",
				cost: 10000,
				requiredDiceSides: 10,
                interval: 30000,
				multiplier: 1,
				count: 0,
			},
			{
				id: 5,
				name: "12-Sided Dice Generator",
				cost: 100000,
				requiredDiceSides: 12,
                interval: 45000,
				multiplier: 1,
				count: 0,
			},
			{
				id: 6,
				name: "20-Sided Dice Generator",
				cost: 1000000,
				requiredDiceSides: 20,
                interval: 60000,
				multiplier: 1,
				count: 0,
			},
		],
	}),
	getters: {
		isGeneratorAvailable() {
			const mainDice = useMainDiceStore()
			return generator => mainDice.mainDiceSides >= generator.requiredDiceSides
		},
	},
	actions: {
		buyGenerator(generator) {
			const currency = useCurrencyStore()
			const mainDice = useMainDiceStore()
			if (currency.totalCurrency >= generator.cost && mainDice.mainDiceSides >= generator.requiredDiceSides) {
				currency.updateTotalCurrency(currency.totalCurrency - generator.cost)
				generator.count++
			}
		},
		rollDice(generator) {
			// Simulate rolling a dice
			const diceResult = Math.floor(Math.random() * generator.requiredDiceSides) + 1
			const generatedIdleDices = diceResult * generator.count * generator.multiplier

			// don't have idle dices yet so i'll just console.log it ¯\_(ツ)_/¯
			console.log(`Generated ${generatedIdleDices} idle dices for ${generator.name}`)
		},
	},
})
