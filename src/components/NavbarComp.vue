<template>
    <nav class="navbar">
      <div class="container">
        <a class="brand" href="#home">Tyra Parring</a>
        <button @click="toggleMenu" class="navbar-toggler">
          <span class="navbar-toggler-icon">☰</span>
        </button>
        <div :class="{ 'nav-collapse': !menuOpen }" class="navbar-links">
          <ul>
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
  
  <style scoped>
  /* Navbar Container */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #000; /* Luxurious black background */
    color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
    transition: all 0.3s ease-in-out;
  }
  
  /* Brand Styling */
  .brand {
    font-family: 'Bodoni Moda', serif;
    font-size: 1.8rem;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
  }
  
  .brand:hover {
    color: #ccc; /* Subtle hover effect */
  }
  
  /* Toggler Button for Mobile */
  .navbar-toggler {
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  /* Navbar Links */
  .navbar-links ul {
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    color: #fff;
  }
  
  .navbar-links a {
    font-family: 'Garamond Premier Pro', serif;
    font-size: 1.2rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    padding: 5px;
  }
  
  .navbar-links a:hover {
    color: #ccc;
    border-bottom: 2px solid #fff; /* Underline effect on hover */
  }
  
  /* Responsive (Mobile) Menu */
  .nav-collapse {
    display: none;
  }
  
  @media (max-width: 768px) {
    .navbar-toggler {
      display: block;
    }
  
    .navbar-links {
      position: absolute;
      top: 70px;
      right: 20px;
      background-color: #000;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
  
    .nav-collapse {
      display: block;
    }
  
    .navbar-links ul {
      display: block;
      gap: 15px;
    }
  
    .navbar-links a {
      display: block;
      padding: 10px 0;
    }
  }
  </style>
  
  