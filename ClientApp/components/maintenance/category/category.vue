<template>
    <v-layout row>
        <v-flex xs8 offset-xs2>
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
                            <v-alert type="warning"
                                     dismissible
                                     v-model="warningToast.isOpen"
                                     class="mt-0">
                                {{ warningToast.message }}
                            </v-alert>
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
                                        <v-flex xs1 offset-xs2>
                                            <v-badge left overlap color="warning">
                                                <span slot="badge" v-if="!category.isValid">!</span>
                                                <v-btn flat icon color="icon-brown"
                                                       :loading="category.isLoading"
                                                       :disabled="category.isLoading"
                                                       v-on:click="saveCategory(index, tab.title)">
                                                    <v-icon medium>fa fa-save</v-icon>
                                                </v-btn>
                                            </v-badge>
                                        </v-flex>
                                        <v-flex xs6>
                                            <!-- category text field -->
                                            <v-text-field label="Category"
                                                          v-model="category.categoryName"
                                                          :rules="[v => !!v || 'category name is required']"></v-text-field>
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
                                <v-btn flat color="action-brown"
                                       v-on:click="closeNewCategoryModal()">
                                    Cancel
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                </v-dialog>
                <!--<v-snackbar :timeout=99999
                            color="amber"
                            v-model="warningToast.isOpen"
                            class="mt-5">
                    {{ warningToast.message }}
                    <v-btn flat @click.native="warningToast.isOpen = false">Close</v-btn>
                </v-snackbar>-->
            </v-card>
        </v-flex>
    </v-layout>

</template>
<script src="./category_code.js"></script>
<style>
</style>

