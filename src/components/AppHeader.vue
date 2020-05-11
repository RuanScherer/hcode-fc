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
					<li class="nav-item">
						<a class="nav-link" href="#">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Times</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Classificações</a>
					</li>
					<li class="nav-item">
						<select 
							name="championship" 
							id="select-championship" 
							class="form-control"
							@change="$emit('change-championship', $event.target.value)">
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
	export default {
		name: 'name'
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
</style>