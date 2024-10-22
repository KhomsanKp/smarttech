<template>
    <v-sheet>
        <ContentSlot :use="$slots.default" unwrap="p" />
    </v-sheet>
</template>