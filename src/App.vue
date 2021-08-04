<template>
  <div id="app">
    <board :tasks="this.tasks" :editTask="editTask"/>
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
      const tasks = await taskService.getAll()
      tasks.forEach(task => {
        if (task.status == 'todo') {
          this.tasks.todo.push(task)
        } else if (task.status == 'inProgress') {
          this.tasks.inProgress.push(task)
        } else if (task.status == 'done') {
          this.tasks.done.push(task)
        } 
      });
    },
    async editTask (action, id, task) {
      if (action == "delete") {
        const deletedTask = await taskService.delete(id)
        this.tasks[deletedTask.status].forEach((element, i) => {
          if (element.id == deletedTask.id) {
            this.tasks[deletedTask.status].splice(i, 1)
          }
        }); 
      } else if (action == "edit") {
        console.log("edit " + id)
        if (task) {
          console.log(task)
        }
      } else if (action == "prev") {
        console.log("prev " + id)
      } else if (action == "next") {
        console.log("next " + id)
      } 
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