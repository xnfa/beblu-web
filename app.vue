<template>
  <div>
    <div style="height: 4rem"></div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
    <div
      id="awwwards"
      style="
        position: fixed;
        z-index: 999;
        transform: translateY(-50%);
        top: 50%;
        right: 0;
      "
    >
      <a href="https://www.awwwards.com/sites/beblu" target="_blank">
        <svg width="53.08" height="171.358">
          <path
            class="js-color-bg"
            fill="#5ABDB2"
            d="M0 0h53.08v171.358H0z"
          ></path>
          <g class="js-color-text" fill="#fff">
            <path
              d="M20.048 153.585v-2.002l6.752-3.757h-6.752v-1.9h10.23v2.002l-6.752 3.757h6.752v1.9zM29.899 142.382a3.317 3.317 0 0 1-1.359 1.293c-.575.297-1.223.446-1.944.446-.721 0-1.369-.149-1.944-.446a3.317 3.317 0 0 1-1.359-1.293c-.331-.564-.497-1.232-.497-2.003 0-.769.166-1.437.497-2.002a3.332 3.332 0 0 1 1.359-1.294c.575-.297 1.224-.445 1.944-.445.722 0 1.369.148 1.944.445a3.326 3.326 0 0 1 1.359 1.294c.33.565.496 1.233.496 2.002.001.77-.166 1.438-.496 2.003m-1.703-3.348c-.435-.331-.967-.497-1.601-.497s-1.167.166-1.601.497c-.434.332-.65.78-.65 1.345s.217 1.014.65 1.346c.434.33.967.496 1.601.496s1.166-.166 1.601-.496c.434-.332.649-.78.649-1.346.001-.565-.215-1.013-.649-1.345M22.912 134.996v-1.812h1.185c-.43-.283-.752-.593-.973-.929-.219-.336-.329-.732-.329-1.19 0-.479.127-.902.38-1.272.254-.37.635-.633 1.141-.79-.478-.262-.851-.591-1.118-.985a2.221 2.221 0 0 1-.402-1.265c0-.682.2-1.218.599-1.607.4-.391.957-.585 1.668-.585h5.218v1.812H25.37c-.682 0-1.023.303-1.023.907 0 .467.264.85.789 1.146.527.299 1.286.446 2.28.446h2.865v1.813H25.37c-.682 0-1.023.303-1.023.906 0 .468.275.851.826 1.147.551.298 1.352.446 2.404.446h2.704v1.812h-7.369zM21.626 122.457c-.225.224-.502.336-.833.336s-.608-.112-.833-.336a1.128 1.128 0 0 1-.336-.833c0-.331.111-.609.336-.833.225-.225.502-.336.833-.336s.608.111.833.336c.225.224.337.502.337.833 0 .332-.112.608-.337.833m1.286-1.739h7.366v1.813h-7.366v-1.813zM22.912 118.668v-1.812h1.185a3.348 3.348 0 0 1-.951-1.009 2.434 2.434 0 0 1-.351-1.272c0-.681.19-1.229.57-1.644.38-.414.931-.621 1.651-.621h5.263v1.812h-4.722c-.418 0-.727.096-.92.285-.195.19-.293.447-.293.769 0 .302.116.58.351.833.233.254.577.458 1.03.613.453.156.992.234 1.615.234h2.938v1.812h-7.366zM29.833 109.129a3.33 3.33 0 0 1-1.432 1.169 4.535 4.535 0 0 1-1.805.373 4.537 4.537 0 0 1-1.807-.373c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.771.183-1.413.549-1.93a3.28 3.28 0 0 1 1.382-1.141 4.221 4.221 0 0 1 1.709-.364h.746v5.071c.447-.02.838-.183 1.168-.49.332-.307.498-.724.498-1.248 0-.41-.093-.754-.277-1.031-.186-.278-.473-.529-.863-.753l.542-1.462c.69.303 1.224.724 1.592 1.265.371.541.556 1.235.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.574c-.41.088-.746.261-1.009.52-.262.258-.395.61-.395 1.06 0 .428.137.784.409 1.067.272.282.604.458.994.525v-3.172zM29.833 100.878c-.375.531-.852.921-1.432 1.169a4.552 4.552 0 0 1-3.612 0c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.77.183-1.412.549-1.93a3.278 3.278 0 0 1 1.382-1.14 4.222 4.222 0 0 1 1.709-.365h.746v5.072a1.794 1.794 0 0 0 1.168-.49c.332-.307.498-.724.498-1.249 0-.41-.093-.753-.277-1.031-.186-.277-.473-.528-.863-.753l.542-1.462c.69.302 1.224.724 1.592 1.265.371.541.556 1.234.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.573c-.41.088-.746.261-1.009.519-.262.258-.395.611-.395 1.06 0 .429.137.784.409 1.067.272.282.604.458.994.526v-3.172zM35.481 16.926l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.781-14.969h3.713l2.673 10.276 2.524-10.276h3.445l2.524 10.276 2.674-10.276zM37.979 27.083c1.426 0 2.495 1.068 2.495 2.495 0 1.425-1.069 2.495-2.495 2.495-1.425 0-2.495-1.07-2.495-2.495-.001-1.427 1.07-2.495 2.495-2.495"
            ></path>
          </g>
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import "./assets/css/tailwind.css";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import { createClient, provideClient } from "@urql/vue";
  import { useRouter, useRoute } from "vue-router";
  import moment from "moment";
  import "moment/dist/locale/zh-cn.js";
  import "moment/dist/locale/zh-tw.js";
  import "moment/dist/locale/zh-hk.js";
  import "moment/dist/locale/ms.js";
  import "moment/dist/locale/id.js";

  // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  // <link rel="manifest" href="/site.webmanifest">
  useMeta({
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-32x32.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
  });

  const route = useRoute();
  const lang = typeof route.params.lang === "string" ? route.params.lang : "en";
  if (lang === "cn") {
    moment.locale("zh-cn");
  } else if (lang === "tw") {
    moment.locale("zh-tw");
  } else if (lang === "hk") {
    moment.locale("zh-hk");
  } else {
    moment.locale(lang);
  }

  const router = useRouter();
  const config = useRuntimeConfig();

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  gsap.ticker.lagSmoothing(0);

  const client = createClient({
    url: `${config.API_BASE}/graphql`,
  });

  provideClient(client);
