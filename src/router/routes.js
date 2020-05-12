import Vue from 'vue'
import VueRouter from 'vue-router'
import AppSectionBanner from './../components/AppSectionBanner'
import AppSectionNews from './../components/AppSectionNews'
import AppClub from './../components/AppClub'
import AppNotFound from './../components/AppNotFound'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: AppSectionBanner
	},
	{
		path: '/news',
		alias: '/notices',
		component: AppSectionNews
	},
	{
		path: '/club',
		component: AppClub
	},
	{
		path: '/admin',
		redirect: '/'
	},
	{
		path: '*',
		component: AppNotFound
	}
]

export default new VueRouter({
	linkExactActiveClass: "link-active",
	routes: routes
})