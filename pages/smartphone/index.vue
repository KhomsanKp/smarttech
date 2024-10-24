import { SmartphoneList } from '../../.nuxt/components';
<template>
    <div>
        <v-sheet class="elevation-1 mt-5 mb-3">
            <h1 class="text-h4 font-weight-bold text-grey-darken-1 pl-6 py-3">Smartphone</h1>
        </v-sheet>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-uppercase">Apple
            </h2>

            <SmartphoneList :item-list="smartphone.apple" />

        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-blue-darken-3 text-uppercase">
                Samsung
            </h2>

            <SmartphoneList :item-list="smartphone.samsung" />

        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-orange text-uppercase">
                Xiaomi
            </h2>

            <SmartphoneList :item-list="smartphone.xiaomi" />

        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-orange text-uppercase">
                Redmi
            </h2>

            <SmartphoneList :item-list="smartphone.redmi" />

        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-orange text-uppercase">
                Poco
            </h2>

            <SmartphoneList :item-list="smartphone.poco" />

        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-blue-darken-1 text-uppercase">
                Oppo
            </h2>

            <SmartphoneList :item-list="smartphone.oppo" />

        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-blue-darken-1 text-uppercase">
                Vivo
            </h2>

            <SmartphoneList :item-list="smartphone.vivo" />

        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-blue-darken-1 text-uppercase">
                Realme
            </h2>

            <SmartphoneList :item-list="smartphone.realme" />

        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-blue-darken-1 text-uppercase">
                OnePlus
            </h2>

            <SmartphoneList :item-list="smartphone.oneplus" />

        </v-card>

        <v-card variant="text">
            <h2 class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl pl-5 py-2 text-uppercase">
                Infinix
            </h2>

            <SmartphoneList :item-list="smartphone.infinix" />

        </v-card>

        <v-card variant="text">
            <h2
                class="text-h5 font-weight-bold my-5 w-100 bg-amber-lighten-3 rounded-xl rounded-lg pl-5 py-2 text-uppercase">
                Techno
            </h2>

            <SmartphoneList :item-list="smartphone.techno" />

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


const { data: smartphoneList } = await useAsyncData('smartphone', () => queryContent('_smartphone').find())

const smartphone = computed(() => {
    const apple = smartphoneList.value.filter((mobile) => mobile.brand.toLowerCase() === 'apple')
    const samsung = smartphoneList.value.filter((mobile) => mobile.brand.toLowerCase() === 'samsung')
    const xiaomi = smartphoneList.value.filter((mobile) => mobile.brand.toLowerCase() === 'xiaomi')
    const redmi = smartphoneList.value.filter((mobile) => mobile.brand.toLowerCase() === 'redmi')
    const poco = smartphoneList.value.filter((mobile) => mobile.brand.toLowerCase() === 'poco')
    const oppo = smartphoneList.value.filter((mobile) => mobile.brand.toLowerCase() === 'oppo')
    const vivo = smartphoneList.value.filter((mobile) => mobile.brand.toLowerCase() === 'vivo')
    const realme = smartphoneList.value.filter((mobile) => mobile.brand.toLowerCase() === 'realme')
    const oneplus = smartphoneList.value.filter((mobile) => mobile.brand.toLowerCase() === 'oneplus')
    const infinix = smartphoneList.value.filter((mobile) => mobile.brand.toLowerCase() === 'infinix')
    const techno = smartphoneList.value.filter((mobile) => mobile.brand.toLowerCase() === 'techno')

    return { apple, samsung, xiaomi, redmi, poco, oppo, vivo, realme, oneplus, infinix, techno };
})

</script>