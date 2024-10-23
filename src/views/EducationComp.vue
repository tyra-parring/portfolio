<template>
  <div class="education-page">
    <h1>Education</h1>
    <ul>
      <li v-for="(education, index) in educations" :key="index">
        <div class="card">
          <div class="card-inner">
            <div class="card-front" :style="{ backgroundImage: `url(${education.image})` }">
              <div class="image-overlay"></div>
              <h2>{{ education.institution }}</h2>
            </div>
            <div class="card-back">
              <!-- <p>{{ education.yearRange }}</p> -->
              <!-- <p v-else>{{ education.year }}</p> -->
              <p>{{ education.description }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div class="certificates-section">
      <h2>Badges</h2>
      <div class="badges-container">
        <div v-for="(badge, index) in badges" :key="index" class="badge">
          <img :src="badge.image" alt="Badge" />
          <h3>{{ badge.title }}</h3> <!-- Display badge title if needed -->
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>{{ selectedCertificate.title }}</h2>
        <img :src="selectedCertificate.image" alt="Certificate"/>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      educations: [
        {
          "yearRange": "2019 - 2022",
          "institution": "Bonteheuwel High School",
          "description": "Completed my schooling career at Bonteheuwel High School.",
          "image": "https://tyra-parring.github.io/homehost-/Bonteheuwel_High_School_logo.png"
        },
        {
          "yearRange": "2021",
          "institution": "Amy Biehl Foundation",
          "description": "Completed a Reading and Writing Tutoring Workshop under the Amy Biehl Foundation.",
          "image": "https://tyra-parring.github.io/homehost-/amybiehl.jpg"
        },
        {
          "yearRange": "2024 - 2025",
          "institution": "Coding Bootcamp",
          "description": "Joined a Coding Bootcamp program that provided the fundamentals of Web Development, including learning coding languages such as HTML, CSS, JavaScript, and more. The program also focused on interpersonal and self-development skills to aid personal growth both in life and the work environment.",
          "image": "https://tyra-parring.github.io/homehost-/newlifechoices.jpg"
        }
      ],
      badges: [
        {
          title: "Linux Badge",
          image: "https://tyra-parring.github.io/homehost-/linux2.png"
        },
        {
          title: "Operating Systems Badge",
          image: "https://tyra-parring.github.io/homehost-/operatingsystems.png"
        },
        // Add more certificates as needed
      ],
      isModalOpen: false,
      selectedCertificate: {}
    };
  },
  methods: {
    openModal(certificate) {
      this.selectedCertificate = certificate;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedCertificate = {};
    }
  }
}
</script>

<style scoped>
.education-page {
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.education-page h1 {
  display: flex;
  justify-content: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
}

li {
  margin: 10px;
  width: 100%; 
  display: flex;
  justify-content: center;
}

.card {
  width: 420px;
  /* max-width: 500px;  */
  height: 280px; 
  perspective: 1000px;
  transition: z-index 0.5s;
  margin-top: 2em;
  margin-bottom: 1.8em;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
  z-index: 1;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  /* border-radius: 10px; */
  justify-content: center;
  font-size: 22px;
  transform: rotateY(0deg);
  background-size: cover;
  background-position: center;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: grayscale(100%) contrast(1.5);
  background-image: inherit;
}

.card-back {
  background-color: #9CA986;
  color: #fff;
  display: flex;
  align-items: center;
  /* border-radius: 10px; */
  justify-content: center;
  font-size: 22px;
  padding: 1em;
  transform: rotateY(180deg);
}

.certificates-section {
  margin-top: 2em;
  text-align: center;
}

.badges-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.badge {
  margin: 10px;
  cursor: pointer;
}

.badge img {
  width: 150px; /* Adjust size as needed */
  height: auto;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.modal-content img {
  max-width: 100%;
  height: auto;
}

@media (min-width: 768px) {
  li {
    flex: 1 1 calc(50% - 20px);
  }
}

@media (max-width: 767px) {
  li {
    flex: 1 1 100%;
  }

  .card {
    max-width: 100%;
    width: 269px; 
    height: 220px;
    margin: 10px auto; 
  }
}
</style>
