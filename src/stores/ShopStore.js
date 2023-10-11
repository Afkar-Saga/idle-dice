import { defineStore } from "pinia";
import { useCurrencyStore } from "./CurrencyStore";
import { useIdleDiceStore } from "./IdleDiceStore";
import { rollDice } from "../dice";

class Shop {
  constructor(dice, cost) {
    this.dice = dice
    this.cost = cost
    this.amount = 0
    this.result = 0
  }
}

export const useShopStore = defineStore('shopStore', {
  state: () => ({
    shops: [
      new Shop(4, 10),
      new Shop(6, 100),
      new Shop(8, 1000),
      new Shop(10, 1000),
      new Shop(12, 10000),
      new Shop(20, 100000),
    ]
  }),
  actions: {
    buyDice(dice) {
      const currency = useCurrencyStore()
      const idleDice = useIdleDiceStore()
      const shop = this.shops.find(d => d.dice === dice)
      if (shop.cost > currency.totalCurrency) return
      currency.totalCurrency -= shop.cost
      const roll = rollDice(shop.dice)
      shop.result = roll
      if (roll === shop.dice) {
        idleDice.addIdleDices(shop.dice)
        shop.amount++
        shop.cost *= (String(shop.cost)[0] == "2") ? 2.5 : 2
      }
    }
  }
})