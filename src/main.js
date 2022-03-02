import Vue from 'vue'
// import App from './App.vue'
import HelloWorld from './Helloworld.vue'
import Home from './components/Home.vue';
import About from './components/About.vue';
import KanbanBoard from './components/kanban/KanbanBoard.vue'
import VueRouter from 'vue-router';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/board', component: KanbanBoard}
]


const router = new VueRouter({
  routes // short for `routes: routes`
})

// 5. Create and mount the root instance.
// const app = Vue.createApp({})
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
// app.use(router)

// app.mount('#snehal')
Vue.use(VueRouter);


new Vue({
  render: h => h(HelloWorld),
  router: router,
}).$mount('#snehal')
