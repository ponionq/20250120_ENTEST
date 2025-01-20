<template>
    <div class="2xl:min-h-[30.1875rem] md:min-h-[24rem] min-h-auto">
        <div class="rounded shadow-custom overflow-hidden h-full">
            <div class="bg-center bg-no-repeat h-48 w-full bg-cover" :style="{ backgroundImage: `url('${bg}');` }"></div>
            <div class=" card-contents 2xl:p-7 p-4 flex flex-wrap 2xl:min-h-[18.375rem]">
                <div class="w-full">
                    <h3 v-html="title" class="font-extrabold leading-tight 2xl:text-[1.9375rem] sm:text-2xl"></h3>
                    <p v-html="content" class="2xl:text-lg 2xl:my-3 my-1 font-medium text-[#424242]"></p>
                </div>
                <p class="2xl:mt-auto text-[#bdbdbd] mt-2">{{ subTxt }}</p>
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
.card-contents {min-height: calc(100% - 12rem);}
</style>