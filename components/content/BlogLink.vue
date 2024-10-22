<template>
    <v-btn :href="link" :color="color" :variant="variant">
        <ContentSlot :use="$slots.default" unwrap="p" />
    </v-btn>
</template>

<script setup>

defineProps({
    link: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: 'teal'
    },
    variant: {
        type: String,
        default: 'text'
    }
})
</script>