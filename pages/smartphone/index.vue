<template>
    <div>
        <v-sheet class="elevation-1 mt-5 mb-3">
            <h1 class="text-h4 font-weight-bold text-grey-darken-1 pl-6 py-3">Smartphone</h1>
        </v-sheet>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-teal-lighten-4 rounded-lg pl-5 py-2">Apple</h2>

            <SmartphoneList v-if="apple.length > 0" :item-list="apple" />

            <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet>
        </v-card>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-teal-lighten-4 rounded-lg pl-5 py-2 text-blue-darken-3">
                Samsung
            </h2>

            <SmartphoneList v-if="samsung.length > 0" :item-list="samsung" />

            <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet>
        </v-card>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-teal-lighten-4 rounded-lg pl-5 py-2 text-orange">
                Xiaomi
            </h2>

            <SmartphoneList v-if="xiaomi.length > 0" :item-list="xiaomi" />
            <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet>
        </v-card>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-teal-lighten-4 rounded-lg pl-5 py-2 text-orange">
                Redmi
            </h2>

            <SmartphoneList v-if="redmi.length > 0" :item-list="redmi" />
            <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet>
        </v-card>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-teal-lighten-4 rounded-lg pl-5 py-2 text-orange">
                Poco
            </h2>

            <SmartphoneList v-if="poco.length > 0" :item-list="poco" />
            <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet>
        </v-card>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-teal-lighten-4 rounded-lg pl-5 py-2 text-blue-darken-1">
                Oppo
            </h2>

            <SmartphoneList v-if="oppo.length > 0" :item-list="oppo" />
            <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet>
        </v-card>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-teal-lighten-4 rounded-lg pl-5 py-2 text-blue-darken-1">
                Vivo
            </h2>

            <SmartphoneList v-if="vivo.length > 0" :item-list="vivo" />
            <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet>
        </v-card>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-teal-lighten-4 rounded-lg pl-5 py-2 text-blue-darken-1">
                Realme
            </h2>

            <SmartphoneList v-if="realme.length > 0" :item-list="realme" />
            <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet>
        </v-card>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-teal-lighten-4 rounded-lg pl-5 py-2 text-blue-darken-1">
                OnePlus
            </h2>

            <SmartphoneList v-if="oneplus.length > 0" :item-list="oneplus" />
            <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet>
        </v-card>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-teal-lighten-4 rounded-lg pl-5 py-2">
                Infinix
            </h2>

            <SmartphoneList v-if="infinix.length > 0" :item-list="infinix" />
            <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet>
        </v-card>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-teal-lighten-4 rounded-lg pl-5 py-2">
                Techno
            </h2>

            <SmartphoneList v-if="techno.length > 0" :item-list="techno" />
            <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet>
        </v-card>

    </div>
</template>

<script setup>
useHead({
    title: 'All smartphone',
    meta: [
        { name: 'title', content: 'All Smartphone' },
        { name: 'description', content: 'Smartphone apple samsung oppo vivo realme oneplus xiaomi redmi poco infinix techno' },
        { name: 'author', content: "Bird348" }
    ]
})

const { data: apple } = await useAsyncData('apple', () => queryContent('_smartphone', 'apple').find())
const { data: samsung } = await useAsyncData('samsung', () => queryContent('_smartphone', 'samsung').find())
const { data: xiaomi } = await useAsyncData('xiaomi', () => queryContent('_smartphone', 'xiaomi').find())
const { data: redmi } = await useAsyncData('redmi', () => queryContent('_smartphone', 'redmi').find())
const { data: poco } = await useAsyncData('poco', () => queryContent('_smartphone', 'poco').find())
const { data: oppo } = await useAsyncData('oppo', () => queryContent('_smartphone', 'oppo').find())
const { data: realme } = await useAsyncData('realme', () => queryContent('_smartphone', 'realme').find())
const { data: infinix } = await useAsyncData('infinix', () => queryContent('_smartphone', 'infinix').find())
const { data: techno } = await useAsyncData('techno', () => queryContent('_smartphone', 'techno').find())
const { data: vivo } = await useAsyncData('vivo', () => queryContent('_smartphone', 'vivo').find())
const { data: oneplus } = await useAsyncData('oneplus', () => queryContent('_smartphone', 'oneplus').find())
</script>