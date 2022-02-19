<template>
  <div>
    <div style="height: 4rem"></div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
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

  router.afterEach(() => {
    console.log(0);
    gsap.to(window, { duration: 0, scrollTo: 0 });
  });
</script>

<script lang="ts">
  export default {
    mounted() {
      gsap.to(window, { duration: 0, scrollTo: 0 });
    },
  };
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
      font-size: 1.125rem;
      line-height: 1.5;
      color: #707070;
      margin-bottom: 2.5rem;
    }
  }
  .article ul {
    margin-bottom: 2.5rem;
  }
  .article ul li {
    font-size: 1.125rem;
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
