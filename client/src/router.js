import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('./components/login.vue')
    },
    {
        path: '/register',
        name: 'Registration',
        component: () => import('./components/registration.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('./components/Dashboard.vue')
    },
    {
        path: '/document/:id',
        name: 'document',
        component: () => import('./components/document.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
