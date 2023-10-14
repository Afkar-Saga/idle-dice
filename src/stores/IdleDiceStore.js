import { defineStore } from "pinia"
import { IdleDice } from "../dice"

export const useIdleDiceStore = defineStore("idleDiceStore", {
	state: () => ({
    /** @type {IdleDice[]} */
		idleDices: [],
	}),
  getters: {
    groupBySides: (state) => {
      return state.idleDices.reduce((memo, x) => {
        if (!memo[x['sides']]) memo[x['sides']] = []
        memo[x['sides']].push(x)
        return memo
      }, {})
    },
  },
	actions: {
		addIdleDices(sides) {
			this.idleDices.push(new IdleDice(sides))
		},
	},
})
