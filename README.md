# vue-router 切换时实现loading效果

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<h3>实现原理</h3>
1. 可以在vuex中维护一个isLoading 的变量


2. 在 router.beforeEach 钩子中 设置 isLoading = true , 在 router.afterEach 中 设置 isLoading = false 

```js
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
```

3. 在根组件（即<router-view>所在的父组件）上 放置一个Loading组件，例如：

```html
<Loading :isLoading="isLoading"></Loading> 
<router-view ></router-view>

```
这个 Loading组件根据这个isLoading值来决定是否显示loading动画。
