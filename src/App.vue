<template>
  <div id="app">
    <NavbarComp/>
    <section id="home">
      <HomeComp/>
    </section>
    <section id="about">
      <AboutComp/>
    </section>
    <section id="projects">
      <ProjectsComp/>
    </section>
    <section id="contact">
      <ContactComp/>
    </section>
    <FooterComp/>
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import HomeComp from './views/HomeComp.vue';
import AboutComp from './views/AboutComp.vue';
import ProjectsComp from './views/ProjectsComp.vue';
import ContactComp from './views/ContactComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    NavbarComp,
    HomeComp,
    AboutComp,
    ProjectsComp,
    ContactComp,
    FooterComp
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Prata&display=swap');

body {
  font-family: 'Prata', serif;
  margin: 0;
  padding: 0;
  background-color: #fff;
  color: #000;
  scroll-behavior: smooth;
}

h1, h2, h3, .brand {
  font-family: 'Prata', serif; 
}

p, li, input, textarea, button {
  font-family: 'Garamond Premier Pro', serif; 
}

section {
  padding: 100px 20px;
  min-height: 100vh;
}

#home {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
}
</style>