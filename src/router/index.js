import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "HomePage" */ '@/modules/home/pages/HomePage')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "ContactPage" */ '@/modules/contact/pages/ContactPage')
  },
  {
    path: '/author',
    name: 'author',
    component: () => import(/* webpackChunkName: "ContactPage" */ '@/modules/author/pages/AuthorPage')
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'notFound',
    component: () => import(/* webpackChunkName: 'NoPageFoundPage'*/ '@/modules/shared/pages/NoPageFound.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
