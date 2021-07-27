<template>
  <div id="app">
    <board :tasks="this.tasks"/>
  </div>
</template>

<script>
import Board from './components/board.vue'

export default {
  name: 'App',
  components: {
    Board
  },
  data() {
    return {
      tasks: {
        todo: [
          {
            title: "hello",
            description: "hhhhh",
            created: "31.08",
            daysAgo: "34",
            id: 1
          },
          {
            title: "hello",
            description: "hhhhh",
            created: "31.08",
            daysAgo: "34",
            id: 2
          },
          {
            title: "hello",
            description: "hhhhh",
            created: "31.08",
            daysAgo: "34",
            id: 3
          }
        ],
        inProgress: [
          {
            title: "hello",
            description: "hhhhh",
            created: "31.08",
            daysAgo: "34",
            id: 1
          },
          {
            title: "hello",
            description: "hhhhh",
            created: "31.08",
            daysAgo: "34",
            id: 2
          },
          {
            title: "hello",
            description: "hhhhh",
            created: "31.08",
            daysAgo: "34",
            id: 3
          }
        ],
        done: [
           {
            title: "hello",
            description: "hhhhh",
            created: "31.08",
            daysAgo: "34",
            id: 1
          },
          {
            title: "hello",
            description: "hhhhh",
            created: "31.08",
            daysAgo: "34",
            id: 2
          },
          {
            title: "hello",
            description: "hhhhh",
            created: "31.08",
            daysAgo: "34",
            id: 3
          }
        ]
      }
    }
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
  }
</style>