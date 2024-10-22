<template>
    <v-data-iterator :items="props.blogsList" :items-per-page="10" :search="search">
        <!-- <template v-slot:header>
            <v-toolbar class="px-2">
                <v-text-field v-model="search" density="comfortable" placeholder="Search"
                    prepend-inner-icon="mdi-magnify" style="max-width: 300px;" variant="solo" clearable
                    hide-details></v-text-field>
            </v-toolbar>
        </template> -->

        <template v-slot:default="{ items }">
            <v-container class="pa-2" fluid>
                <v-row dense>
                    <v-col v-for="item in items" :key="item.id" cols="12" sm="6" md="4">
                        <v-card class="pb-3" border flat width="100%">
                            <v-img :src="item.raw.imageUrl" aspect-ratio="16/9" cover=""></v-img>

                            <v-card variant="text" height="100">

                                <v-list-item :subtitle="item.raw.description" class="mb-2 text-justify">
                                    <template v-slot:title>
                                        <strong class="text-h6 mb-2">{{ item.raw.title }}</strong>
                                    </template>
                                </v-list-item>
                            </v-card>

                            <p class="text-caption mt-2 ml-5 font-italic text-teal-lighten-1">
                                author: {{ item.raw.author }}
                            </p>

                            <div class="d-flex justify-space-between px-4">
                                <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                                    <v-icon icon="mdi-clock" start class="text-black"></v-icon>

                                    <div class="text-truncate text-black">{{ item.raw.createDate }}</div>
                                </div>

                                <v-btn :to="`/blog/${item.raw.id}`" color="teal" variant="tonal" class="text-none"
                                    size="small" text="เพิ่มเติม">
                                </v-btn>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </template>

        <!-- <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
            <div class="d-flex align-center justify-center pa-4">
                <v-btn :disabled="page === 1" density="comfortable" icon="mdi-arrow-left" variant="tonal" rounded
                    @click="prevPage"></v-btn>

                <div class="mx-2 text-caption">
                    Page {{ page }} of {{ pageCount }}
                </div>

                <v-btn :disabled="page >= pageCount" density="comfortable" icon="mdi-arrow-right" variant="tonal"
                    rounded @click="nextPage"></v-btn>
            </div>
        </template> -->
    </v-data-iterator>


</template>

<script setup>
const props = defineProps(['blogsList'])
const search = ref('')
</script>