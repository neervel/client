<template lang="pug">
  .task(:style="cssProps", @click="toggleAction($event)")
    .task-block
      h4.task__title
        | {{task.title}}
      p.task__description
        | {{task.description}}
      span.task__created(v-if="task.daysAgo!=0")
        | Created: {{task.dateFormat}} (days ago: {{task.daysAgo}})
      span.task__created(v-else)
        | Created today
      .task-actions
        button.task__prev(@click="prev(task._id)")
          .button-img
            img(src="../assets/img/prev.svg")
        button.task__edit(@click="edit(task._id)")
          .button-img
            img(src="../assets/img/edit.svg")
        button.task__delete(@click="del(task._id)")
          .button-img
            img(src="../assets/img/delete.svg")
        button.task__next(@click="next(task._id)")
          .button-img
            img(src="../assets/img/next.svg")
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
    bgColor: String
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    cssProps () {
      return {
        '--bgColor': this.bgColor
      }
    }
  },
  methods: {
    toggleAction(e) {
      if(this.open){
        this.open = false
        let con = []
        if (document.getElementsByClassName('task-active')[0]) {
          con = document.getElementsByClassName('task-active')[0].getElementsByClassName('task-block')
          if ( !con[0].contains(e.target) ) {
            e.currentTarget.classList.remove('task-active')
          }
        }
      }else if(!this.open){
        this.open = true
        e.currentTarget.classList.add('task-active')
      }      
    },
    prev (id) {
      console.log('prev ' + id)
      document.getElementsByClassName('task-active')[0].classList.remove('task-active')
    },
    edit (id) {
      console.log('edit ' + id)
      document.getElementsByClassName('task-active')[0].classList.remove('task-active')
    },
    del (id) {
      console.log('del ' + id)
      document.getElementsByClassName('task-active')[0].classList.remove('task-active')
    },
    next (id) {
      console.log('next ' + id)
      document.getElementsByClassName('task-active')[0].classList.remove('task-active')
    }
  }
}
</script>

<style scoped>
  .task{
    margin-bottom: 10px;
    position: relative;
  }
  .task.task-active::after{
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    content: "";
    z-index: 1;
    opacity: 1;
    background-color: rgba(0, 0, 0, .2);
    transition: .2s;
  }
  .task-active .task-block{
    z-index: 2;
  }
  .task-block{
    position: relative;
    background: var(--bgColor);
    border-radius: 10px;
    padding: 15px;
  }
  .task-block:hover{
    cursor: pointer;
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
  .task-actions{
    position: absolute;
    bottom: -60px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 190px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: none;
  }
  .task-active .task-actions{
    display: flex;
  }
  .task-actions button{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #fff;
    border: none;
  }
  .task-actions button:hover{
    cursor: pointer;
  }
  .button-img{
    display: flex;
    justify-content: center;
    align-self: center;
  }
</style>
