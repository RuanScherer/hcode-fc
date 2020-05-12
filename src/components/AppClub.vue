<template>
	<div class="container my-5">
		<AppInput placeholder="Seu clube"/>
	</div>
</template>

<script>
	import AppInput from './AppInput'
	import { mapGetters } from 'vuex'
	export default {
		name: 'AppClub',
		components: {
			AppInput
		},
		computed: {
			...mapGetters({ club: 'getClub' })
		}
	}
</script>