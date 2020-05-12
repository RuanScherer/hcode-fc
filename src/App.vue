<template>
	<div id="app">
		<AppHeader/>
		<section>
			<div>
				<div class="container">
					<h3 class="mt-5">Você está vendo notícias do {{ championship }}</h3>
				</div>
				<router-view></router-view>
			</div>
		</section>
		<div class="container">
			<div class="d-flex flex-wrap my-club my-5">
				<h4 class="col-md-6">
					Seu clube é: {{ club }}
				</h4>
				<div class="col-md-6">
					<AppInput placeholder="Seu clube"/>
				</div>
			</div>
		</div>
		<AppFooter/>
	</div>
</template>

<script>
	import AppHeader from './components/AppHeader'
	import AppInput from './components/AppInput'
	import { mapGetters } from 'vuex'
	import AppFooter from './components/AppFooter'
	export default {
		name: 'App',
		components: {
			AppHeader,
			AppInput,
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