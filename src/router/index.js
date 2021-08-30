import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/components/Home')
    }
]

export default createRouter({
    routes,
    history: createWebHistory(),
})