import Vue from 'vue'

// Style scss
import './assets/scss/main.scss'

import App from './App.vue'
import router from './router/index'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
