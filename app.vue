<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
  import "./assets/css/tailwind.css";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { createClient, provideClient } from "@urql/vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.lagSmoothing(0);

  const client = createClient({
    url: "http://localhost:8055/graphql",
  });

  provideClient(client);

  router.afterEach(() => {
    window.scrollTo(0, 0);
  });
</script>

<style>
  html {
    font-family: "FF Good Pro Cond";
    font-weight: 400;
    font-style: normal;
    /* scroll-snap-type: y proximity; */
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
    font-weight: 800;
    margin-bottom: 2.5rem;
  }
  .article p {
    font-size: 1rem;
    line-height: 24px;
    color: #707070;
    margin-bottom: 2.5rem;
  }
</style>
