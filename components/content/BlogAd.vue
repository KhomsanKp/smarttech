<template>
    <v-carousel :show-arrows="false" hide-delimiters cycle class="h-auto my-5">
        <v-carousel-item v-for="(item, i) of props.data" :src="item.src" :key="i" @click="visitLink(item.link)"
            class="cursor-pointer" fill max-height="300">
        </v-carousel-item>
    </v-carousel>
</template>

<script setup>
const props = defineProps(['data'])

async function visitLink(link) {
    await navigateTo(link, { external: true })
}
</script>