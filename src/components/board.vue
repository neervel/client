<template lang="pug">
  .section
    .stages
      Stage(:tasks="tasks.todo", :title="`To do`", :bgColor="`#E5EBFF`", :editTask="editTask")
      Stage(:tasks="tasks.inProgress", :title="`In progress`", :bgColor="`#F6FFD1`", :editTask="editTask")
      Stage(:tasks="tasks.done", :title="`Done`", :bgColor="`#D1FFD5`", :editTask="editTask" )
</template>

<script>
import Stage from './stage.vue'
import taskService from '../service/taskService.js'

export default {
  name: 'Board',
  components: {
    Stage
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
        let checked = false
        this.tasks.inProgress.forEach((task, i) => {
          if (task.id == id) {
            task.status = "todo"
            this.tasks.todo.push(task)
            this.tasks.inProgress.splice(i, 1)
            checked = true
            taskService.edit(task)
          }
        })
        if (!checked) {
          this.tasks.done.forEach((task, i) => {
            if (task.id == id) {
              task.status = "inProgress"
              this.tasks.inProgress.push(task)
              this.tasks.done.splice(i, 1)
              taskService.edit(task)
            }
          })
        }
      } else if (action == "next") {
        let checked = false
        this.tasks.todo.forEach((task, i) => {
          if (task.id == id) {
            task.status = "inProgress"
            this.tasks.inProgress.push(task)
            this.tasks.todo.splice(i, 1)
            checked = true
            taskService.edit(task)
          }
        })
        if (!checked) {
          this.tasks.inProgress.forEach((task, i) => {
            if (task.id == id) {
              task.status = "done"
              this.tasks.done.push(task)
              this.tasks.inProgress.splice(i, 1)
              taskService.edit(task)
            }
          })
        }
      } 
    }

  }
  
}
</script>

<style>
  @import '../assets/css/normalize.css';
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  *{
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  h2,h4,p,span{
    margin: 0;
    color: rgba(0, 0, 0, .8)
  }
  .stages{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
  }
</style>