// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  	store.dispatch("onLoading",true);
  	console.log(store.state.isLoading)
  	next()
})
// 这里为了让效果明显一些加了延时
router.afterEach((to, from) => {
	setTimeout(function(){
  	store.dispatch("onLoading",false);
  	console.log(store.state.isLoading)		
  	},3000)

})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

