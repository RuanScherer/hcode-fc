<template>
	<div id="app">
		<AppHeader/>
		<section>
			<div>
				<div class="container">
					<h3 class="mt-5">Seu clube é: {{ club }}</h3>
				</div>
				<router-view></router-view>
			</div>
		</section>
		<AppFooter class="mt-5"/>
	</div>
</template>

<script>
	import AppHeader from './components/AppHeader'
	import { mapGetters } from 'vuex'
	import AppFooter from './components/AppFooter'
	export default {
		name: 'App',
		components: {
			AppHeader,
			AppFooter
		},
		computed: {
			...mapGetters({
				championship: 'getChampionship',
				club: 'getClub'
			})
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');

	* {
		outline: none;
		text-decoration: none
	}

	input:focus, select:focus, textarea:focus {
		box-shadow: none !important;
		border-color: var(--dark) !important;
	}
</style>