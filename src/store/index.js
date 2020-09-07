import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Trabajos: [{
                url: "real-alfaro",
                nombre: "Real & Alfaro",
                descripcion: "Real & Alfaro es un estudio de abogados y escribanos. En este proyecto mi tarea fue realizar la maquetación web y responsive del sitio y programar el formulario de contacto. La empresa cuenta con dos áreas diferentes: área legal y área notarial. La página cuenta con una sección detallada para cada una de ellas, ademas de otras secciones como: nuestra firma, nuestro equipo, clientes y más",
                herramientas: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'PHP'],
                urlPagina: 'https://www.realalfaro.com.uy/es/',
                imgInicio: 'real-alfaro',
                imgDetalles1: ['real-alfaro-1'],
                imgDetalles2: ['real-alfaro-2', 'real-alfaro-3', 'real-alfaro-4'],
                bgImg: 'real-alfaro-bg',
                descripcionLarga: 'En este proyecto profundice mis conocimientos en Bootstrap, utilizando sus funcionalidades como por ejemplo: slider, acordeones, pestañas, cards y responsive.',
                destacado: true
            },
            {
                url: "bicicletas-covid19",
                nombre: "Bicicletas COVID-19",
                descripcion: "Landing page creada para promocionar y brindar información sobre varios puntos de alquileres de bicicletas en España, para reducir el movimiento en transporte público y evitar aglomeraciones.",
                herramientas: ['HTML', 'CSS'],
                urlPagina: 'http://www.bicicletascovid-19.com/',
                imgInicio: 'bicicletas',
                imgDetalles1: ['home-bicicletas'],
                imgDetalles2: ['mobile-bicicletas-1', 'mobile-bicicletas-2', 'mobile-bicicletas-3'],
                bgImg: 'bicicletas-bg',
                descripcionLarga: "",
                destacado: false

            },
            {
                url: "weatherapp",
                nombre: "WeatherApp",
                descripcion: "Aplicación para ver el pronóstico del clima. Nos brinda la temperatura actual con detalles y un pronóstico de los próximos 7 días. Te da la posibilid de elegir un país y ciudad específica o desde nuestra ubicación actual.",
                herramientas: ['HTML', 'CSS', 'jQuery', 'API OpenWeatherMap'],
                urlPagina: '',
                imgInicio: 'clima',
                imgDetalles1: ['clima-1', 'clima-2', 'clima-3'],
                imgDetalles2: ['clima-4', 'clima-5', 'clima-6'],
                bgImg: 'clima-bg',
                descripcionLarga: 'La desarrollamos en la materia Diseño web 3 en 2018. Estabamos aprendiendo a desarrollar aplicaciones moviles, usar Ajax y conectarnos a una API para traer información.',
                destacado: true
            },
            {
                url: "uniforms-factory",
                nombre: "Uniforms Factory",
                descripcion: "Aplicación para ver el pronóstico del clima. Nos brinda la temperatura actual con detalles y un pronóstico de los próximos 7 días. Te da la posibilid de elegir un país y ciudad específica o desde nuestra ubicación actual.",
                descripcion: "Es una web e-commerce de camisetas de equipos de fútbol. Cuenta con una parte pública con home, catálogo, detalle de cada producto y más. El administrador cuenta con un login y se puede gestionar toda la página desde allí: agregar camisetas, editar su información, eliminarlas y cambiar las imágenes del slider y de los productos destacados.",
                herramientas: ['HTML', 'CSS', 'jQuery', 'PHP', 'MySQl'],
                urlPagina: '',
                imgInicio: 'camisetas',
                imgDetalles1: ['camisetas-1'],
                imgDetalles2: ['camisetas-2'],
                bgImg: 'camisetas-bg',
                descripcionLarga: 'La desarrollamos en la materia Programación 2 en 2018. Estabamos aprendiendo a usar PHP con MySQL.',
                destacado: false
            },
            {
                url: "estudio-fontanar",
                nombre: "Estudio Fontanar",
                descripcion: "Fontanar es una empresa dedicada a la consultoría y asesoramiento. En este proyecto mi tarea fue realizar la maquetación web y responsive del sitio. Es una página one page con distintas secciones, mapa de ubicación, formulario y datos de contacto",
                herramientas: ['HTML', 'CSS', 'jQuery'],
                urlPagina: 'https://www.fontanar.com.uy/',
                imgInicio: 'fontanar',
                imgDetalles1: ['fontanar-1'],
                imgDetalles2: ['fontanar-2', 'fontanar-3', 'fontanar-4'],
                bgImg: 'fontanar-bg',
                descripcionLarga: '',
                destacado: true
            }
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})