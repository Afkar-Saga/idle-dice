import { defineStore } from "pinia";
import { useCurrencyStore } from "./CurrencyStore";
import { useIdleDiceStore } from "./IdleDiceStore";
import { Dice } from "../dice";

class Shop {
  constructor(dice, cost) {
    this.dice = dice
    this.cost = cost
    this.amount = 0
  }
}

export const useShopStore = defineStore('shopStore', {
  state: () => ({
    /** @type {Shop[]} */
    shops: [
      new Shop(new Dice(4), 10),
      new Shop(new Dice(6), 100),
      new Shop(new Dice(8), 1000),
      new Shop(new Dice(10), 10000),
      new Shop(new Dice(12), 100000),
      new Shop(new Dice(20), 1000000),
    ]
  }),
  actions: {
    buyDice(diceId) {
      const currency = useCurrencyStore()
      const idleDice = useIdleDiceStore()
      const shop = this.shops.find(s => s.dice.id === diceId)
      if (shop.cost > currency.totalCurrency) return
      currency.updateTotalCurrency(currency.totalCurrency - shop.cost)
      const shopDice = shop.dice
      shopDice.roll()
      if (shopDice.result === shopDice.sides) {
        idleDice.addIdleDices(shopDice.sides)
        shop.amount++
        shop.cost *= (String(shop.cost)[0] == "2") ? 2.5 : 2
      }
    }
  }
})