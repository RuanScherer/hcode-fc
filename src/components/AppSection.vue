<template>
	<section>
		<div>
			<AppSectionBanner/>
			<AppSectionNews/>
		</div>
	</section>
</template>

<script>
	import AppSectionBanner from './AppSectionBanner'
	import AppSectionNews from './AppSectionNews'
	export default {
		name: 'AppSection',
		components: {
			AppSectionBanner,
			AppSectionNews
		}
	}
</script>

<style scoped>

</style>