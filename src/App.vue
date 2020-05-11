<template>
	<div id="app">
		<AppHeader 
			@change-championship="changeChampionship"
			@change-component="changeComponent"/>
		<section>
			<div>
				<div class="container">
					<h3 class="mt-5">Você está vendo notícias do {{ championship }}</h3>
				</div>
				<component :is="currentComponent"></component>
			</div>
		</section>
		<div class="container">
			<div class="d-flex flex-wrap my-club my-5">
				<h4 class="col-md-6">
					Seu clube é: {{ club }}
				</h4>
				<div class="col-md-6">
					<AppInput v-model="club" placeholder="Seu clube"/>
				</div>
			</div>
		</div>
		<AppFooter/>
	</div>
</template>

<script>
	import AppHeader from './components/AppHeader'
	import AppSectionBanner from './components/AppSectionBanner'
	import AppSectionNews from './components/AppSectionNews'
	import AppInput from './components/AppInput'
	import AppFooter from './components/AppFooter'
	export default {
		name: 'App',
		components: {
			AppHeader,
			AppSectionBanner,
			AppSectionNews,
			AppInput,
			AppFooter
		},
		data() {
			return {
				championship: 'Campeonato Brasileiro',
				club: 'Hcode Treinamentos',
				currentComponent: 'AppSectionBanner'
			}
		},
		methods: {
			changeChampionship(value) {
				this.championship = value
			},
			changeComponent(value) {
				this.currentComponent = value
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