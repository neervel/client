import Vue from 'vue'
import VueRouter from 'vue-router'
import board from '../components/board.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Kanban',
    component: board
  }
]

const router = new VueRouter({
  routes
})

export default router
