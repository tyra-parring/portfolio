<template>
  <div class="home-page">
    <div class="content">
      <div class="typewriter-container">
        <div class="typewriter" id="typewriter"></div>
      </div>
      <p class="subtitle">As an aspiring web developer, I'm passionate about crafting innovative digital solutions that bring ideas to life. With a strong foundation in HTML, CSS, and JavaScript, I'm constantly learning and exploring new technologies to stay ahead of the curve. Take a look at my projects and let's connect!</p>
      <button class="button">Take A Look At My Work!</button>
      <div class="social-links">
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

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
}

.typewriter-container {
  overflow: hidden;
  border-right: 2px solid #fff;
  font-size: 48px;
  font-weight: lighter;
  color: #fff;
  margin-bottom: 20px;
}

.typewriter {
  font-size: 48px;
  font-weight: lighter;
  color: #fff;
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

.home-page .button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.6s ease-in-out;
}

.home-page .button:hover {
  background-color: #9CA986;
}

.home-page .social-links {
  margin-top: 20px;
}

.home-page .social-links a {
  margin: 0 10px;
  color: #fff;
  font-size: 24px;
  transition: color 0.2s ease;
}

.home-page .social-links a:hover {
  color: #9CA986;
}

@media only screen and (min-width: 1200px) {
  .home-page {
    height: 100vh;
    width: 100vw;
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

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 50px;
  }

  .typewriter-container {
    margin-bottom: 20px;
  }

  .typewriter-wrap {
    white-space: nowrap;
    border-right: 2px solid #fff;
    font-size: 48px;
    font-weight: lighter;
    color: #fff;
  }

  .subtitle {
    font-size: 19px;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.3;
  }

  .button {
    padding: 10px 20px;
    font-size: 18px;
  }

  .social-links {
    margin-top: 20px;
  }

  .social-links a {
    margin: 0 10px;
    font-size: 24px;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home-page {
    height: 100vh;
    width: 100vw;
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

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 40px;
  }

  .typewriter-container {
    margin-bottom: 15px;
  }

  .typewriter-wrap {
    white-space: nowrap;
    border-right: 2px solid #fff;
    font-size: 40px;
    font-weight: lighter;
    color: #fff;
  }

  .subtitle {
    font-size: 17px;
    color: #fff;
    margin-bottom: 15px;
    line-height: 1.3;
  }

  .button {
    padding: 9px 18px;
    font-size: 16px;
  }

  .social-links {
    margin-top: 15px;
  }

  .social-links a {
    margin: 0 9px;
    font-size: 21px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home-page {
    height: 100vh;
    width: 100vw;
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

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 30px;
  }

  .typewriter-container {
    margin-bottom: 10px;
  }

  .typewriter-wrap {
    white-space: nowrap;
    border-right: 2px solid #fff;
    font-size: 32px;
    font-weight: lighter;
    color: #fff;
  }

  .subtitle {
    font-size: 15px;
    color: #fff;
    margin-bottom: 10px;
    line-height: 1.3;
  }

  .button {
    padding: 8px 15px;
    font-size: 14px;
  }

  .social-links {
    margin-top: 10px;
  }

  .social-links a {
    margin: 0 8px;
    font-size: 18px;
  }
}
</style>