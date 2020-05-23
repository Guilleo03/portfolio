import Vue from 'vue'
import VueRouter from 'vue-router'
import SeccionTrabajos from '../components/SeccionTrabajos'
import Contacto from '../components/Contacto'
import AcercaDeMi from '../components/AcercaDeMi'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue'),
        children: [{
                path: 'SeccionTrabajos',
                component: SeccionTrabajos,
                meta: { requiresAuth: true }
            },
            {
                path: 'AcercaDeMi',
                component: AcercaDeMi,
                meta: { requiresAuth: true }
            },
            {
                path: 'Contacto',
                component: Contacto,
                meta: { requiresAuth: true }
            }
        ]
    },
    {
        path: '/Trabajos/:url',
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