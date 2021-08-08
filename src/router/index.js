import Vue from 'vue'
import VueRouter from 'vue-router'
import board from '../components/board.vue'
import createTask from '../components/createTask.vue'
import editTask from '../components/editTask.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Kanban',
    component: board
  },
  {
    path: '/create',
    name: 'Create task',
    component: createTask
  },
  {
    path: '/edit',
    name: 'Edit task',
    component: editTask
  }
]

const router = new VueRouter({
  routes
})

export default router
