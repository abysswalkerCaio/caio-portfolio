// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Caio Costa's Portfolio",
      meta: [
        {
          name: "description",
          content: "Caio Costa's portfolio.",
        },
        {
          name: "keywords",
          content:
            "HTML, CSS, JavaScript, TypeScript, PHP, Vue.js, Nuxt.js, Tailwind CSS, Laravel, Fullstack, Developer, Portfolio",
        },
        {
          name: "author",
          content: "Caio Costa",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
