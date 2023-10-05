const currency = document.querySelector("#currency")
const diceContainer = document.querySelector(".dice")
const diceRoll = document.querySelector(".dice-roll")
const diceLevel = document.querySelector(".dice-level")
const diceMult = document.querySelector(".dice-mult")
const diceUpgradeBtn = document.querySelector('.btn-upgrade-dice')
const rollBtn = document.querySelector("#roll")

let currencyAmount = 0
const dice = {
    side: 0,
    level: 1,
    mult: 1,
    cost: 10
}

rollBtn.onclick = () => {
    rollBtn.disabled = true
    setTimeout(rollDice, 300)
}

diceUpgradeBtn.onclick = () => {
    upgradeDice()
}

function rollDice() {
    dice.side = Math.ceil(Math.random() * 4)
    diceRoll.textContent = dice.side
    currencyAmount += dice.side * dice.mult
    currency.textContent = currencyAmount
    rollBtn.disabled = false
}

function updateDice() {
    diceLevel.textContent = `Level: ${dice.level}`
    diceMult.textContent = `Multiplier: ${dice.mult}`
    diceUpgradeBtn.textContent = dice.cost.toFixed(1)
}

function upgradeDice() {
    if (dice.cost > currencyAmount) return
    currencyAmount -= dice.cost
    dice.level++
    dice.mult++
    dice.cost *= dice.level % 3 == 2 ? 2.5 : 2
    currency.textContent = currencyAmount
    updateDice()
}

function errorCheck() {
    console.log("I'm here");
}

updateDice()