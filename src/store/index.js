import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Trabajos: [{
                url: "bicicletas-covid19",
                nombre: "Bicicletas COVID-19",
                descripcion: "Landing page creada para promocionar y brindar información sobre varios puntos de alquileres de bicicletas en España, para reducir el movimiento en transporte público y evitar aglomeraciones.",
                herramientas: ['HTML', 'CSS'],
                urlPagina: 'http://www.bicicletascovid-19.com/',
                imgInicio: 'bicicletas',
                imgDetalles1: ['home-bicicletas'],
                imgDetalles2: ['mobile-bicicletas-1', 'mobile-bicicletas-2', 'mobile-bicicletas-3'],
                bgImg: 'bicicletas-bg',
                descripcionLarga: "aaaaaaaaaaaaaa"

            },
            {
                url: "weatherapp",
                nombre: "WeatherApp",
                descripcion: "Landing page creada para promocionar y brindar información sobre varios puntos de alquileres de bicicletas en España, para reducir el movimiento en transporte público y evitar aglomeraciones.",
                herramientas: ['HTML', 'CSS', 'jQuery', 'API OpenWeatherMap'],
                urlPagina: '',
                imgInicio: 'clima',
                imgDetalles1: ['clima-1', 'clima-2', 'clima-3'],
                imgDetalles2: ['clima-4', 'clima-5', 'clima-6'],
                bgImg: 'clima-bg',
                descripcionLarga: 'aaaa'
            }
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})