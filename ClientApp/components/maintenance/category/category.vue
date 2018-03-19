<template>
    <v-layout>
        <v-flex xs12 sm8 offset-sm2>
            <v-card class="mt-5">
                <v-toolbar extended
                           flat
                           color="primary-cyan"
                           style="z-index:2">
                    <div class="headline white--text pl-1">
                        Category
                    </div>
                    <v-btn color="fab-brown"
                           class="mr-5"
                           dark
                           absolute
                           bottom
                           right
                           fab
                           @click.native.stop="dialog = !dialog">
                        <v-icon>add</v-icon>
                    </v-btn>
                </v-toolbar>
                <div>
                    <v-tabs centered
                            v-model="currentItem"
                            color="accent-cyan"
                            dark
                            slider-color="yellow"
                            slot="extension">
                        <v-tab v-for="tab in tabsItems"
                               :key="tab.title"
                               :href="'#tab-' + tab.title">
                            <span class="subheading white--text">{{tab.title}}</span>
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="currentItem">
                        <v-tab-item v-for="tab in tabsItems"
                                    :key="tab.title"
                                    :id="'tab-' + tab.title">
                            <v-card flat>
                                <br />
                                <v-card-text>
                                    <v-layout row wrap class="text-xs-center grey--text">
                                        <!-- label -->
                                        <v-flex xs6 offset-xs3>
                                            <strong class="subheading">Category</strong>
                                        </v-flex>
                                        <v-flex xs1>
                                            <span class="subheading">Is Active</span>
                                        </v-flex>
                                    </v-layout>
                                    <div v-for="(category, index) in tab.categories">
                                        <v-layout row wrap class="text-xs-center">
                                            <v-flex xs1 offset-xs2>
                                                <!-- save btn -->
                                                <v-btn flat icon color="icon-brown">
                                                    <v-icon medium>fa fa-save</v-icon>
                                                </v-btn>
                                            </v-flex>
                                            <v-flex xs6>
                                                <!-- category text field -->
                                                <v-text-field name="input-1"
                                                              id="testing"
                                                              label="Category"
                                                              :value="category.categoryName"></v-text-field>
                                            </v-flex>
                                            <v-flex xs1>
                                                <!-- is active field -->
                                                <v-switch v-model="category.isActive"
                                                          color="secondary-cyan"
                                                          class="pl-4 pt-3"></v-switch>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                    <br />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </div>
                <v-dialog v-model="dialog" max-width="500px">
                    <v-card>
                        <v-card-text>
                            <div class="headline grey--text text--darken-2">
                                <span>New Category</span>
                            </div>
                            <div>
                                <v-text-field label="Category"></v-text-field>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat color="action-brown" @click.native="dialog = false">Submit</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script src="./category_code.js"></script>
<style>
</style>

