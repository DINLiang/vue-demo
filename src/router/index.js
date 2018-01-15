import Vue from 'vue'
import Router from 'vue-router'
import Code from '../components/Code'
import Slide from '../components/Slide'
import Jump from '../components/Jump'
import Select from '../components/select'
import Grid from '../components/grid'
import elTable from '../components/elTable'
import edit from '../components/edit'

Vue.use(Router);
Vue.config.productionTip = false;

export default new Router({
	routes: [
		{
			path: '/code',
			name: 'code',
			component: Code
		},
		{
			path: '/slide',
			name: 'slide',
			component: Slide
		},
		{
			path: '/jump',
			name: 'jump',
			component: Jump
		},
		{
			path: '/select',
			name: 'select',
			component: Select
		},
		{
			path: '/grid',
			name: 'grid',
			component: Grid
		},
		{
			path: '/elTable',
			name: 'elTable',
			component: elTable
		},
		{
			path: '/edit',
			name: 'edit',
			component: edit
		}
	]
})