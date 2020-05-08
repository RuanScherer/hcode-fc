<template>
	<article class="my-4">
		<div class="container">
			<div class="d-flex flex-wrap justify-content-center">
				<div class="col-md-5 my-3 my-md-0 text-center principal-news" id="first">
					<h2 class="p-1">Veja os últimos resultados do campeonato</h2>
				</div>
				<div class="col-md-5 my-3 my-md-0 offset-md-2 text-center principal-news" id="second">
					<h2 class="p-1">Venha conhecer o centro de treinamentos da Hcode</h2>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
	export default {
		name: 'AppSectionBanner'
	}
</script>

<style scoped>
	.principal-news {
		background-repeat: no-repeat;
		background-size: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}
	#first {
		background-image: url("../assets/football.jpg");
	}
	#second {
		background-image: url("../assets/football2.jpg");
	}
	h2 {
		margin: 25% 0;
		color: #F6B64E;
		background-color: rgba(0, 0, 0, 0.4);
	}
	.principal-news {
		cursor: pointer;
	}
</style>