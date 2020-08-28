<template>
  <div id="app">
    <PageSettings />
  </div>
</template>

<script>
import PageSettings from './components/PageSettings/PageSettings.vue';

export default {
  name: 'App',
  components: {
    PageSettings,
  }
}
</script>

<style lang="scss">
#app {
  width: 360px;
  margin: 0 auto;
  padding: 20px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
