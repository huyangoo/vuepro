<template>
  <div id="app">
    <img v-on:click="alertMsg" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      alertMsg: function () {
        this.$layui.use(['layer'], function (layer) {
          layer.msg('hello layui')
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
