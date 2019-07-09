<template>
  <div id="app">
    <Todo></Todo>
    <Toggle></Toggle>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'
import Toggle from './components/Toggle.vue'

export default {
  name: 'app',
  components: {
    Todo,
    Toggle
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
}
</style>
