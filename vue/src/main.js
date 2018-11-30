// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont.css'
import '@/assets/styles/main.scss'
import ElementUI from 'element-ui'
import uploader from 'vue-simple-uploader'
import './axios'
import qs from 'qs'
import store from './vuex'
Vue.use(ElementUI)
Vue.use(uploader)
Vue.prototype.$qs = qs
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
