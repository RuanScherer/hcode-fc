<template>
	<div id="app">
		<AppHeader @change-championship="changeChampionship"/>
		<section>
			<div>
				<div class="container">
					<h3 class="mt-5">Você está vendo notícias do {{ championship }}</h3>
				</div>
				<AppSectionBanner/>
				<AppSectionNews/>
			</div>
		</section>
		<AppFooter/>
	</div>
</template>

<script>
	import AppHeader from './components/AppHeader'
	import AppSectionBanner from './components/AppSectionBanner'
	import AppSectionNews from './components/AppSectionNews'
	import AppFooter from './components/AppFooter'
	export default {
		name: 'App',
		components: {
			AppHeader,
			AppSectionBanner,
			AppSectionNews,
			AppFooter
		},
		data() {
			return {
				championship: 'Campeonato Brasileiro'
			}
		},
		methods: {
			changeChampionship(value) {
				this.championship = value
			}
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
		box-shadow: none
	}
</style>