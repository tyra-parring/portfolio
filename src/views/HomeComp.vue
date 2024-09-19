<template>
    <div class="home-page">
      <div class="background">
        <video autoplay muted loop>
          <source src="luxury-background-video.mp4" type="video/mp4">
        </video>
      </div>
      <div class="content">
        <h1 class="title animate__animated animate__fadeInDown" id="typewriter">Welcome to my Portfolio</h1>
        <p class="subtitle animate__animated animate__fadeIn">As an aspiring web developer, I'm passionate about crafting innovative digital solutions that bring ideas to life. With a strong foundation in HTML, CSS, and JavaScript, I'm constantly learning and exploring new technologies to stay ahead of the curve. Take a look at my projects and let's connect!</p>
        <button class="button animate__animated animate__fadeIn">Take A Look At My Work!</button>
        <div class="social-links animate__animated animate__fadeIn">
          <a href="https://www.linkedin.com/in/tyra-parring/" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/tyra-parring" target="_blank"><i class="fab fa-github"></i></a>
          <a href="https://www.facebook.com/tyraparring/" target="_blank"><i class="fab fa-facebook-f"></i></a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  mounted() {
    const typewriter = document.getElementById('typewriter');
    const text = 'Welcome to my Portfolio';
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
      const currentText = isDeleting ? text.substring(0, index) : text.substring(0, index + 1);
      typewriter.textContent = currentText;

      if (!isDeleting && index > text.length) {
        isDeleting = true;
      } else if (isDeleting && index === 0) {
        isDeleting = false;
      }

      index = isDeleting ? index - 1 : index + 1;

      setTimeout(typeWriter, 100);
    }

    typeWriter();
  }
}
  </script>
  
  <style scoped>
  .home-page {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  .background video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 50px;
  }
  
  .title {
    font-size: 48px;
    font-weight: lighter;
    color: #fff;
    margin-bottom: 20px;
    overflow: hidden; /* Add this line */
    white-space: nowrap; 
    border-right: 2px solid #fff;
  }
  
  .subtitle {
    font-size: 19px;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.3;
  }
  
  .description {
    font-size: 18px;
    color: #fff;
    margin-bottom: 30px;
  }
  
  .button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    transition: 0.6s ease-in-out !important;
  }
  
  .button:hover {
    background-color: #9CA986;
  }
  
  .social-links {
    margin-top: 20px;
  }
  
  .social-links a {
    margin: 0 10px;
    color: #fff;
    font-size: 24px;
    transition: color 0.2s ease;
  }
  
  .social-links a:hover {
    color: #9CA986;
  }
  </style>