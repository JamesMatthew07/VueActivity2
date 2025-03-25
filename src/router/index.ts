import { createRouter, createWebHistory } from 'vue-router'
import DisplayStudentInformation from '@/components/DisplayStudentInformation.vue'
import LogIn from '@/components/LogIn.vue'
import SignUp from '@/components/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LogIn,
    },
    {
      path: '/goToDisplayStudentInformation',
      name: 'DisplayStudentInformation',
      component: DisplayStudentInformation,
    },
    {
      path: '/goToLogInForm',
      name: 'LogInForm',
      component: LogIn,
    },
    {
      path: '/goToSignUpForm',
      name: 'SignUpForm',
      component: SignUp,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
