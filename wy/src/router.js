import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import News from "./views/news.vue"
import Plays from "./views/plays.vue"
import Sports from "./views/sports.vue"
import "./assets/css/reset.css"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/news",
      name:"news",
      component:News
    },
    {
      path:"/plays",
      name:"plays",
      component:Plays
    },
    {
      path:"/sports",
      name:"sports",
      component:Sports
    },
        
  ]
})
