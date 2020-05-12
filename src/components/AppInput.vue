<template>
	<input 
		type="text"
		class="form-control"
		:placeholder="placeholder"
		:value="club"
		@keyup="changeClub($event.target.value)">
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'AppInput',
		props: {
			placeholder: String
		},
		methods: {
			...mapActions(["changeClub"])
		},
		computed: {
			...mapGetters({
				club: "getClub"
			})
		}
	}
</script>

<style scoped>
</style>