<template>
    <div>
        <v-app-bar scroll-behavior="hide" color="grey-darken-3">
            <v-app-bar-nav-icon variant="text" color="amber-lighten-2"
                @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-app-bar-title class="cursor-pointer" @click="gotoHome">
                <v-img src="/brand/smart-tech.png" width="90" />
            </v-app-bar-title>
        </v-app-bar>

        <v-navigation-drawer color="amber-lighten-1" v-model="drawer"
            :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>

            <v-list :opened="open" color="grey-darken-2">
                <v-list-item to="/" prepend-icon="mdi-home" title="หน้าหลัก"></v-list-item>

                <v-list-group value="Blogs">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-post" title="Blogs"></v-list-item>
                    </template>

                    <v-list-item v-for="([title, icon, link], i) in blogList" :key="i" :prepend-icon="icon"
                        :title="title" :to="link" :value="title"></v-list-item>
                </v-list-group>

                <v-list-group value="Smartphone">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-cellphone" title="Smartphone"></v-list-item>
                    </template>

                    <v-list-item v-for="([title, icon, link], i) in smartphoneList" :key="i" :prepend-icon="icon"
                        :title="title" :to="link" :value="title"></v-list-item>
                </v-list-group>

                <!-- <v-list-item to="/about" prepend-icon="mdi-home" title="เกี่ยวกับเรา"></v-list-item> -->
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
        open: ['Blogs', 'Smartphone'],
        blogList: [
            ['เทคโนโลยี', 'mdi-laptop', '/blog/tech'],
            ['สมาร์ทโฟน', 'mdi-cellphone', '/blog/smartphone'],
            ['สัตว์เลี้ยง', 'mdi-paw', '/blog/pets'],
        ],
        smartphoneList: [
            ['All brand', 'mdi-cellphone', '/smartphone'],
            ['Apple', 'mdi-apple', '/smartphone/apple'],
            ['Samsung', 'mdi-android', '/smartphone/samsung'],
            ['Xiaomi', 'mdi-android', '/smartphone/xiaomi'],
            ['Redmi', 'mdi-android', '/smartphone/redmi'],
            ['Poco', 'mdi-android', '/smartphone/poco'],
            ['Oppo', 'mdi-android', '/smartphone/oppo'],
            ['Vivo', 'mdi-android', '/smartphone/vivo'],
            ['Realme', 'mdi-android', '/smartphone/realme'],
            ['OnePlus', 'mdi-android', '/smartphone/oneplus'],
            ['Infinix', 'mdi-android', '/smartphone/infinix'],
            ['Techno', 'mdi-android', '/smartphone/techno'],


        ],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },

    methods: {
        gotoHome() {
            navigateTo('/')
        }
    }
}
</script>