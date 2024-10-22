<template>
  <v-data-iterator :items="props.itemList" :page="page" :items-per-page="10">
    <template v-slot:default="{ items }">
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="auto" md="3">
          <v-card class="pb-3" border flat :to="{ name: 'smartphone-id', params: { id: item.raw._path } }">
            <v-img :src="item.raw.imageUrl" aspect-ratio="1" />

            <v-list-item :subtitle="item.raw.model">
              <template v-slot:title>
                <strong class="text-h6 mb-2">{{ item.raw.brand }}</strong>
              </template>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script setup>
const props = defineProps(['itemList'])
const page = ref(1)
</script>