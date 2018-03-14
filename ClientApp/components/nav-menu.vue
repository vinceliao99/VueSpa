<template>
    <v-toolbar style="background-color:#3b3a36" dark>
        <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
        <v-toolbar-title>MBP&nbsp;&nbsp;&nbsp;</v-toolbar-title>
        <v-menu :nudge-width="100">
            <v-toolbar-title slot="activator">
                <span class="grey--text text--lighten-2">
                    Maintenance
                    <i class="fa fa-caret-down"></i>
                </span>
            </v-toolbar-title>
            <v-list>
                <v-list-tile v-on:click="goto('category')">
                    <v-list-tile-title>
                        Category
                    </v-list-tile-title>
                </v-list-tile>
                <v-list-tile v-on:click="goto('new-invoice')">
                    <v-list-tile-title>
                        New&nbsp;Invoice
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <span>
            <i class="fa fa-user fa-lg">&nbsp;&nbsp;John Doe</i>
        </span>
        <!--<v-btn icon>
            <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>-->
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
                this.$router.push(page);
                console.log('log');
            }
        } 
    }
</script>
