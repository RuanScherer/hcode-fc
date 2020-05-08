<template>
  <div id="app">
    <AppHeader/>
    <AppFooter/>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader'
  import AppFooter from './components/AppFooter'
  export default {
    name: 'App',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>