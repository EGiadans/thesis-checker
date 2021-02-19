import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EmailValidation from "../components/EmailValidation";
import VerificationCode from "../components/VerificationCode";
import ChangePassword from "../components/ChangePassword";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/validate-email',
    name: 'EmailValidation',
    component: EmailValidation
  },
  {
    path: '/verification-code',
    name: 'VerificationCode',
    component: VerificationCode
  },
  {
    path: '/new-password',
    name: 'ChangePassword',
    component: ChangePassword
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
