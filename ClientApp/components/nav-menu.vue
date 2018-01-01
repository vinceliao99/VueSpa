<template>
    <v-toolbar style="background-color:#3b3a36" dark>
        <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
        <v-toolbar-title>New Project&nbsp;&nbsp;&nbsp;</v-toolbar-title>
        <v-menu :nudge-width="100">
            <v-toolbar-title slot="activator">
                <span>Invoice</span>
                <v-icon dark>arrow_drop_down</v-icon>
            </v-toolbar-title>
            <v-list>
                <v-list-tile v-on:click="goto('new-invoice')">
                    <v-list-tile-title>
                        New&nbsp;Invoice
                    </v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-title>
                        Cancel&nbsp;Invoice
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>search</v-icon>
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
        data() {
            return {
                items: [
                    'All', 'Family', 'Friends', 'Coworkers'
                ]
            }
        },
        methods: {
            goto: function (page) {
                this.$router.push('new-invoice');
                console.log('log');
            }
        } 
    }
</script>
