<template lang="pug">
  .container
    h1.title
      | Create new task
    form.create-form(@submit.prevent="createPost()")
      .title
        input.create-title(id="title", required, @keyup="uppercase")
        label(for="title")
          | Title
      .description
        input.create-description(id="description", required, @keyup="uppercase")
        label(for="description")
          | Description
      .status
        label(for="status")
          | Status
        select.create-status(id="status")
          option(value="todo")
            | To do
          option(value="inProgress")
            | In progress
          option(value="done")
            | Done
      button.create
        | Create task
    router-link(:to="{name: 'home'}")
      | Back to board  
</template>

<script>
import taskService from '../service/taskService'

export default {
  name: 'createTask',
  methods: {
    async createPost() {
      let task = {}
      task.title = document.getElementById('title').value
      task.description = document.getElementById('description').value
      task.status = document.getElementById('status').value
      document.getElementById('title').value = ''
      document.getElementById('description').value = ''
      await taskService.create(task).then(this.$router.push({name: 'home'}))
    },
    uppercase() {
      event.target.value = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    }
  }
}
</script>
<style scoped>
.container{
  max-width: 90%;
  margin: 0 auto;
}
.title{
  margin-bottom: 30px;
}
.description, .title, .status{
  margin-bottom: 30px;
  position: relative;
}
label{
  color: rgba(0, 0, 0, .6);
  display: block;
  margin-bottom: 5px;
}
.description>label, .title>label{
  transition: .2s;
  position: absolute;
  font-size: 18px;
  top: 5px;
  left: 10px;
}
input{
  width: 300px;
  height: 30px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, .8);
  transition: .2s;
  font-size: 18px;
  padding: 5px 10px;
}
input::first-letter{
  text-transform: uppercase;
}
input:focus{
  outline: none;
  border-color: #E5EBFF;
}
input:focus + label{
  font-size: 14px;
  top: -15px;
}
input:valid + label{
  font-size: 14px;
  top: -15px;
}
select{
  height: 30px;
  width: 300px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, .8);
}
select:focus{
  outline: none;
}
option{
  padding: 5px;
}
</style>