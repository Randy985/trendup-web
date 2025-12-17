import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Privacidad from '../pages/Privacidad.vue'
import Eliminacion from '../pages/Eliminacion.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/privacidad', component: Privacidad },
    { path: '/eliminacion', component: Eliminacion },
  ],
})
