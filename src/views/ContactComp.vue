<template>
    <div class="contact animate__animated animate__fadeIn">
      <h1>Contact Me</h1>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="name" placeholder="Your Name" required />
        <input type="email" v-model="email" placeholder="Your Email" required />
        <textarea v-model="message" placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        alert(`Thank you, ${this.name}! Your message has been sent.`);
        this.name = '';
        this.email = '';
        this.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .contact {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input, textarea {
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #333;
  }
  </style>
  