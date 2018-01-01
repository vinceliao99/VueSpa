<template>
    <div id="app" class="container-fluid">
        <v-app class="row">
            <div class="col-sm-3">
                <nav-menu params="route: route"></nav-menu>
            </div>
            <div class="col-sm-9 paper-blue-bg" style="height: 100%">
                <router-view></router-view>
            </div>
        </v-app>

    </div>

</template>

<script>
import Vue from 'vue'
import HomePage from './home-page'
import NavMenu from './nav-menu'
import NewInvoice from './new-invoice/new-invoice'

Vue.component('home-page', HomePage);
Vue.component('nav-menu', NavMenu);
Vue.component('new-invoice', NewInvoice);

export default {
    data() {
        return {
        }
    }
}
</script>

<style>
</style>
