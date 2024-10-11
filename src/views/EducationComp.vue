<template>
  <div class="education-page">
    <h1>Education</h1>
    <ul>
      <li v-for="(education, index) in educations" :key="index">
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h2>{{ education.institution }}</h2>
            </div>
            <div class="card-back">
              <p>{{ education.yearRange }}</p>
              <!-- <p v-else>{{ education.year }}</p> -->
              <p>{{ education.description }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
          "description": "Completed my schooling career at Bonteheuwel High School."
        },
        {
          "yearRange": "2021",
          "institution": "Amy Biehl Foundation",
          "description": "Completed a Reading and Writing Tutoring Workshop under the Amy Biehl Foundation."
        },
        {
          "yearRange": "2024 - 2025",
          "institution": "Coding Bootcamp",
          "description": "Joined a Coding Bootcamp program that provided the fundamentals of Web Development, including learning coding languages such as HTML, CSS, JavaScript, and more. The program also focused on interpersonal and self-development skills to aid personal growth both in life and the work environment."
        }
      ]
    };
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
  flex-wrap: wrap; /* Allows wrapping of the cards */
  justify-content: center;
}

li {
  margin: 10px;
  width: 100%; /* Full width by default */
  display: flex;
  justify-content: center;
}

.card {
  width: 420px;
  max-width: 500px; /* Set a max width for large screens */
  height: 280px; /* Adjust height as needed */
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
  color: #000000;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  font-size: 22px;
  transform: rotateY(0deg);
}

.card-back {
  background-color: #9CA986;
  color: #fff;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  font-size: 22px;
  padding: 1em;
  transform: rotateY(180deg);
}

/* Responsive adjustments */
@media (min-width: 768px) {
  li {
    flex: 1 1 calc(50% - 20px); /* 2 cards per row on tablets and larger screens */
  }
}

@media (max-width: 767px) {
  li {
    flex: 1 1 100%; /* 1 card per row on mobile screens */
  }

  .card {
    max-width: 100%; /* Full width on mobile */
    height: 220px;
  }
}
</style>
