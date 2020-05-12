import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		championship: "Campeonato Brasileiro",
		club: "Hcode Treinamentos",
	},
	getters: {
		getChampionship: (state) => state.championship,
		getClub: (state) => state.club
	}
})