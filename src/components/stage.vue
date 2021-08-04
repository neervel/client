<template lang="pug">
  .stage
    h2.stage__title
      | {{title}}
    .stage-cards
      Task(v-for="task in tasks", :task="task", :key="task.id", :bgColor="bgColor", :editTask="editTask")
    span.stage__total
      | Total: {{tasks.length}}
</template>

<script>
import Task from './task.vue'
export default {
  name: 'Stage',
  components: {
    Task
  },
  props: {
    tasks: Array,
    title: String,
    bgColor: String,
    editTask: Function
  }
}
</script>

<style scoped>
  .stage{
    width: 420px;
    height: 90vh;
    padding: 20px;
    position: relative;
  }
  .stage::after{
    position: absolute;
    content: "";
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, .8);
    left: 0;
    top: 0;
  }
  .stage__title{
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 35px;
    position: relative;
  }
  .stage__title::after{
    position: absolute;
    content: "";
    bottom: -15px;
    left: -20px;
    height: 1px;
    width: 300px;
    background-color: rgba(0, 0, 0, .8);
  }
  .stage-cards{
    height: 87%;
  }
  .stage__total{
    font-size: 16px;
    color: rgba(0, 0, 0, .4);
    margin-bottom: 0;
    margin-top: auto;
    position: relative;
  }
  .stage__total::after{
    position: absolute;
    content: "";
    top: -15px;
    left: -20px;
    height: 1px;
    width: 100px;
    background-color: rgba(0, 0, 0, .8);
  }
</style>