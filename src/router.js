import Home from './views/Home.vue'
import World from './views/World.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'World',
        component: World,
        path: '/world'
    }
]

const router = createRouter({
    history: createWebHistory(),routes
})

export default router