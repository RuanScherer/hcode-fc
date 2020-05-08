<template>
	<div id="app">
		<AppHeader/>
		<section>
			<div>
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
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');

	* {
		outline: none;
		text-decoration: none
	}
</style>