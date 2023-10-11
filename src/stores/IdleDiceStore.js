import { defineStore } from "pinia"

class Dice {
	constructor(sides) {
		this.sides = sides
	}
}

export const useIdleDiceStore = defineStore("idleDiceStore", {
	state: () => ({
		idleDices: [{sides: 6}],
	}),
  getters: {
    groupBySides: (state) => {
      return state.idleDices.reduce((memo, x) => {
        if (!memo[x['sides']]) memo[x['sides']] = []
        memo[x['sides']].push(x)
        return memo
      }, {})
    }
  },
	actions: {
		addIdleDices(sides) {
			this.idleDices.push(new Dice(sides))
		},
	},
})
