<template lang="pug">
  .task
    h4.task__title
      | {{task.title}}
    p.task__description
      | {{task.description}}
    span.task__created
      | Created: {{task.created}} ({{task.daysAgo}} days left)
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object
  }
}
</script>