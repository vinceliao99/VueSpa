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
                           v-on:click="openNewCategoryModal">
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
                                <div v-for="(category, index) in tab.categories" class="d-flex">
                                    <v-layout row wrap class="text-xs-center">
                                        <!--<v-flex xs1 offset-xs1 text-xs-right d-flex>
                                            <v-tooltip left v-show="!category.isValid" class="mt-2">
                                                <v-icon dark color="warning" slot="activator">fa fa-exclamation-circle</v-icon>
                                                <span>{{category.errMsg}}</span>
                                            </v-tooltip>
                                        </v-flex>-->
                                        <v-flex xs1 offset-xs2>
                                            <v-btn flat icon color="icon-brown"
                                                   :loading="category.isLoading"
                                                   :disabled="category.isLoading"
                                                   v-on:click="saveCategory(category, index, tab.title)">
                                                <v-icon medium>fa fa-save</v-icon>
                                            </v-btn>
                                        </v-flex>

                                        <v-flex xs6>
                                            <!-- category text field -->
                                            <v-text-field label="Category"
                                                          :value="category.categoryName"
                                                          :rules="[v => !!v || 'category name is required']"></v-text-field>
                                        </v-flex>
                                        <v-flex xs1>
                                            <!-- is active field -->
                                            <v-switch v-model="category.isActive"
                                                      color="secondary-cyan"
                                                      class="pl-4 pt-3"></v-switch>
                                        </v-flex>
                                        <v-flex xs1>
                                            <v-tooltip left v-show="!category.isValid" class="mt-2">
                                                <v-icon dark color="warning" slot="activator">fa fa-exclamation-circle</v-icon>
                                                <span>{{category.errMsg}}</span>
                                            </v-tooltip>
                                        </v-flex>
                                    </v-layout>
                                </div>
                                <br />

                            </v-card-text>

                        </v-tab-item>
                    </v-tabs-items>
                </div>
                <v-dialog v-model="newCategoryModal.isOpen" max-width="500px">
                    <v-form v-model="newCategoryModal.isFormValid" ref="form" lazy-validation>
                        <v-card>
                            <v-card-text>
                                <div class="headline grey--text text--darken-2">
                                    <span>New Category</span>
                                </div>
                                <div>
                                    <v-text-field label="Category"
                                                  v-model="newCategoryModal.categoryName"
                                                  :rules="newCategoryModal.categoryNameRules"
                                                  required></v-text-field>
                                </div>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn flat color="action-brown"
                                       :loading="newCategoryModal.isLoading"
                                       :disabled="newCategoryModal.isLoading"
                                       v-on:click="addNewCategory()">
                                    Submit
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                </v-dialog>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script src="./category_code.js"></script>
<style>
</style>

