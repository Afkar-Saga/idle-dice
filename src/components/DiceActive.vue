<template>
	<div>
		<img src="../assets/dice-logo.svg" alt="dice" />
		<div>{{ dice.sides }}</div>
		<div v-if="dice.result">{{ dice.result }}</div>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { useActiveDiceStore } from '../stores/ActiveDiceStore'
const props = defineProps({
	diceId: Number,
})

const activeDiceStore = useActiveDiceStore()
const { activeDices } = storeToRefs(activeDiceStore)
const dice = activeDices.value.find(d => d.id == props.diceId)

</script>

<style lang="scss" scoped>
@use '../assets/scss/section';
img {
	width: section.$a-dice-width;
}
</style>