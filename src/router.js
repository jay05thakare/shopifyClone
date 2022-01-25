import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import AllOrders from './views/AllOrders.vue'
import Drafts from './views/Drafts.vue'
import AbandonedCheckouts from './views/AbandonedCheckouts.vue'
import Products from './views/Products.vue'
import World from './views/World.vue'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'AllOrders',
        component: AllOrders,
        path: '/allOrders'
    },
    {
        name: 'Drafts',
        component: Drafts,
        path: '/drafts'
    },
    {
        name: 'AbandonedCheckouts',
        component: AbandonedCheckouts,
        path: '/abandonedCheckouts'
    },
    {
        name: 'Products',
        component: Products,
        path: '/products'
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