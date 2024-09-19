import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutComp from '../views/AboutComp.vue'; 
import ProjectsComp from '../views/ProjectsComp.vue';
import ContactComp from '../views/ContactComp.vue';
import EducationComp from '@/views/EducationComp.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutComp
  },
  {
    path: '/education',
    name: 'education',
    component: EducationComp
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsComp
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactComp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
