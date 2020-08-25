import Vue from 'vue'
import VueRouter from 'vue-router'
import SeccionTrabajos from '../components/SeccionTrabajos'
import AcercaDeMi from '../components/AcercaDeMi'
import Inicio from '../components/Inicio'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue'),
        children: [{
                path: '/seccionTrabajos',
                component: SeccionTrabajos,
                meta: { requiresAuth: true },
                view: Home
            },
            {
                path: '/acercaDeMi',
                component: AcercaDeMi,
                meta: { requiresAuth: true },
                view: Home
            }
        ]
    },
    {
        path: '/trabajos',
        name: 'ListaTrabajos',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ListaTrabajos.vue')
    },
    {
        path: '/trabajos/:url',
        name: 'Trabajos',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Trabajos.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(Trabajos, Home, savedPosition) {
        return { x: 0, y: 0 }
    }
})

export default router