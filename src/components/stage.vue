<template lang="pug">
  .stage(:style="cssProps")
    h2.stage__title
      | {{title}}
    .stage-cards
      Task(v-for="task in tasks", :task="task", :key="task.id", :bgColor="bgColor", :editTask="editTask")
    .stage__add
      | +
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
  },
  computed: {
    cssProps () {
      return {
        '--bgColor': this.bgColor
      }
    }
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
  .stage__add{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    background-color: var(--bgColor);
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
  }
  .stage__add::after{
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .05);
    content: "";
    opacity: 0;
    transition: .2s;
  }
  .stage__add:hover{
    cursor: pointer;
  }
   .stage__add:hover::after{
    opacity: 1;
  }
  .stage__total{
    font-size: 16px;
    color: rgba(0, 0, 0, .4);
    margin-bottom: 0;
    margin-top: auto;
    position: absolute;
    bottom: 0;
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