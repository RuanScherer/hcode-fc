import Vue from 'vue'
import Vuex from 'vuex'
import championshipModule from './modules/championshipModule'
import clubModule from './modules/clubModule'

Vue.use(Vuex)

export default new Vuex.Store({
	namespaced: true,
	modules: {
		championshipModule,
		clubModule
	}
})