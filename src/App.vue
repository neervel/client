<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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