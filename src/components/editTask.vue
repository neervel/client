<template lang="pug">
  .container
    h1
      | edit task
    router-link(:to="{name: 'home'}")
      | To tasks
</template>

<script>
export default {
  
}
</script>