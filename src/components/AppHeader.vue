<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container">
			<a href="#" class="navbar-brand mr-auto">
				<img 
					src="./../assets/logo.svg" 
					alt="Hcode Treinamentos"
					id="logo">
			</a>
			<button 
				class="navbar-toggler" 
				type="button" 
				data-toggle="collapse" 
				data-target="#nav-menu" 
				aria-controls="nav-menu" 
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="nav-menu">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item mx-2">
						<router-link class="nav-link rounded" to="/">Início</router-link>
					</li>
					<li class="nav-item mx-2">
						<router-link class="nav-link rounded" to="/news">Notícias</router-link>
					</li>
					<li class="nav-item mx-2">
						<router-link class="nav-link rounded" to="/club">Clube</router-link>
					</li>
					<li class="nav-item mx-2">
						<select 
							name="championship" 
							id="select-championship" 
							class="form-control"
							@change="changeChampionship($event.target.value)">
							<option value="">Selecione um campeonato</option>
							<option value="Campeonato Brasileiro" selected>Campeonato Brasileiro</option>
							<option value="Campeonato Espanhol">Campeonato Espanhol</option>
							<option value="Campeonato Inglês">Campeonato Inglês</option>
							<option value="Campeonato Italiano">Campeonato Italiano</option>
						</select>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		name: 'name',
		methods: {
			...mapActions(["changeChampionship"])
		}
	}
</script>

<style scoped>
	#logo {
		width: 150px;
		height: 100%;
	}
	.links a:focus {
		outline: none !important;
		box-shadow: none
	}
	.link-active {
		background-color: var(--light);
		color: var(--dark) !important
	}
</style>