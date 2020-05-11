<template>
	<section class="py-4 mt-4">
		<div class="container">
			<AppSectionNewsIndividual
				v-for="notice in news"
				:key="notice.id"
				:img="'news' + notice.id + '.jpg'"
				:imgInfo="'Notícia' + notice.id"
				:newsDate="notice.date">
				<template #title>
					<h2 class="text-white">{{ notice.title }}</h2>
				</template>
				<p>{{ notice.content | truncate(200) }}</p>
			</AppSectionNewsIndividual>
		</div>
	</section>
</template>

<script>
	import AppSectionNewsIndividual from './AppSectionNewsIndividual'
	export default {
		name: 'AppSectionNews',
		components: {
			AppSectionNewsIndividual
		},
		data() {
			return {
				news: []
			}
		},
		created() {
			this.news = [
				{
					id: 1,
					title: 'Começam os treinos para a nova temporada',
					content: 'Este é um texto de exemplo utilizado para ser apresentado nos componentes de notícias visando popular informações para apresentação da página. Caso este texto ultrapasse uma determinada quantidade de caracteres ele será ocultado e adicionado de "..." no final.',
					date: '2020-01-01'
				},
				{
					id: 2,
					title: 'Jogo de quarta-feira termina empatado',
					content: 'Este é um texto de exemplo utilizado para ser apresentado nos componentes de notícias visando popular informações para apresentação da página. Caso este texto ultrapasse uma determinada quantidade de caracteres ele será ocultado e adicionado de "..." no final.',
					date: '2020-01-07'
				},
				{
					id: 3,
					title: 'A inauguração do novo estádio será na semana que vem',
					content: 'Este é um texto de exemplo utilizado para ser apresentado nos componentes de notícias visando popular informações para apresentação da página. Caso este texto ultrapasse uma determinada quantidade de caracteres ele será ocultado e adicionado de "..." no final.',
					date: '2020-01-20'
				}
			]
		}
	}
</script>

<style scoped>
	section {
		background-color: #F37520
	}
</style>