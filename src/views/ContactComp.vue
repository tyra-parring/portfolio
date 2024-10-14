<template>
  <div class="contact">
    <h1 class="heading">Get in Touch</h1>
    <div class="contact-grid">
      <div class="contact-info">
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>Address: {{ address1 }}</p>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <p>Email: {{ email1 }}</p>
        </div>
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <p>Phone: {{ phoneNumber }}</p>
        </div>
      </div>
      <div class="map-container">
        <iframe
          width="100%"
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?q={{ address1 }}&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </div>
    <form @submit.prevent="handleSubmit">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" placeholder="Your Name" required />
      <span v-if="errors.name" class="error">{{ errors.name }}</span>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" placeholder="Your Email" required />
      <span v-if="errors.email" class="error">{{ errors.email }}</span>
      <label for="message">Message:</label>
      <textarea id="message" v-model="message" placeholder="Your Message" required></textarea>
      <span v-if="errors.message" class="error">{{ errors.message }}</span>
      <button type="submit">Submit</button>
      <div v-if="loading" class="loading">Loading...</div>
    </form>
    <div v-if="showAlert" :class="{'alert': true, 'success': alertMessage === successMessage, 'error': alertMessage === errorMessage}">
  {{ alertMessage }}
  <button @click="showAlert = false">OK</button>
</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      errors: {},
      showAlert: false,
      successMessage: `Thank you, ${this.name}! Your message has been sent successfully. I'll get back to you soon!`,
      errorMessage: `Oops, something went wrong! Please try again.`,
      email1: 'parringt@gmail.com',
      address1: 'Bonteheuwel, 7764',
      phoneNumber: '072 813 0093',
      loading: false,
    };
  },
  methods: {
    handleSubmit() {
      this.loading = true;
      this.errors = {};

      if (!this.name) {
        this.errors.name = 'Please enter your name';
      }
      if (!this.email) {
        this.errors.email = 'Please enter your email';
      }
      if (!this.message) {
        this.errors.message = 'Please enter your message';
      }

      if (Object.keys(this.errors).length === 0) {
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('message', this.message);

        axios.post('https://formspree.io/f/xkgwlnaa', formData)
          .then(() => {
            this.showAlert = true;
            this.alertMessage = `Thank you, ${this.name}! Your message has been sent successfully.`;
            this.name = '';
            this.email = '';
            this.message = '';
          })
          .catch(error => {
            this.showAlert = true;
            this.alertMessage = 'Error sending message. Please try again.';
            console.error(error);
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.contact {
  text-align: center;
}

.contact-info {
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.info-item i {
  font-size: 24px;
  margin-right: 10px;
}

.info-item p {
  margin: 0;
}

.map-container {
  margin-bottom: 20px;
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

.alert.success {
  background-color: #ffffff;
  color: #000000;
}

.alert.error {
  background-color: #ffffff;
  border-color: #e10101;
  color: #000000;
}

.contact {
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 20px;
}

.contact-info, form {
  grid-column: 1;
}

.map-container {
  grid-column: 2;
}

.error {
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .contact {
    grid-template-columns: 1fr;
  }
  .map-container {
    grid-column: 1;
  }
}

</style>
  