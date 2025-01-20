<template>
    <nav>
        <ul class="flex gap-x-11 text-2xl font-semibold">
            <li>
                <NuxtLink to="/" class="link" style="hover: bg-sky-700">HOME</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">ABOUT</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact">CONTACT</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav ul {
    font-size: 1.3125rem;
}
</style>
