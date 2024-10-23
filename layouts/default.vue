<template>
    <v-app>
        <TheHeader />

        <v-main>
            <v-container>
                <slot />
            </v-container>
        </v-main>

        <div>
            <v-container class="my-3 border">
                <v-sheet>
                    <ContentDoc path="/advert/advert1" />
                </v-sheet>
            </v-container>
        </div>

        <TheFooter />

    </v-app>
</template>

<script setup>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
</script>