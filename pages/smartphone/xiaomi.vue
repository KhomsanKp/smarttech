<template>
    <div>
        <v-sheet class="elevation-1 mt-5 mb-3">
            <h1 class="text-h5 font-weight-bold text-grey-darken-1 pl-6 py-3">Xiaomi</h1>
        </v-sheet>

        <v-card variant="text" class="mt-5">
            <SmartphoneList v-if="xiaomi.length > 0" :item-list="xiaomi" />

            <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet>
        </v-card>
    </div>
</template>

<script setup>
const { data: xiaomi } = await useAsyncData('xiaomi', () => queryContent('_smartphone', 'xiaomi').find())

useContentHead(xiaomi.value[0].header)
</script>