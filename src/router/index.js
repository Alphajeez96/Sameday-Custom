import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import Team from '../views/Team.vue'
import Production from '../views/Production.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'projects',
    component:Projects
  },
  
    {
      path:'/team',
      name:'team',
      component:Team
    },

    {
      path:'/production',
      name:'Production',
      component:Production
    }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
