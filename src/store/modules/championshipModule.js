export default {
	state: {
		championship: "Campeonato Brasileiro"
	},
	getters: {
		getChampionship: (state) => state.championship
	},
	mutations: {
		setChampionship: (state, newValue) => state.championship = newValue
	},
	actions: {
		changeChampionship: ({ commit }, value) => commit("setChampionship", value)
	}
}