import "babel-polyfill";
import Vue from 'vue'
import Vuetify from 'vuetify'
import('vuetify/dist/vuetify.min.css')
import('font-awesome/css/font-awesome.css')
import('material-design-icons/iconfont/material-icons.css')
import axios from 'axios'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from 'components/app-root'

Vue.prototype.$http = axios;

sync(store, router)

Vue.use(Vuetify, {
    theme: {
        'primary': '#99b2ad',
        'primary-cyan': '#c0dfd9',
        'secondary-cyan': '#a5bab6',
        'accent-cyan': '#cce5e0',
        'icon-brown': '#8d6e63',
        'fab-brown': '#a28980',
        'action-brown': '#3E2723'
    }
})

const app = new Vue({
    store,
    router,
    ...App
})

export {
    app,
    router,
    store
}
