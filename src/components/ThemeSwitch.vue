<template>
	<div class="theme-switch-wrapper">
		<label for="checkbox" class="theme-switch">
			<input type="checkbox" name="checkbox" id="checkbox" @change="changeTheme" checked />
			<div class="slider round"></div>
		</label>
	</div>
</template>

<script setup>
const changeTheme = e => {
	e.target.checked
		? document.documentElement.setAttribute("data-theme", "dark")
		: document.documentElement.setAttribute("data-theme", "light")
}
</script>

<style lang="scss" scoped>
.theme-switch-wrapper {
	display: flex;
	align-items: center;
	position: absolute;
	right: 0;
	transform: translate(-5px, 5px);
	.theme-switch {
		display: inline-block;
		height: 34px;
		width: 60px;
		input {
			display: none;
		}
		input:checked + .slider {
			background-color: #66bb6a;
		}
		input:checked + .slider:before {
			transform: translateX(26px);
		}
		.slider {
			background-color: #ccc;
			bottom: 0;
			left: 0;
			top: 0;
			right: 0;
			position: absolute;
			cursor: pointer;
			transition: 0.4s;
		}
		.slider:before {
			content: "";
			background-color: #fff;
			bottom: 4px;
			left: 4px;
			width: 26px;
			height: 26px;
			position: absolute;
			transition: 0.4s;
		}
		.slider.round {
			border-radius: 34px;
		}
		.slider:before {
			border-radius: 50%;
		}
	}
}
</style>
