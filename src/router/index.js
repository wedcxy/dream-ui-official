import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Document from '../views/document.vue'
import Icon from '../components/icon.vue'
import Button from '../components/button.vue'
import install from '../components/install.vue'
import card from '../components/card.vue'
import link from '../components/link.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Document',
    name: 'Document',
    component: Document,
    redirect:'/install',
    children:[
      {
        path: '/Button',
        component: Button
      },
      {
        path: '/Icon',
        component: Icon
      },
      {
        path:'/install',
        component:install
      },
      {
        path:'/card',
        component:card
      },
      {
        path:'/link',
        component:link
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
