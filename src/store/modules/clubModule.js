export default {
	state: {
		club: "Hcode Treinamentos"
	},
	getters: {
		getClub: (state) => state.club
	},
	mutations: {
		setClub: (state, newValue) => state.club = newValue
	},
	actions: {
		changeClub: ({ commit }, value) => commit("setClub", value)
	}
}