export class Dice {
	constructor(sides) {
		this.id = Math.floor(Math.random() * 99999)
		this.sides = sides
		this.result = 0
	}

	roll = () => Math.floor(Math.random() * this.sides) + 1
}

export class IdleDice extends Dice {
	constructor(sides) {
		super(sides)
		this.interval = 5000
	}

	idleRoll(currency) {
		setInterval(() => {
			let roll = this.roll()
			this.result = roll
			currency.storeCurrency(currency.storedCurrency + roll)
		}, this.interval)
	}
}

export class MainDice extends Dice {
	constructor(sides) {
		super(sides)
	}
}

export const rollDice = sides => {
  return Math.floor(Math.random() * sides) + 1
}