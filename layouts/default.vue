<template>
    <div class="min-h-screen">
        <header id="header" class="flex flex-wrap sm:justify-between  justify-center items-center 2xl:px-28  sticky top-0 z-50 bg-gray-200 md:h-[3.5rem]  px-5 py-3">
            <h1 class="w-136 md:m-0 mx-auto my-2">
                <NuxtLink to="/">
                    <img src="/images/logo.svg" alt="EN MEDIA" />
                </NuxtLink>
            </h1>
            <Menu />
        </header>

        <main>
            <slot />
        </main>

        <footer class="bg-gray-800 text-gray-200 py-3.5 2xl:px-28 px-5">
            <div class="max-w-screen-2xl flex items-center mx-auto h-full 2xl:min-h-80 min-h-60">
                <div>
                    <h2 class="2xl:w-auto w-28">
                        <NuxtLink to="/">
                            <img src="/images/logo_ft.png" alt="EN MEDIA" />
                        </NuxtLink>
                    </h2>
                    <p class="xl:mt-8 mt-4 2xl:text-[1.3125rem] text-base">Copyrights 2024. <b class="font-semibold">테스트</b> All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </div>
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
            href: "/images/logo.svg",
        },
        {
            rel: "icon",
            type: "image/png",
            href: "/images/logo_ft.png",
        },
        {
            rel: "icon",
            type: "image/png",
            href: "/images/favicon.png",
        },
    ],
});
</script>
<style>
body {
    color: #1c1d1c;
    overflow-x: hidden;
}

footer img {
    filter: opacity(1) drop-shadow(0 0 0 #fff);
}

</style>
