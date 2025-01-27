<template>
  <div class="about-container" :class="{ 'animate__animated animate__fadeInUp': isVisible }">
    <div class="intro-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
      <div class="profile-pic">
        <img src="https://tyra-parring.github.io/homehost-/InShot_20240424_205858533.jpg" alt="Tyra Parring Professional Picture" />
      </div>
      <div class="intro-text">
        <h1>About Me</h1>
        <p>
          Hi, I'm Tyra Parring, a passionate fullstack developer focused on creating elegant and interactive web experiences.
          I thrive in crafting visually appealing user interfaces and seamless frontend solutions.
        </p>
      </div>
    </div>

    <div class="skills-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
      <h2>Technical Skills</h2>
      <div class="skills-icons">
        <i class="devicon-html5-plain colored" title="HTML"></i>
        <i class="devicon-css3-plain colored" title="CSS"></i>
        <i class="devicon-javascript-plain colored" title="JavaScript"></i>
        <i class="devicon-vuejs-plain colored" title="Vue.js"></i>
        <i class="devicon-nodejs-plain colored" title="Node.js"></i>
        <i class="devicon-figma-plain colored" title="Figma"></i>
        <i class="devicon-mysql-plain colored" title="MySQL"></i>
        <i class="devicon-git-plain colored" title="Git"></i>
        <i class="devicon-bootstrap-plain colored" title="Bootstrap"></i>
        <i class="devicon-python-plain colored" title="Python"></i>
        <i class="devicon-linux-plain colored" title="Linux"></i>
      </div>
    </div>

    <div class="soft-skills-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
      <h2>Soft Skills</h2>
      <div class="soft-skills">
        <div class="soft-skill-item">
          <i class="fas fa-comments" title="Communication"></i>
          <p>Effective Communication</p>
        </div>
        <div class="soft-skill-item">
          <i class="fas fa-users" title="Teamwork"></i>
          <p>Collaborative Teamwork</p>
        </div>
        <div class="soft-skill-item">
          <i class="fas fa-lightbulb" title="Problem Solving"></i>
          <p>Creative Problem Solving</p>
        </div>
        <div class="soft-skill-item">
          <i class="fas fa-sync-alt" title="Adaptability"></i>
          <p>Adaptable and Agile</p>
        </div>
        <div class="soft-skill-item">
          <i class="fas fa-clock" title="Time Management"></i>
          <p>Efficient Time Management</p>
        </div>
        <div class="soft-skill-item">
          <i class="fas fa-microphone" title="Public Speaking"></i>
          <p>Confident Public Speaking</p>
        </div>
      </div>
    </div>

    <div class="hobbies-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
  <h2>Interests & Hobbies</h2>
  <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
    Beyond coding, I'm a curious soul who loves to explore the latest tech trends, from AI and machine learning to cybersecurity and data science. I'm always on the lookout for new tools and technologies to add to my skillset.
  </p>
  <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
    When I'm not coding, you can find me indulging in creative writing, whether it's writing short stories, poetry, or even scripting for video games. I find that writing helps me to express myself in a different way and tap into my imagination.
  </p>
  <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
    But it's not all about tech and creativity - I'm also an outdoor enthusiast who loves spending time in nature. Whether it's going for a hike, playing sports, or simply taking a walk around the block, I believe that being outdoors is essential for both physical and mental well-being.
  </p>
  <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
    And finally, I'm a proud cat mom who loves spending time with my playful and mischievous feline friend. From cuddling on the couch to playing with toys, I adore the companionship and joy that my cat brings to my life.
  </p>
</div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    AOS.init(); 
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const aboutSection = this.$el;
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > aboutSection.offsetTop + aboutSection.clientHeight / 2) {
        this.isVisible = true;
      }
    },
  },
};
</script>


<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0; 
  transition: opacity 0.6s ease-out;
}

.about-container.animate__fadeInUp {
  opacity: 1; 
}

.profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: 50% 25%; 
}

.intro-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  animation: introAnimation 1.5s ease-in-out;
}

@keyframes introAnimation {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (min-width: 768px) {
  .intro-section {
    flex-direction: row;
    text-align: left;
  }
}

.profile-pic {
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro-text {
  max-width: 600px;
  margin-left: 0;
}

@media (min-width: 768px) {
  .intro-text {
    margin-left: 20px;
  }
}

.intro-text h1 {
  font-family: 'Bodoni Moda', serif;
  font-size: 2rem;
  margin-bottom: 10px;
}

.intro-text p {
  font-family: 'Garamond Premier Pro', serif;
  font-size: 1.1rem;
  line-height: 1.6;
}

.skills-section {
  margin: 30px 0;
  text-align: center;
  animation: skillsAnimation 1.5s ease-in-out;
}

@keyframes skillsAnimation {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.skills-section h2 {
  font-family: 'Bodoni Moda', serif;
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.skills-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.skills-icons i {
  font-size: 3.6rem; 
  color: #333;
  transition: color 0.3s ease-in-out;
}

.skills-icons i:hover {
  color: #9CA986;
  animation: iconHover 0.5s ease-in-out;
}

.soft-skills-section {
  margin: 30px 0;
  text-align: center;
  animation: softSkillsAnimation 1.5s ease-in-out;
}

@keyframes softSkillsAnimation {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.soft-skills-section h2 {
  font-family: 'Bodoni Moda', serif;
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.soft-skills {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.soft-skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}

.soft-skill-item i {
  font-size: 3.1rem; 
  color: #333;
  transition: color 0.3s ease-in-out;
}

.soft-skill-item p {
  font-family: 'Garamond Premier Pro', serif;
  font-size: 1.1rem;
  margin-top: 5px;
}

.soft-skill-item i:hover {
  color: #9CA986;
  animation: iconHover 0.5s ease-in-out;
}

@keyframes iconHover {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.hobbies-section {
  text-align: center;
  margin: 30px 0;
}

.hobbies-section h2 {
  font-family: 'Bodoni Moda', serif;
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.hobbies-section p {
  font-family: 'Garamond Premier Pro', serif;
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
