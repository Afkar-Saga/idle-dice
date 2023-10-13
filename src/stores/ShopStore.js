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
    shops: [
      new Shop(new Dice(4), 10),
      new Shop(new Dice(6), 100),
      new Shop(new Dice(8), 1000),
      new Shop(new Dice(10), 1000),
      new Shop(new Dice(12), 10000),
      new Shop(new Dice(20), 100000),
    ]
  }),
  actions: {
    buyDice(dice) {
      const currency = useCurrencyStore()
      const idleDice = useIdleDiceStore()
      const shop = this.shops.find(d => d.dice === dice)
      if (shop.cost > currency.totalCurrency) return
      currency.updateTotalCurrency(currency.totalCurrency - shop.cost)
      let roll = shop.dice.roll()
      shop.dice.result = roll
      if (roll === shop.dice.sides) {
        idleDice.addIdleDices(shop.dice.sides)
        shop.amount++
        shop.cost *= (String(shop.cost)[0] == "2") ? 2.5 : 2
      }
    }
  }
})