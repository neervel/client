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
  @import './assets/css/normalize.css';
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  *{
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  h2,h4,p,span{
    margin: 0;
    color: rgba(0, 0, 0, .8)
  }

</style>