<template>
  <nav class="navbar">
    <div class="container">
      <a class="brand" href="#home">Tyra Parring</a>
      <div class="navbar-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
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
      
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  transition: all 0.3s ease-in-out;
}

.container {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  max-width: 100vw;
  margin: 0 auto;
}

.brand {
  font-family: 'Bodoni Moda', serif;
  font-size: 1.8rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  margin: 0;
  animation: fadeInUp 1.2s ease-in-out forwards;
}

.brand:hover {
  color: #9CA986; 
}

.navbar-links {
  display: flex; 
  justify-content: center; 
  margin-top: 20px; 
}

.navbar-links ul {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  color: #fff;
  animation: fadeInUp 1.2s ease-in-out forwards;
}

.navbar-links a {
  font-family: 'Garamond Premier Pro', serif;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  padding: 5px;
  position: relative;
  transition: color 0.3s ease-in-out; 
}

.navbar-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0; 
  height: 2px; 
  background-color: #9CA986; 
  transition: width 0.3s ease-in-out; 
}

.navbar-links a:hover::after {
  width: 100%; 
}

.navbar-links a:hover {
  color: #ccc;
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
  .navbar-links {
    flex-wrap: wrap; 
  }
}
@media (max-width: 320px) {
  .navbar-links {
    flex-direction: column;
  }
  .navbar-links ul {
    gap: 17px;
    margin-right: 2em;
  }
  .navbar-links a {
    font-size: 1rem;
  }
  .container {
    padding: 4px;
  }
  .brand {
    font-size: 1.4rem;
    margin-right: 1.4em;
  }
}
@media (max-width: 375px) {
  .navbar-links {
    flex-direction: column;
  }
  .navbar-links ul {
    gap: 1px;
    margin-right: 1.9em;
  }
  .navbar-links a {
    font-size: 0.9rem;
  }
  .container {
    padding: 2px;
  }
  .brand {
    font-size: 1.2rem;
    margin-right: 1.2em;
  }
}

@media (max-width: 475px) {
  .navbar-links {
    flex-direction: column;
  }
  .navbar-links ul {
    gap: 11px;
    margin-right: 2.1em;
  }
  .navbar-links a {
    font-size: 0.95rem;
  }
  /* .container {
    padding: 8px;
  } */
  .brand {
    font-size: 1.5rem;
    margin-right: 1em;
  }
}
</style>

  
  