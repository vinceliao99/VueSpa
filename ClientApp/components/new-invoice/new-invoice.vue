<template>
    <v-layout>
        <v-flex xs12 sm8 offset-sm2>
            <v-card class="mt-5">
                <v-card-media class="card-media-cyan white--text"
                              height="115px"
                              src="/static/doc-images/cards/docks.jpg">
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">New Invoice</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-media>
                <v-card-title>
                    <div>
                        <span class="grey--text">Number 10</span><br>
                        <span>Whitehaven Beach</span><br>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat color="grey darken-4">Share</v-btn>
                    <v-btn flat color="grey darken-4">Explore</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>
