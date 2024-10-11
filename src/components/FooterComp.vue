<template>
    <footer class="luxury-footer">
      <div class="footer-content">
        <h2 class="footer-brand">Tyra Parring</h2>
        <ul class="social-links">
          <li>
            <a href="https://www.linkedin.com/in/tyra-parring/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/tyraparring/" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/tyra-parring" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <p class="footer-copyright">&copy; {{ currentYear }} Tyra Parring. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
  };
  </script>
  
  <style scoped>
  .luxury-footer {
    background-color: #000; 
    color: #fff;
    padding: 40px 0;
    text-align: center;
    font-family: 'Bodoni Moda', serif;
    position: relative;
    overflow: hidden;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
  }
  
  .footer-brand {
    display: flex;
    justify-content: center;
    font-size: .9rem;
    letter-spacing: 3px;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #fff;
    opacity: 0;
    font-weight: 100;
    margin-left: 2.7em;
    animation: fadeInUp 1s ease-in-out forwards;
  }

  .social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  margin-bottom: 30px;
  margin: 0 auto;
  opacity: 0;
  animation: fadeInUp 1.2s ease-in-out forwards;
}

.social-links li {
  margin: 0 10px;
}

.social-links a {
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease-in-out;
}

.social-links a:hover {
  color: #9CA986;
}

.social-links i {
  font-size: 1.5rem;
}
  
.footer-copyright {
    font-size: 1rem;
    color: #ccc;
    opacity: 0;
    margin-left: 2.7em;
    animation: fadeInUp 1.4s ease-in-out forwards;
}

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .footer-links {
      flex-direction: column;
      gap: 15px;
    }
  }
  </style>
  