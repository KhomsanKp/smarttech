<template>
    <v-sheet class="video-container my-5">
        <iframe class="video pa-0 ma-0" :src="src" frameborder="0" allowfullscreen> </iframe>
    </v-sheet>
</template>

<script setup>
defineProps(['src'])
</script>

<style scoped>
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
}

.video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>