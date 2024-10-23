<template>
    <div>
        <v-sheet class="elevation-1 mt-5 mb-3">
            <h1 class="text-h4 font-weight-bold text-grey-darken-1 pl-6 py-3">Smartphone</h1>
        </v-sheet>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-uppercase">Apple
            </h2>

            <SmartphoneList :item-list="smartphone.apple" />

            <!-- <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet> -->
        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-blue-darken-3 text-uppercase">
                Samsung
            </h2>

            <SmartphoneList :item-list="smartphone.samsung" />

            <!-- <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet> -->
        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-orange text-uppercase">
                Xiaomi
            </h2>

            <SmartphoneList :item-list="smartphone.xiaomi" />

            <!-- <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet> -->
        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-orange text-uppercase">
                Redmi
            </h2>

            <SmartphoneList :item-list="smartphone.redmi" />
            <!-- <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet> -->
        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-orange text-uppercase">
                Poco
            </h2>

            <SmartphoneList :item-list="smartphone.poco" />
            <!-- <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet> -->
        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-blue-darken-1 text-uppercase">
                Oppo
            </h2>

            <SmartphoneList :item-list="smartphone.oppo" />
            <!-- <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet> -->
        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-blue-darken-1 text-uppercase">
                Vivo
            </h2>

            <SmartphoneList :item-list="smartphone.vivo" />
            <!-- <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet> -->
        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-blue-darken-1 text-uppercase">
                Realme
            </h2>

            <SmartphoneList :item-list="smartphone.realme" />
            <!-- <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet> -->
        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-blue-darken-1 text-uppercase">
                OnePlus
            </h2>

            <SmartphoneList :item-list="smartphone.oneplus" />
            <!-- <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet> -->
        </v-card>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-uppercase">
                Infinix
            </h2>

            <SmartphoneList :item-list="smartphone.infinix" />
            <!-- <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet> -->
        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl rounded-lg pl-5 py-2 text-uppercase">
                Techno
            </h2>

            <SmartphoneList :item-list="smartphone.techno" />
            <!-- <v-sheet v-else class="w-100 py-10 text-center bg-amber-lighten-5 rounded-lg">
                <p>No documents</p>
            </v-sheet> -->
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

// const { data: apple } = await useAsyncData('apple', () => queryContent('_smartphone', 'apple').find())
// const { data: samsung } = await useAsyncData('samsung', () => queryContent('_smartphone', 'samsung').find())
// const { data: xiaomi } = await useAsyncData('xiaomi', () => queryContent('_smartphone', 'xiaomi').find())
// const { data: redmi } = await useAsyncData('redmi', () => queryContent('_smartphone', 'redmi').find())
// const { data: poco } = await useAsyncData('poco', () => queryContent('_smartphone', 'poco').find())
// const { data: oppo } = await useAsyncData('oppo', () => queryContent('_smartphone', 'oppo').find())
// const { data: realme } = await useAsyncData('realme', () => queryContent('_smartphone', 'realme').find())
// const { data: infinix } = await useAsyncData('infinix', () => queryContent('_smartphone', 'infinix').find())
// const { data: techno } = await useAsyncData('techno', () => queryContent('_smartphone', 'techno').find())
// const { data: vivo } = await useAsyncData('vivo', () => queryContent('_smartphone', 'vivo').find())
// const { data: oneplus } = await useAsyncData('oneplus', () => queryContent('_smartphone', 'oneplus').find())

const { data: test } = await useAsyncData('test', () => queryContent('_smartphone').find())

const smartphone = computed(() => {
    const apple = test.value.filter((mobile) => mobile.brand.toLowerCase() === 'apple')
    const samsung = test.value.filter((mobile) => mobile.brand.toLowerCase() === 'samsung')
    const xiaomi = test.value.filter((mobile) => mobile.brand.toLowerCase() === 'xiaomi')
    const redmi = test.value.filter((mobile) => mobile.brand.toLowerCase() === 'redmi')
    const poco = test.value.filter((mobile) => mobile.brand.toLowerCase() === 'poco')
    const oppo = test.value.filter((mobile) => mobile.brand.toLowerCase() === 'oppo')
    const vivo = test.value.filter((mobile) => mobile.brand.toLowerCase() === 'vivo')
    const realme = test.value.filter((mobile) => mobile.brand.toLowerCase() === 'realme')
    const oneplus = test.value.filter((mobile) => mobile.brand.toLowerCase() === 'oneplus')
    const infinix = test.value.filter((mobile) => mobile.brand.toLowerCase() === 'infinix')
    const techno = test.value.filter((mobile) => mobile.brand.toLowerCase() === 'techno')

    return { apple, samsung, xiaomi, redmi, poco, oppo, vivo, realme, oneplus, infinix, techno };
})

</script>