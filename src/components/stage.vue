<template lang="pug">
  .stage
    h2.stage__title
      | {{title}}
    .stage-cards
      Task(v-for="task in tasks", :task="task", :key="task.id", :bgColor="bgColor")
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
    bgColor: String
  }
}
</script>

<style scoped>
  .stage{
    width: 420px;
    padding: 20px;
  }
</style>