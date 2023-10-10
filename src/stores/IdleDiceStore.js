import { defineStore } from "pinia";

class IdleDice {
  constructor(sides) {
    this.sides = sides
    this.name = `${this.sides}-sided dice`
  }
}

export const useIdleDiceStore = defineStore("idleDiceStore", {
  state: () => ({
    idleDices: [],
  }),
  actions: {
    addIdleDices(amount, sides) {
      for (let i = 0; i < amount; i++) {
        this.idleDices.unshift(new IdleDice(sides))
      }
    }
  }
})