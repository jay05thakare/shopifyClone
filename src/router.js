import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import AllOrders from './views/AllOrders.vue'
import Drafts from './views/Drafts.vue'
import AbandonedCheckouts from './views/AbandonedCheckouts.vue'
import Products from './views/Products.vue'
import Marketing from './views/MarketingOverview.vue'
import MarketingCampaign from './views/MarketingCampaign.vue'
import AnalyticsDashboard from './views/AnalyticsDashboard.vue'
import AnalyticsReport from './views/AnalyticsReport.vue'
import OverTime from './views/OverTime.vue'

import World from './views/World.vue'
// import Newside from '.components/Newside.vue'
import sample from './components/Sample.vue'

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
        name: 'Marketing',
        component: Marketing,
        path: '/marketing'
    },
    {
        name: 'MarketingCampaign',
        component: MarketingCampaign,
        path: '/marketingCampaign'
    },
    {
        name: 'AnalyticsDashboard',
        component: AnalyticsDashboard,
        path: '/AnalyticsDashboard'
    },
    {
        name: 'AnalyticsReport',
        component: AnalyticsReport,
        path: '/AnalyticsReport'
    },
    {
        name: 'OverTime',
        component: OverTime,
        path: '/OverTime'
    },
    {
        name: 'World',
        component: World,
        path: '/world'
    },
    // {
    //     name: 'Newside',
    //     component: Newside,
    //     path: '/newside'
    // },
    {
        name: 'sample',
        component: sample,
        path: '/sample'
    },
]

const router = createRouter({
    history: createWebHistory(),routes
})

export default router