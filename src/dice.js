export class Dice {
	constructor(sides) {
		this.id = Math.floor(Math.random() * 99999)
		this.sides = sides
		this.result = 0
    this.isRolling = false
	}

	roll() { 
		let result = Math.floor(Math.random() * this.sides) + 1
		this.result = result
		return result
	}
}

export class IdleDice extends Dice {
	constructor(sides) {
		super(sides)
		this.interval = 1000
	}

	idleRoll(currency) {
		setInterval(() => {
			this.roll()
			currency.storeCurrency(currency.storedCurrency + this.result)
		}, this.interval)
	}
}

export class ActiveDice extends Dice {
	constructor(sides, cost, bought = false) {
		super(sides)
    this.cost = cost
    this.bought = bought
	}
}