<template>
  <div class="contact animate__animated animate__fadeIn">
    <h1>Contact Me</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" name="name" v-model="name" placeholder="Your Name" required />
      <input type="email" name="email" v-model="email" placeholder="Your Email" required />
      <textarea name="message" v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('message', this.message);

      axios.post('https://formspree.io/f/xkgwlnaa', formData)
        .then(() => {
          alert(`Thank you, ${this.name}! Your message has been sent.`);
          this.name = '';
          this.email = '';
          this.message = '';
        })
        .catch(error => {
          console.error(error);
          alert('Error sending message. Please try again.');
        });
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
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: 0.6s ease-in-out;
  }
  
  button:hover {
    background-color: #9CA986;
  }
  </style>
  