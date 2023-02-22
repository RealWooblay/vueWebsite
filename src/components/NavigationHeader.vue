<template>
    <nav class="storybook-navigation">
      <ul class="storybook-navigation-list">
        <li v-for="item in items" :key="item.id" class="storybook-navigation-item">
          <a href="#" class="storybook-navigation-link">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavigationHeader',
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style>
  .storybook-navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #333;
    color: #fff;
  }
  
  .storybook-navigation-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .storybook-navigation-item {
    margin-left: 1rem;
  }
  
  .storybook-navigation-link {
    color: #fff;
    text-decoration: none;
  }
  </style>