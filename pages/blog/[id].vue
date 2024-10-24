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

const { data: blog } = await useAsyncData(`blog:${id}`, () => queryContent('_blogs').where({ id: id }).findOne(), {
    watch: [id]
})

useContentHead(blog)
</script>