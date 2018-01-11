import Vue from 'vue'
import Router from 'vue-router'
import Code from '../components/Code'
import Slide from '../components/Slide'
import Jump from '../components/Jump'
import Select from '../components/select'

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
		}

	]
})