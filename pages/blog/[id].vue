<template>
    <v-sheet>
        <ContentRenderer :value="blog">
            <ContentRendererMarkdown :value="blog" />
        </ContentRenderer>
    </v-sheet>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const { data: blog } = await useAsyncData('blog', () => queryContent('_blogs').where({ id: id }).findOne())

useContentHead(blog)
</script>