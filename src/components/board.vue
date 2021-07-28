<template lang="pug">
  .section
    .stages
      Stage(:tasks="tasks.todo", :title="`To do`", :bgColor="`#E5EBFF`")
      Stage(:tasks="tasks.inProgress", :title="`In progress`", :bgColor="`#F6FFD1`")
      Stage(:tasks="tasks.done", :title="`Done`", :bgColor="`#D1FFD5`" )
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
    margin-top: 5vh;
  }
</style>