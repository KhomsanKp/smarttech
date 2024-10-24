<template>
    <div>
        <v-sheet class="elevation-1 mt-5 mb-3">
            <h1 class="text-h5 font-weight-bold text-grey-darken-3 pl-6 py-3">รายละเอียด</h1>
        </v-sheet>

        <v-sheet>
            <v-row justify="center">
                <v-col cols="12" md="4" class="d-flex justify-center">
                    <v-img :src="mobiles.imageUrl" aspect-ratio="1" max-height="600" />
                </v-col>

                <v-col cols="12" md="8">
                    <v-sheet rounded="xl" class="text-grey-darken-3 bg-amber-lighten-4 py-5 px-4 ma-3 h-100">
                        <h2 class="font-weight-black text-uppercase text-center text-grey-darken-4">{{ mobiles.brand }}
                            <span>{{
                                mobiles.model
                            }}</span>
                        </h2>

                        <div class="border-b mb-3" />

                        <v-row no-gutters class="pt-2">

                            <v-col cols="2" class="d-flex justify-center">
                                <v-icon icon="mdi-cellphone-screenshot" />
                            </v-col>
                            <v-col cols="10">
                                <div class="text-subtitle-1">
                                    <span class="font-weight-bold mr-1">{{ mobiles.display.type }}</span>
                                    <span class="font-weight-bold">{{ mobiles.display.size }}</span>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row no-gutters class="pt-1">
                            <v-col cols="2" class="d-flex justify-center">
                                <v-icon :icon="mobiles.brand === 'Apple' ? 'mdi-apple-ios' : 'mdi-android'" />
                            </v-col>
                            <v-col cols="10">
                                <div class="text-subtitle-1">
                                    <span class="font-weight-bold">{{ mobiles.platform.os }}</span>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row no-gutters class="pt-1">
                            <v-col cols="2" class="d-flex justify-center">
                                <v-icon icon="mdi-memory" />
                            </v-col>

                            <v-col cols="10">
                                <div class="text-subtitle-1">
                                    <span class="font-weight-bold mr-1">{{ mobiles.platform.chipset }}</span>
                                    <span class="font-weight-bold mr-1">{{ mobiles.platform.cpu }}</span>
                                    <span class="font-weight-bold">{{ mobiles.platform.gpu }}</span>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row no-gutters class="pt-6">
                            <v-col cols="2" class="d-flex justify-center align-center">
                                <v-icon icon="mdi-cart" />
                            </v-col>

                            <v-col cols="10">
                                <div class="text-h6 text-green-darken-1 border pa-3 text-center">
                                    ราคาจำหน่าย (ประเทคไทย)
                                    <br>
                                    <span class="font-weight-bold text-h5 text-blue mr-1">{{ mobiles.misc.price
                                        }}</span>

                                </div>
                            </v-col>
                        </v-row>

                        <v-sheet class="text-center py-2 px-3 mt-10" elevation="2" rounded="xl" color="grey-lighten-4">
                            <v-row no-gutters>
                                <v-col cols="12" class="d-flex justify-center align-center">
                                    <v-icon icon="mdi-cart-check" size="2em" color="green" />
                                    <span
                                        class="font-weight-bold text-green-darken-2 border-b-lg border-success text-h6">เช็คราคาออนไลน์</span>
                                </v-col>

                                <v-col cols="12">
                                    <div class="d-flex flex-column mt-3">
                                        <v-btn :href="mobiles.shopeeLink" target="_blank" append-icon="mdi-cart-check"
                                            prepend-icon="mdi-check-circle" color="orange-darken-1" variant="tonal"
                                            rounded="xl" size="x-large">
                                            <template v-slot:prepend>
                                                <v-icon color="green-darken-1"></v-icon>
                                            </template>
                                            <span class="text-orange-darken-1 font-weight-bold">
                                                Shopee
                                            </span>
                                            <template v-slot:append>
                                                <v-icon color="orange-darken-1"></v-icon>
                                            </template>
                                        </v-btn>

                                        <v-btn :href="mobiles.lazadaLink" target="_blank" append-icon="mdi-cart-check"
                                            prepend-icon="mdi-check-circle" color="blue-darken-1 mt-3" variant="tonal"
                                            rounded="xl" size="x-large">
                                            <template v-slot:prepend>
                                                <v-icon color="green-darken-1"></v-icon>
                                            </template>
                                            <span class="text-blue-darken-1 font-weight-bold">
                                                Lazada
                                            </span>
                                            <template v-slot:append>
                                                <v-icon color="blue-darken-1"></v-icon>
                                            </template>
                                        </v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-sheet>
                </v-col>

            </v-row>
        </v-sheet>

        <div class="border-b my-5" />

        <!-- Descriptions -->
        <v-sheet color="amber-lighten-5" rounded="xl" class="pa-5 text-grey-darken-4">
            <v-row no-gutters>
                <v-col cols="3">
                    <div>
                        <span class="font-weight-bold text-subtitle-1">เครือข่าย</span>
                    </div>
                </v-col>

                <v-col>
                    <div class="border-b d-flex flex-column ml-3 text-subtitle-2">
                        เทคโนโลยี
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.network.technology }}
                        </span>
                    </div>
                </v-col>
            </v-row>

            <v-row no-gutters class="mt-3">
                <v-col cols="3">
                    <div>
                        <span class="font-weight-bold text-subtitle-1">เปิดตัว</span>
                    </div>
                </v-col>

                <v-col>
                    <div class="border-b d-flex flex-column ml-3 text-subtitle-2">
                        วันที่เปิดตัว <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.launch.announced }}
                        </span>

                        วันทื่ขาย (ประเทศไทย) <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.launch.status }}
                        </span>
                    </div>

                </v-col>
            </v-row>

            <v-row no-gutters class="mt-3">
                <v-col cols="3">
                    <div>
                        <span class="font-weight-bold text-subtitle-1">ตัวเครื่อง</span>
                    </div>
                </v-col>

                <v-col>
                    <div class="border-b d-flex flex-column ml-3 text-subtitle-2">
                        ขนาดตัวเครื่อง
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.body.dimensions }}
                        </span>

                        น้ำหนัก
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.body.weight }}
                        </span>

                        วัสดุตัวเครื่อง
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.body.build }}
                        </span>

                        ซิมการ์ด
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.body.sim }}
                        </span>

                        มาตรฐานการกันน้ำกันฝุ่น
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.body.wdstandards }}
                        </span>
                    </div>
                </v-col>
            </v-row>

            <v-row no-gutters class="mt-3">
                <v-col cols="3">
                    <div>
                        <span class="font-weight-bold text-subtitle-1">จอแสดงผล</span>
                    </div>
                </v-col>

                <v-col>
                    <div class="border-b d-flex flex-column ml-3 text-subtitle-2">
                        ชนิดหน้าจอ
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.display.type }}
                        </span>

                        ขนาดหน้าจอ
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.display.size }}
                        </span>

                        ความละเอียดหน้าจอ
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.display.resolution }}
                        </span>
                    </div>
                </v-col>
            </v-row>

            <v-row no-gutters class="mt-3">
                <v-col cols="3">
                    <div>
                        <span class="font-weight-bold text-subtitle-1">แพลตฟอร์ม</span>
                    </div>
                </v-col>

                <v-col>
                    <div class="border-b d-flex flex-column ml-3 text-subtitle-2">
                        ระบบปฏิบัติการ / เวอร์ขั่น
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.platform.os }}
                        </span>

                        Chipset
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.platform.chipset }}
                        </span>

                        CPU
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.platform.cpu }}
                        </span>

                        GPU
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.platform.gpu }}
                        </span>
                    </div>
                </v-col>
            </v-row>

            <v-row no-gutters class="mt-3">
                <v-col cols="3">
                    <div>
                        <span class="font-weight-bold text-subtitle-1">กล้องหลัก</span>
                    </div>
                </v-col>

                <v-col>
                    <div class="border-b d-flex flex-column ml-3 text-subtitle-2">
                        กล้องหลัง
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.maincamera.main }}
                        </span>

                        ฟีเจอร์
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.maincamera.features }}
                        </span>

                        วิดีโอ
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.maincamera.video }}
                        </span>
                    </div>
                </v-col>
            </v-row>

            <v-row no-gutters class="mt-3">
                <v-col cols="3">
                    <div>
                        <span class="font-weight-bold text-subtitle-1">กล้องหน้า</span>
                    </div>
                </v-col>

                <v-col>
                    <div class="border-b d-flex flex-column ml-3 text-subtitle-2">
                        กล้องหน้า
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.selfiecamera.main }}
                        </span>

                        ฟีเจอร์
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.selfiecamera.features }}
                        </span>

                        วิดีโอ
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.selfiecamera.video }}
                        </span>
                    </div>
                </v-col>
            </v-row>

            <v-row no-gutters class="mt-3">

                <v-col cols="3">
                    <div>
                        <span class="font-weight-bold text-subtitle-1">ระบบเสียง</span>
                    </div>
                </v-col>

                <v-col>
                    <div class="border-b d-flex flex-column ml-3 text-subtitle-2">
                        ลำโพง
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.sound.loudspeaker }}
                        </span>

                        แจ็คหูฟัง 3.5 มม.
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.sound.jack35mm }}
                        </span>
                    </div>
                </v-col>
            </v-row>

            <v-row no-gutters class="mt-3">

                <v-col cols="3">
                    <div>
                        <span class="font-weight-bold text-subtitle-1">การเชื่อมต่อ</span>
                    </div>
                </v-col>

                <v-col>
                    <div class="border-b d-flex flex-column ml-3 text-subtitle-2">
                        WiFi
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.comms.wlan }}
                        </span>

                        Bluetooth
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.comms.bluetooth }}
                        </span>

                        GPS
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.comms.positioning }}
                        </span>

                        NFC
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.comms.nfc }}
                        </span>

                        วิทยุ FM
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.comms.radio }}
                        </span>

                        USB
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.comms.usb }}
                        </span>
                    </div>
                </v-col>
            </v-row>

            <v-row no-gutters class="mt-3">

                <v-col cols="3">
                    <div>
                        <span class="font-weight-bold text-subtitle-1">คุณสมบัติเพิ่มเติม</span>
                    </div>
                </v-col>

                <v-col>
                    <div class="border-b d-flex flex-column ml-3 text-subtitle-2">
                        อื่น ๆ
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.features.sensors }}
                        </span>
                    </div>
                </v-col>
            </v-row>

            <v-row no-gutters class="mt-3">

                <v-col cols="3">
                    <div>
                        <span class="font-weight-bold text-subtitle-1">แบตเตอรี่</span>
                    </div>
                </v-col>

                <v-col>
                    <div class="border-b d-flex flex-column ml-3 text-subtitle-2">
                        ชนิด / ความจุ
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.battery.type }}
                        </span>

                        ชาร์จเร็ว
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.battery.charging }}
                        </span>
                    </div>
                </v-col>
            </v-row>

            <v-row no-gutters class="mt-3">

                <v-col cols="3">
                    <div>
                        <span class="font-weight-bold text-subtitle-1">อื่น ๆ</span>
                    </div>
                </v-col>

                <v-col>
                    <div class="border-b d-flex flex-column ml-3 text-subtitle-2">
                        ตัวเลือก / สี
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.misc.colors }}
                        </span>

                        รหัสรุ่น
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.misc.model }}
                        </span>

                        ราคาจำหน่าย (ประเทศไทย)
                        <span class="text-amber-darken-3 pl-3 font-weight-bold">
                            {{ mobiles.misc.price }}
                        </span>
                    </div>
                </v-col>
            </v-row>

            <div class="font-weight-bold border-b mt-5">
                ที่มา :
                <v-btn :href="mobiles.reference.from" target="_blank" variant="text" color="blue">
                    {{ mobiles.reference.label }}
                </v-btn>
            </div>
        </v-sheet>
    </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const { data: mobiles } = await useAsyncData(`mobiles:${id}`, () => queryContent('_smartphone').where({ id: id }).findOne(), {
    watch: [id]
})

useContentHead(mobiles.value.header)
</script>