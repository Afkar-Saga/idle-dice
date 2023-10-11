<template>
	<div>
		<ThemeSwitch />
		<Header />

		<DiceView />
	</div>
</template>

<script setup>
import Header from "./components/TheHeader.vue"
import ThemeSwitch from "./components/ThemeSwitch.vue"
import DiceView from "./views/DiceView.vue"
</script>

<style lang="scss" scoped></style>
