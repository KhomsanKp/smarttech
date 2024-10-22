<template>
    <v-app>
        <TheHeader />

        <v-main>
            <v-container>
                <slot />
            </v-container>
        </v-main>

        <TheFooter />

    </v-app>
</template>

<script setup>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
</script>