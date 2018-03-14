import "babel-polyfill";
import Vue from 'vue'
import Vuetify from 'vuetify'
import('vuetify/dist/vuetify.min.css')
import('font-awesome/css/font-awesome.css')
import axios from 'axios'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from 'components/app-root'

Vue.prototype.$http = axios;

sync(store, router)

Vue.use(Vuetify)

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
