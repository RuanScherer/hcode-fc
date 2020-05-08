<template>
	<div id="app">
		<AppHeader/>
		<AppSection/>
		<AppFooter/>
	</div>
</template>

<script>
	import AppHeader from './components/AppHeader'
	import AppSection from './components/AppSection'
	import AppFooter from './components/AppFooter'
	export default {
		name: 'App',
		components: {
			AppHeader,
			AppSection,
			AppFooter
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>