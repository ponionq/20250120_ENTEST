<template>
    <div>index.vue</div>
</template>
<script setup>
useSeoMeta({
    title: "20250120_ENTEST",
    description: "20250120_ENTEST 테스트 페이지 입니다. ",
    ogTitle: "20250120_ENTEST",
    ogDescription: "[og:description]",
    ogImage: "[og:image]",
    ogUrl: "[og:url]",
});
useHead({
    link: [
        {
            rel: "icon",
            type: "image/png",
            href: "/images/favicon.png",
        },
    ],
});
</script>
