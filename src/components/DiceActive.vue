<template>
	<div v-if="dice.unlocked" class="dice-active">
		<TheDice
		  :side="dice.sides"
      :result="dice.result"
      :is-rolling="dice.isRolling"
		/>
    <div class="upgrade">
      <button type="button">{{ dice.cost }}</button>
    </div>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { useActiveDiceStore } from '../stores/ActiveDiceStore'
import TheDice from "./TheDice.vue"
const props = defineProps({
	diceId: Number,
})

const activeDiceStore = useActiveDiceStore()
const { activeDices } = storeToRefs(activeDiceStore)
const dice = activeDices.value.find(d => d.id == props.diceId)

</script>

<style lang="scss" scoped>
@use '../assets/scss/dice';
img {
  width: dice.$active-width;
}
</style>