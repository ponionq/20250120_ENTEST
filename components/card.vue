<template>
    <div class="card">
        <div class="card_inner rounded shadow-custom overflow-hidden">
            <div class="bg-cover bg-center bg-no-repeat h-48" :style="{ backgroundImage: `url('${bg}');` }"></div>
            <div class="card_contents p-7 flex flex-wrap">
                <div class="w-full">
                    <h3 v-html="title" class="font-extrabold leading-tight"></h3>
                    <p v-html="content" class="text-lg my-3 font-medium"></p>
                </div>
                <p class="mt-auto">{{ subTxt }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    bg: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    subTxt: {
        type: String,
        required: true,
    },
});
</script>
<style scoped>
.card_contents {
    min-height: 18.375rem;
}
.card_contents h3 {
    font-size: 1.9375rem;
}
.card_contents h3 + p {
    color: #424242;
}
.card_contents div + p {
    color: #bdbdbd;
    font-size: 1rem;
}
</style>
