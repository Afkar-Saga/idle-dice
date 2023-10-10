import { defineStore } from "pinia"
import { useCurrencyStore } from "./CurrencyStore"
import { useMainDiceStore } from "./MainDiceStore"
import { useIdleDiceStore } from "./IdleDiceStore"

let id = 1
const generators = [
	{
		name: "4-Sided Dice Generator",
		diceSides: 4,
	},
	{
		name: "6-Sided Dice Generator",
		diceSides: 6,
	},
	{
		name: "8-Sided Dice Generator",
		diceSides: 8,
	},
	{
		name: "10-Sided Dice Generator",
		diceSides: 10,
	},
	{
		name: "12-Sided Dice Generator",
		diceSides: 12,
	},
	{
		name: "20-Sided Dice Generator",
		diceSides: 20,
	},
]
generators.forEach(function(generator) {
	generator.id = id++
	generator.cost = 10**(generator.id * generator.diceSides / 4)
	generator.interval = generator.id * generator.diceSides * 1000
	generator.multiplier = 1
	generator.count = 0
})

export const useGeneratorStore = defineStore("generatorStore", {
	state: () => ({
		generators: generators
	}),
	getters: {
		isGeneratorAvailable: state => generatorId => {
			const generator = state.generators.find(g => g.id === generatorId)
			if (!generator) return false
			const mainDice = useMainDiceStore()
			return mainDice.mainDiceSides >= generator.diceSides
		},
	},
	actions: {
		buyGenerator(generatorId) {
			const generator = this.generators.find(g => g.id === generatorId)
			if (!generator) return
			const currency = useCurrencyStore()
			const mainDice = useMainDiceStore()
			if (currency.totalCurrency >= generator.cost && mainDice.mainDiceSides >= generator.diceSides) {
				currency.updateTotalCurrency(currency.totalCurrency - generator.cost)
				generator.count++
			}
		},
		rollDice(generatorId) {
			const generator = this.generators.find(g => g.id === generatorId)

			// Simulate rolling a dice
			const diceResult = Math.floor(Math.random() * generator.diceSides) + 1
			const generatedIdleDices = diceResult * generator.count * generator.multiplier

			const idleDice = useIdleDiceStore()
			idleDice.addIdleDices(generatedIdleDices, generator.diceSides)
			console.log(`Generated ${generatedIdleDices} idle dices for ${generator.name}`)
		},
	},
})
