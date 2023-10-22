<template>
	<div>
		<img src="../assets/dice-logo.svg" alt="dice" />
		<div>{{ dice.sides }}</div>
		<div>{{ dice.result }}</div>
	</div>
</template>

<script setup>
import { onMounted } from "vue"
import { storeToRefs } from "pinia"
import { useIdleDiceStore } from "../stores/IdleDiceStore"
import { useCurrencyStore } from "../stores/CurrencyStore"
const props = defineProps({
	diceId: Number,
})

const currency = useCurrencyStore()
const idleDiceStore = useIdleDiceStore()
const { idleDices } = storeToRefs(idleDiceStore)
const dice = idleDices.value.find(d => d.id === props.diceId)

onMounted(() => {
	dice.idleRoll(currency)
})
</script>

<style lang="scss" scoped>
@use '../assets/scss/dice';
img {
	max-width: dice.$idle-width;
}
</style>
