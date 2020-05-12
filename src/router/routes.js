import Vue from 'vue'
import VueRouter from 'vue-router'
import AppSectionBanner from './../components/AppSectionBanner'
import AppSectionNews from './../components/AppSectionNews'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: AppSectionBanner
	},
	{
		path: '/news',
		component: AppSectionNews
	}
]

export default new VueRouter({
	linkExactActiveClass: "link-active",
	routes: routes
})