// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-01-20",
    css: ["@/assets/styles/tailwind.css"],
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    app: {
        head: {
            charset: "utf-8",
            viewport:
                "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,  viewport-fit=cover",
            htmlAttrs: {
                lang: "ko",
            },
            link: [
                {
                    rel: "stylesheet",
                    href: "/css/style.css",
                },
            ],
        },
    },
    modules: ["@nuxtjs/tailwindcss"],
});
