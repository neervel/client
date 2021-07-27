<template lang="pug">
  .section
    .stages
      Stage(:tasks="tasks.todo", :title="`To do`")
      Stage(:tasks="tasks.inProgress", :title="`In progress`")
      Stage(:tasks="tasks.done", :title="`Done`")
</template>

<script>
import Stage from './stage.vue'

export default {
  name: 'Board',
  components: {
    Stage
  },
  props: {
    tasks: Object
  }
  
}
</script>

<style>
  .stages{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>