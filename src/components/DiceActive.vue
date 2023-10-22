<template>
	<div v-if="unlocked" :class="{bought: dice.bought}">
		<TheDice
		  :side="dice.sides"
      :result="dice.result"
      :is-rolling="dice.isRolling"
		/>
    <div v-if="!dice.bought" class="cost">
      <div>Cost: {{ dice.cost }}</div>
      <button type="button" @click="activeDiceStore.buyDice(dice.id)">Buy</button>
    </div>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { useActiveDiceStore } from '../stores/ActiveDiceStore'
import { useCurrencyStore } from "../stores/CurrencyStore"
import { computed } from "vue"
import TheDice from "./TheDice.vue"
const props = defineProps({
	diceId: Number,
})

const currency = useCurrencyStore()
const { totalCurrency } = storeToRefs(currency)
const activeDiceStore = useActiveDiceStore()
const { activeDices } = storeToRefs(activeDiceStore)
const dice = activeDices.value.find(d => d.id == props.diceId)
const unlocked = computed(() => {
  return totalCurrency.value >= dice.cost
})

</script>

<style lang="scss" scoped>
@use '../assets/scss/dice';
img {
  width: dice.$active-width;
}
</style>