import Vue from "vue";
import VueRouter from "vue-router";

import Login from '../veiws/Login.vue'
import Main from '../veiws/Main.vue'
import Form from '../veiws/Form.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/login', component: Login },
        { path: '/', component: Main },
        { path: '/form', component: Form }
    ]
})

export default router