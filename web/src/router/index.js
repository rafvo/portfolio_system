import Vue from 'vue'
import VueRouter from 'vue-router'
// import Users from '@/views/users/Users.vue'
import Curriculum from '@/views/curriculum/Curriculum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Curriculum',
    component: Curriculum,
    meta: {
      title: 'Curriculo'
    }
  },
  // {
  //   path: '/',
  //   name: 'Users',
  //   component: Users,
  //   meta: {
  //     title: 'Usuários'
  //   }
  // },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

export default router