<template>
  <div class="contact animate__animated animate__fadeIn">
    <h1>Contact Me</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" name="name" v-model="name" placeholder="Your Name" required />
      <input type="email" name="email" v-model="email" placeholder="Your Email" required />
      <textarea name="message" v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
    <div v-if="showAlert" class="alert">
      {{ alertMessage }}
      <button @click="showAlert = false">OK</button>
    </div>
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
      showAlert: false,
      alertMessage: '',
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
          this.showAlert = true;
          this.alertMessage = `Thank you, ${this.name}! Your message has been sent.`;
          this.name = '';
          this.email = '';
          this.message = '';
        })
        .catch(error => {
          this.showAlert = true;
          this.alertMessage = 'Error sending message. Please try again.';
          console.error(error);
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

.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1000;
}

.alert button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.6s ease-in-out;
}

.alert button:hover {
  background-color: #9CA986;
}
</style>
  