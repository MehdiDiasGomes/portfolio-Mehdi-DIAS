import Tools from './pages/tools.vue'
import Home from './pages/home.vue'
import Hire from './pages/hire.vue'
import NotFound from './pages/notFound.vue'
import Skills from './pages/skills.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/tools', component: Tools },
    { path: '/skills', component: Skills },
    { path: '/hire', component: Hire },
    {
        path: '/:path(.*)',
        component: NotFound
    }
]