import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Trabajos: [{
                url: "trabajo1",
                nombre: "Trabajo 1",
                descripcion: "Esta es la descripcion del trabajo 1",
            },
            {
                url: "trabajo2",
                nombre: "Trabajo 2",
                descripcion: "Esta es la descripcion del trabajo 2",
            }
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})