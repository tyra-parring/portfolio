<template>
  <div class="contact">
    <h1 class="heading" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">Get in Touch</h1>
    <div class="contact-info">
      <div class="info-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        <i class="fas fa-map-marker-alt"></i>
        <p>Address: {{ address1 }}</p>
      </div>
      <div class="info-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        <i class="fas fa-envelope"></i>
        <p>Email: {{ email1 }}</p>
      </div>
      <div class="info-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        <i class="fas fa-phone"></i>
        <p>Phone: {{ phoneNumber }}</p>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" class="contact-form" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
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
      <button @click="showAlert = false" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">OK</button>
    </div>

    <div class="cv-button" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
  <a href="https://www.canva.com/design/DAGTJ0th1Pk/6GUri2eDE75QOVhdVNzekQ/edit?utm_content=DAGTJ0th1Pk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">
    <button data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
      <span>View My CV</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 74 74"
        height="34"
        width="34"
      >
        <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
        <path
          fill="black"
          d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
        ></path>
      </svg>
    </button>
  </a>
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
.heading {
  display: flex;
  justify-content: center;
}

.contact {
  text-align: center;
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.contact-info {
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.info-item i {
  font-size: 24px;
  margin-right: 10px;
}

.info-item p {
  margin: 0;
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
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s;
  padding: 10px 20px;
  background: #9CA986;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-top: 0.6em;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

button:hover {
  background-color: #ffffff;
  color: black;
}

button > svg {
  width: 34px;
  margin-left: 10px;
  transition: transform 0.3s ease-in-out;
}

button:active {
  transform: scale(0.95);
}

.cv-button {
  display: flex;
  justify-content: center; 
}

.cv-button :hover {
  transition: all 0.2s;
}

.cv-button a {
  text-decoration: none;
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
  /* grid-template-columns: 1fr 200px; */
  gap: 20px;
}

.contact-info, form {
  grid-column: 1;
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
}

</style>
  