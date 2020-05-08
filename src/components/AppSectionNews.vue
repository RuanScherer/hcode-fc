<template>
	<section class="py-3 mt-4">
		<div class="container">
			<AppSectionNewsIndividual
				img="news1.jpg"
				imgInfo="Notícia 1"
				newsTitle="Começam os treinos para a nova temporada"
				newsContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				newsDate="01/01/2020"
			/>
			<AppSectionNewsIndividual
				img="news2.jpg"
				imgInfo="Notícia 2"
				newsTitle="Jogo de quarta-feira termina empatado"
				newsContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				newsDate="07/01/2020"
			/>
			<AppSectionNewsIndividual
				img="news3.jpg"
				imgInfo="Notícia 3"
				newsTitle="A inauguração do novo estádio será na semana que vem"
				newsContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				newsDate="20/01/2020"
			/>
		</div>
	</section>
</template>

<script>
	import AppSectionNewsIndividual from './AppSectionNewsIndividual'
	export default {
		name: 'AppSectionNews',
		components: {
			AppSectionNewsIndividual
		}
	}
</script>

<style scoped>
	section {
		background-color: #F37520
	}
</style>