import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Signin from '../components/Signin.vue'
import Signup from '../components/Signup.vue'
import Dashboard from '../components/Dashboard.vue'
import ContactFormBuilder from '../components/ContactFormBuilder.vue'
import Contact from '../components/Contact.vue'
import Profile from '../components/Profile.vue'
import WorkInProgress from '../components/WorkInProgress.vue'
import Message from '../components/Message.vue'
import { isAuthenticated } from '../api'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    meta: { requiresAuth: false }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { requiresAuth: false }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/contact-form-builder',
    name: 'ContactFormBuilder',
    component: ContactFormBuilder,
    meta: { requiresAuth: true }
  },
  {
    path: '/emoji-form-builder',
    name: 'EmojiFormBuilder',
    component: WorkInProgress,
    meta: { requiresAuth: true }
  },
  {
    path: '/feedback-form-builder',
    name: 'FeedbackFormBuilder',
    component: WorkInProgress,
    meta: { requiresAuth: true }
  },
  {
    path: '/comment-section-builder',
    name: 'CommentSectionBuilder',
    component: WorkInProgress,
    meta: { requiresAuth: true }
  },
  {
    path: '/embed/contact-form/:id',
    name: 'Contact',
    component: Contact,
    meta: { requiresAuth: false }
  },
  {
    path: '/form',
    name: 'Status',
    component: Message,
    meta: { requiresAuth: false }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const isLoggedIn = await isAuthenticated()
    if(isLoggedIn) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
