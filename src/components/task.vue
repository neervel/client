<template lang="pug">
  .task(:style="cssProps")
    h4.task__title
      | {{task.title}}
    p.task__description
      | {{task.description}}
    span.task__created
      | Created: {{task.dateFormat}} ({{task.daysAgo}} days ago)
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
    bgColor: String
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
  .task{
    background: var(--bgColor);
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 10px;
  }
  .task__title{
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
  }
  .task__description{
    font-size: 16px;
    margin-bottom: 20px;
  }
  .task__created{
    font-size: 14px;
    color: rgba(0, 0, 0, .4)
  }

</style>