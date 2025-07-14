import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogCreateView from '@/views/BlogCreateView.vue'
import BlogDetailView from '@/views/BlogDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog-create',
      name: 'blog-create',
      component: BlogCreateView,
    },
    {
      path: '/blog-detail/:id',
      name: 'blog-detail',
      component: BlogDetailView,
    },
  ],
})

export default router
