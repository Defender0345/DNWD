import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';
import TermsAndConditions from '../views/TermsAndConditions.vue';
import Glossary from '../views/Glossary.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/termsAndConditions',
    name: 'TermsAndConditions',
    component: TermsAndConditions,
  },
  {
    path: '/glossary',
    name: 'Glossary',
    component: Glossary,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
