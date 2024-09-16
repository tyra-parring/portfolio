<template>
    <div class="about animate__animated animate__fadeInUp">
      <h1>About Me</h1>
      <p>
        I'm a passionate developer focused on creating beautiful web experiences.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const aboutSection = this.$el;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > aboutSection.offsetTop + aboutSection.clientHeight / 2) {
          aboutSection.classList.add('animate__fadeInUp');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .about {
    text-align: center;
  }
  </style>
  