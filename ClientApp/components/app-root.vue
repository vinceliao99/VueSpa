<template>
    <div id="app" class="container-fluid">
        <v-app class="row">
            <div class="col-sm-3">
                <nav-menu params="route: route"></nav-menu>
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </v-app>

    </div>

</template>

<script>
import Vue from 'vue'
import CounterExample from './counter-example'
import FetchData from './fetch-data'
import HomePage from './home-page'
//import NavMenu from './nav_menu/nav_menu'
import NavMenu from './nav-menu'
//import Test from './test'

Vue.component('counter-example', CounterExample);
Vue.component('fetch-data', FetchData);
Vue.component('home-page', HomePage);
Vue.component('nav-menu', NavMenu);
//Vue.component('test', Test);

export default {
    data() {
        return {
        }
    }
}
</script>

<style>
</style>
