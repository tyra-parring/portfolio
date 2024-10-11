<template>
  <div id="app">
    <NavbarComp/>
    <section id="home">
      <HomeComp/>
    </section>
    <section id="about">
      <AboutComp/>
    </section>
    <section id="education">
      <EducationComp/>
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
import EducationComp from './views/EducationComp.vue';
import ProjectsComp from './views/ProjectsComp.vue';
import ContactComp from './views/ContactComp.vue';
import FooterComp from './components/FooterComp.vue';
import 'devicon/devicon.min.css';

export default {
  components: {
    NavbarComp,
    HomeComp,
    AboutComp,
    EducationComp,
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

p {
  line-height: 1.5;
}

section {
  padding: 20px;
  min-height: 100vh;
  /* margin-top: 1.8rem; */
}

#home {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #000;
  color: #fff;
}

#about {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #000000;
}

#education {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #fff;
}

#projects {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #ffffff;
  color: #fff;
}

#contact {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #fff;
}

</style>