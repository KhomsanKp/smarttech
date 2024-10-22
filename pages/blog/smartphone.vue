<template>
    <div>
        <v-sheet class="elevation-1 mt-5 mb-3">
            <h1 class="text-h5 font-weight-bold text-grey-darken-1 pl-6 py-3">SMARTPHONE</h1>
        </v-sheet>

        <BlogList v-if="smartphone.length > 0" :blogs-list="smartphone" />

        <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
            <p>No documents</p>
        </v-sheet>
    </div>
</template>

<script setup>
import BlogList from '~/components/BlogList.vue';

useHead({
    title: 'Smartphone blog',
    meta: [
        { name: 'title', content: 'Smartphone' },
        { name: 'description', content: 'Mobile Smartphone' },
        { name: 'author', content: "Bird348" }
    ]
})

const { data: smartphone } = await useAsyncData('smartphone', () => queryContent('_blogs').where({ category: 'smartphone' }).find())
</script>