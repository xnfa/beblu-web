<template>
  <div>
    <div v-if="data.terms.translations.length === 0">
      <app-not-found></app-not-found>
    </div>
    <div class="article container py-20 px-8 mx-auto" v-else>
      <h1>{{ data.terms.translations[0].title }}</h1>
      <div v-html="data.terms.translations[0].content"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useQuery } from "@urql/vue";
  import { useRoute, useRouter } from "vue-router";

  const route = useRoute();
  const lang = route.params.lang || "en-US";
  const { data, error } = await useQuery({
    query: `
      {
        terms {
          translations(filter: {languages_id: {code: { _eq: "${lang}" }}}) {
            id
            title
            content
          }
        }
      }
    `,
  });
</script>
