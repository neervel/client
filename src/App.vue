<template>
  <div id="app">
    <board :tasks="this.tasks"/>
  </div>
</template>

<script>
import Board from './components/board.vue'
import taskService from './service/taskService.js'

export default {
  name: 'App',
  components: {
    Board
  },
  data() {
    return {
      tasks: {
        todo: [],
        inProgress: [],
        done: []
      }
    }
  },
  mounted() {
    this.getAll()
  },
  methods: {
    async getAll() {
      this.tasks.todo = await taskService.getAll()
    }
  }
}
</script>

<style>
  @import './assets/css/normalize.css';
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  *{
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  h2,h4,p,span{
    margin: 0;
    color: rgba(0, 0, 0, .8)
  }

</style>