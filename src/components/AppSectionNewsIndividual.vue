<template>
	<div class="row my-3">
		<div class="col-md-3 col-12">
			<img :src="require('../assets/' + this.img)" :alt="imgInfo">
		</div>
		<div class="col-md-9 col-12">
			<slot name="title"></slot>
			<slot>
				Erro ao exibir o conteúdo da notícia
			</slot>
			<span class="font-italic">{{ formatDate(newsDate) }}</span>
		</div>
	</div>
</template>

<script>
	import Utils from './../mixins/UtilsMixins'
	export default {
		name: 'AppSectionNewsIndividual',
		props: {
			img: {
				type: String,
				required: true,
			},
			imgInfo: {
				type: String,
				required: true
			},
			newsDate: {
				type: String,
				required: true
			}
		},
		mixins: [Utils]
	}
</script>

<style scoped>
	img	{
		width: 100%;
	}
	h2 {
		cursor: pointer
	}
</style>