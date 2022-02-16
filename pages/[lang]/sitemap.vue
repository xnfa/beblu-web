<template>
  <div class="container max-w-[80rem] py-20 px-8 mx-auto xl:px-0">
    <h1 class="text-4xl mb-10 text-normal">Sitemap</h1>
    <app-link
      class="block py-2 text-xl border-b border-t text-normal"
      to="lang-solutions-beblu-suite"
      >Beblu Suite</app-link
    >
    <app-link
      class="block py-2 text-xl border-b text-normal"
      to="lang-solutions-smart-sensors"
      >Smart Sensors</app-link
    >
    <app-link class="block py-2 text-xl border-b text-normal" to="lang-careers"
      >Careers</app-link
    >
    <app-link
      class="block py-2 text-xl border-b text-normal"
      to="lang-community"
      >Community</app-link
    >
    <app-link
      class="block py-2 text-xl border-b text-normal"
      to="lang-contact-us"
      >Contact us</app-link
    >
    <app-link class="block py-2 text-xl border-b text-normal" to="lang-download"
      >Download</app-link
    >
    <app-link
      class="block py-2 text-xl border-b text-normal"
      to="lang-our-story"
      >Our Story</app-link
    >
    <app-link
      class="block py-2 text-xl border-b text-normal"
      to="lang-portfolio"
      >Portfolio</app-link
    >
    <app-link class="block py-2 text-xl border-b text-normal" to="lang-privacy"
      >Privacy</app-link
    >
    <app-link class="block py-2 text-xl border-b text-normal" to="lang-terms"
      >Terms</app-link
    >
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from "vue-router";
  import { useQuery } from "@urql/vue";
  import { useTitle } from "~~/composables/useTitle";

  const route = useRoute();
  const lang = route.params.lang || "en";
  useMeta({
    title: `Sitemap | Beblu`,
  });
</script>
