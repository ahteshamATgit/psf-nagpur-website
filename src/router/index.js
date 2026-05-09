import { createRouter, createWebHistory } from 'vue-router'

// import Home from '../views/Home.vue'
const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  {
    path: '/landing',
    name: 'landing',
    component: () => import(/* webpackChunkName: "landing" */ '../views/Landing.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/events',
    name: 'events',
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue'),
  },
  {
    path: '/events/:slug',
    name: 'event-details',
    component: () => import(/* webpackChunkName: "event-details" */ '../views/EventDetails.vue'),
  },
  {
    path: '/initiatives',
    name: 'social-initiatives',
    component: () =>
      import(/* webpackChunkName: "event-details" */ '../views/SocialInitiatives.vue'),
  },
  {
    path: '/initiatives/:slug',
    name: 'social-initiative-details',
    component: () =>
      import(/* webpackChunkName: "event-details" */ '../views/SocialInitiativeDetails.vue'),
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
