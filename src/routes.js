import HomePage from './pages/home'
import AboutPage from './pages/about'
import ErrorPage from './pages/error'
import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

const routerHistory = createWebHashHistory()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: ErrorPage
  }
]

const routers = createRouter({
  history: routerHistory,
  routes
})

export default routers
