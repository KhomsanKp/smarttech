<template>
    <v-footer class="bg-grey-darken-4">
        <v-row justify="center" no-gutters>
            <v-btn v-for="(link, idx) in links" :key="idx" :to="link.value" class="mx-2" color="amber-lighten-3"
                variant="text" rounded="xl">
                <span>
                    {{ link.label }}
                </span>
            </v-btn>
            <v-col class="text-center mt-4 text-amber" cols="12">
                copy right {{ new Date().getFullYear() }} by <strong>MDBlog</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                label: 'หน้าหลัก',
                value: '/'
            },
            {
                label: 'เทคโนโลยี',
                value: '/blog/tech'
            },
            {
                label: 'Smartphone',
                value: '/blog/smartphone'
            },
            {
                label: 'สัตว์เลี้ยง',
                value: '/blog/pets'
            },
            // {
            //     label: 'เกี่ยวกับเรา',
            //     value: '/about'
            // },
        ],
    }),
}
</script>