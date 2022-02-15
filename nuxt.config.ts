import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    API_BASE: "http://admin.beblu.deansel.com",
    CDN_BASE: "http://admin.beblu.deansel.com/assets/",
  },
  privateRuntimeConfig: {},
  typescript: {
    shim: false,
  },
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/fonts/stylesheet.css",
    "@splidejs/splide/dist/css/splide.min.css",
  ],
  build: {
    transpile: ["@heroicons/vue", "gsap", "moment", "@urql/vue"],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  meta: {
    link: [
      {
        rel: "preload",
        href: "/fonts/FFGoodProCond-Regular.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: true,
      },
      {
        rel: "preload",
        href: "/fonts/FFGoodProCond-Black.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: true,
      },
      {
        rel: "preload",
        href: "/fonts/FFGoodProCond-Italic.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: true,
      },
      {
        rel: "preload",
        href: "/fonts/FFGoodProCond-Medium.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: true,
      },
      {
        rel: "preload",
        href: "/fonts/FFGoodProCond-Bold.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: true,
      },
      {
        rel: "preload",
        href: "/fonts/FFGoodProCond-Light.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: true,
      },
    ],
  },
  server: {
    host: "0.0.0.0",
  },
});
