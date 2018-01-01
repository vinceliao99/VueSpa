<template>
    <!--<div class="main-nav">
        <div class="navbar navbar-inverse">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" v-on:click="toggleCollapsed">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                <a class="navbar-brand" href="/">Vue2Spa</a>
            </div>
            <div class="clearfix"></div>
            <transition name="slide">
                <div class="navbar-collapse collapse in" v-show="!collapsed">
                    <ul class="nav navbar-nav">
                        <li v-for="route in routes">
                             TODO: highlight active link
                            <router-link :to="route.path">
                                <span :class="route.style"></span> {{ route.display }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>-->

    <v-toolbar color="grey darken-1" dark>
        <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
        <v-toolbar-title>New Project&nbsp;&nbsp;&nbsp;</v-toolbar-title>
        <v-menu :nudge-width="100">
            <v-toolbar-title slot="activator">
                <span>Invoice</span>
                <v-icon dark>arrow_drop_down</v-icon>
            </v-toolbar-title>
            <v-list>
                <v-list-tile v-for="item in items" :key="item" @click="">
                    <v-list-tile-title v-text="item"></v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <v-btn icon v-on:click="goTo('newInvoice')">
            <v-icon>New&nbsp;Invoice</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>


</template>

<script>
    import { routes } from '../routes'

    export default {
        //data() {
        //    return {
        //        routes,
        //        collapsed : true
        //    }
        //},
        //methods: {
        //    toggleCollapsed: function(event){
        //        this.collapsed = !this.collapsed;
        //    }
        //}
        data() {
            return {
                items: [
                    'All', 'Family', 'Friends', 'Coworkers'
                ]
            }
        }
    }
</script>

<style>
    /*.slide-enter-active, .slide-leave-active {
      transition: max-height .35s
    }
    .slide-enter, .slide-leave-to {
      max-height: 0px;
    }

    .slide-enter-to, .slide-leave {
      max-height: 20em;
    }*/
</style>
