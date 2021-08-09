import Vue from 'vue'
import VueRouter from 'vue-router'
import board from '../components/board.vue'
import createTask from '../components/createTask.vue'
import editTask from '../components/editTask.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: board
  },
  {
    path: '/create',
    name: 'createtask',
    component: createTask
  },
  {
    path: '/edit',
    name: 'edittask',
    component: editTask
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
