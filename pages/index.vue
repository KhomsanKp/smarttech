<template>
    <div>
        <v-sheet class="elevation-1 mt-5 mb-3">
            <h1 class="text-h5 font-weight-bold text-grey-darken-1 pl-6 py-3">News top 10</h1>
        </v-sheet>

        <BlogList v-if="blogs.length > 0" :blogs-list="blogs" />

        <v-container class="my-3">
            <v-sheet>
                <ContentDoc path="/advert/advert1" />
            </v-sheet>
        </v-container>

    </div>
</template>

<script setup>
const { data: blogs } = await useAsyncData('blogs', () => queryContent('/_blogs').find())

useHead({
    title: 'MDBblog',
    meta: [
        { name: 'title', content: 'MDBlog' },
        { name: 'description', content: 'MDBlog เว็บบล็อกไอที เทคโนโลบี สัตวเลี่้ยง ไลฟ์สไตส์ อื่นๆ' },
        { name: 'author', content: "Bird348" }
    ]
})
</script>