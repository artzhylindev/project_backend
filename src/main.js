import Vue from 'vue'
import App from './js/components/App.vue'
// import  "../dist/css/app.css"
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
