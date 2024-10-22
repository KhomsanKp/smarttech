<template>
    <div>
        <v-sheet class="elevation-1 mt-5 mb-3">
            <h1 class="text-h5 font-weight-bold text-grey-darken-1 pl-6 py-3">สัตว์เลี้บง</h1>
        </v-sheet>

        <BlogList v-if="pets.length > 0" :blogs-list="pets" />

        <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
            <p>No documents</p>
        </v-sheet>
    </div>
</template>

<script setup>
import BlogList from '~/components/BlogList.vue';

useHead({
    title: 'Pets blog',
    meta: [
        { name: 'title', content: 'Pets' },
        { name: 'description', content: 'Pets สัตวเลี่้ยง' },
        { name: 'author', content: "Bird348" }
    ]
})

const { data: pets } = await useAsyncData('pets', () => queryContent('_blogs').where({ category: 'pets' }).find())

</script>