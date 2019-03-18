import Vue from 'vue'
import App from './App.vue'

import vueResource from 'vue-resource'
Vue.use(vueResource)

//配置全局的接口
// vue.http.options.root = 'https://vue-http-f8e45.firebaseio.com/'

new Vue({
	el: '#app',
	render: h => h(App)
})
