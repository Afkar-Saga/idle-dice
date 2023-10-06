const { createApp, ref } = Vue

createApp({
    setup() {
        let currencyAmount = ref(0)
        let rolling = ref(false)
        const dice = {
            side: 0,
            level: 1,
            mult: 1,
            cost: 10
        }
        const autoRollUpgrades = {
            level: 0,
            cost: 1000
        }
        const upgrades = {
            bought: ref(false),
            auto1: function() {
                if (autoRollUpgrades.cost > currencyAmount.value) return
                currencyAmount.value -= autoRollUpgrades.cost
                autoRollUpgrades.level++
                upgrades.bought = true
            }
        }

        setInterval(idleRoll, 3000)

        function idleRoll() {
            if (autoRollUpgrades.level == 0) return
            rollTheDice()
        }

        function rollTheDice() {
            rolling.value = true
            setTimeout(rollDice, 300)
        }
        
        function rollDice() {
            dice.side = Math.ceil(Math.random() * 4)
            currencyAmount.value += dice.side * dice.mult
            rolling.value = false
        }
        
        function upgradeDice() {
            if (dice.cost > currencyAmount.value) return
            currencyAmount.value -= dice.cost
            dice.level++
            dice.mult++
            dice.cost *= dice.level % 3 == 2 ? 2.5 : 2
        }
        return {
            currencyAmount,
            rolling,
            dice,
            upgrades,
            autoRollUpgrades,
            rollTheDice,
            upgradeDice
        }
    }
}).mount('#app')
