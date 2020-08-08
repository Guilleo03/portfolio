import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ScrollAnimation from './assets/js/scrollanimation'
import ScrollAnimationLeft from './assets/js/scrollanimation-left'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.directive('scrollAnimation', ScrollAnimation);
Vue.directive('scrollAnimation-left', ScrollAnimationLeft);
Vue.use(VueSmoothScroll, {
    duration: 1000,
    updateHistory: false,
});


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')