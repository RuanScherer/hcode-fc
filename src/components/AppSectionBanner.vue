<template>
	<article class="mt-3">
		<div class="container">
			<div class="row">
				<div class="col-5 text-center principal-news">
					<h2 class="p-1">Veja os últimos resultados do campeonato</h2>
				</div>
				<div class="col-5 offset-2 text-center principal-news">
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
	.container .row {
		height: 300px;
	}
	.container .row .col-5 {
		background-repeat: no-repeat;
		background-size: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.container .row .col-5:first-child {
		background-image: url("../assets/football.jpg");
	}
	.container .row .col-5:nth-child(2) {
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