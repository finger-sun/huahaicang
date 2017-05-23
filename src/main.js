import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router";
//使用
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
