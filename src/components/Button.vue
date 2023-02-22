<template>
    <button class="storybook-button" @click="handleClick">
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    name: 'Button',
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  };
  </script>
  
  <style scoped>
  .storybook-button {
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #0074D9;
    border-radius: 3px;
    color: #0074D9;
    background-color: white;
  }
  </style>