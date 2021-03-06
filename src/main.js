import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router/index'
import store from './store/index'
import base from './common/common'
import './common/common.css'
require('./mock/mock.js')


// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'

Vue.use(base);


Vue.use(ElementUI, { size: 'small' })

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})