</script>

<style>
  html {
    font-family: "FF Good Pro Cond", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  button,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }
  button:active,
  a:active {
    transform: scale3d(0.95, 0.95, 1);
    transition-property: transform;
    transition-duration: 0.2s;
  }
  .article h1 {
    font-size: 3rem;
    line-height: 3rem;
    text-align: center;
    color: #353535;
    font-weight: 800;
    margin-bottom: 2.5rem;
  }
  .article h2 {
    font-size: 2rem;
    line-height: 2rem;
    color: #353535;
    font-weight: 800;
    margin-bottom: 2.5rem;
  }
  .article h3 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #353535;
    font-weight: bold;
    margin-bottom: 2.5rem;
  }
  .article p {
    font-size: 1.25rem;
    line-height: 1.5;
    color: #707070;
    margin-bottom: 2.5rem;
  }
  @media (min-width: 768px) {
    .article p {
      font-size: 1.25rem;
      line-height: 1.5;
      color: #707070;
      margin-bottom: 2.5rem;
    }
  }
  .article ul {
    margin-bottom: 2.5rem;
  }
  .article ul li {
    font-size: 1.25rem;
    line-height: 24px;
    list-style-type: disc;
    margin-left: 1rem;
    color: #707070;
  }
  .router-link-active {
    color: #37c0ba;
  }
  .cookie-privacy-text {
    font-family: sans-serif;
  }
  .cookie-privacy-btn {
    font-family: sans-serif;
  }
</style>
