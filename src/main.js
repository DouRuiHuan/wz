import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import MintUI from 'mint-ui'
import VueTouch from 'vue-touch'
import { Indicator } from 'mint-ui';

import 'mint-ui/lib/style.css'
import "./moudel/model"

Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(MintUI)
Vue.prototype.$axios=axios;
axios.interceptors.request.use(function (config) {
  Indicator.open('加载中...');
  return config;
});
axios.interceptors.response.use(function (response) {
  Indicator.close();
  return response.data;
})




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
