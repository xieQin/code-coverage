<template>
  <div>
    <h1 id="toggle-message">{{msg}}</h1>
    <button id="btn-toggle" @click="toggle">toggle message</button>
  </div>
</template>

<script>

export default {
  name: 'Toggle',
  data () {
    return {
      msg: 'default message'
    }
  },
  methods: {
    toggle () {
      this.msg = this.msg == 'default message' ? 'toggle message' : 'default message'
    }
  }
}
</script>

<style>
</style>
