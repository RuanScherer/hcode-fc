<template>
	<input 
		type="text"
		class="form-control"
		:placeholder="placeholder"
		:value="value"
		@keyup="$emit('input', $event.target.value)">
</template>

<script>
	export default {
		name: 'AppInput',
		props: {
			placeholder: String, 
			value: String
		}
	}
</script>

<style scoped>
</style>