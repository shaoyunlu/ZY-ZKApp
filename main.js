
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
import './style/index.less'
import {g_user} from './utils/dict.js'
import {isEmpty} from './utils/data.js'

App.onLaunch = ()=>{
	if (isEmpty(g_user.account)){
		uni.redirectTo({
			url : '/pages/login/login'
		})
	}
	else{
		
	}
}

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif