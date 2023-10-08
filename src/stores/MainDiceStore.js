import { defineStore } from "pinia"

export const useMainDiceStore = defineStore("mainDiceStore", {
	state: () => ({
		mainDiceSides: 4,
	}),
})
