import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/lesson20',
      name: 'lesson20',
      component: () => import('../views/LessonView20.vue')
    },
    {
      path: '/lesson21',
      name: 'lesson21',
      component: () => import('../views/LessonView21.vue')
    },
    {
      path: '/lesson22',
      name: 'lesson22',
      component: () => import('../views/LessonView22.vue')
    }
  ]
});

export default router;
