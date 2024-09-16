<template>
    <nav class="navbar">
      <div class="container">
        <a class="brand">My Portfolio</a>
        <button @click="toggleMenu" class="navbar-toggler">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="{ 'collapse': !menuOpen }">
          <ul class="navbar-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
    },
  };
  </script>
  
  <style>
  /* Add styles for luxurious black-and-white theme, collapsible navbar */
  </style>
  