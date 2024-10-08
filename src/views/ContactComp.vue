<template>
  <div class="contact animate__animated animate__fadeIn">
    <h1>Contact Me</h1>
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
        src="https://maps.google.com/maps?q={{ address }}&t=&z=15&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
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
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email1: 'parringt@gmail.com',
      message: '',
      showAlert: false,
      alertMessage: 'Thank You, Your Email Has Been Sent!',
      address1: 'Jakkelsvlei Avenue, Bonteheuwel, 7764',
      phoneNumber: '072 813 0093',
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

@media (max-width: 768px) {
  .contact {
    grid-template-columns: 1fr;
  }
  .map-container {
    grid-column: 1;
  }
}

</style>
  