<template>
	<header class="bg-dark">
		<div class="container">
			<nav class="navbar navbar-expand">
				<a href="#" class="link navbar-brand mr-auto">
					<img 
						src="./../assets/logo.svg" 
						alt="Hcode Treinamentos"
						class="img d-inline-block align-top"
						id="logo">
					Futebol Clube
				</a>
				<div class="links mr-2">
					<a href="#" class="text-light btn mr-5">Início</a>
					<a href="#" class="text-light btn mr-5">Times</a>
					<a href="#" class="text-light btn mr-5">Classificações</a>
				</div>
			</nav>
		</div>
	</header>
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
	.links {
		display: inline-flex;
	}
	.link {
		color: #D48E23;
		font-size: 30px;
		font-family: 'Rajdhani'
	}
	.links a:focus {
		outline: none !important;
		box-shadow: none
	}
</style>