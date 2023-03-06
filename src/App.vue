<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NavigationHeader></NavigationHeader>
  <Button></Button>
</template>

<script>
import NavigationHeader from './components/NavigationHeader.vue';
import Button from './components/Button.vue';

export default {
  name: 'App',
  components: {
    NavigationHeader,
    Button
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
