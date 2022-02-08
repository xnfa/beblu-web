<template>
  <div>
    <div v-if="data.privacy.translations.length === 0">
      <app-not-found></app-not-found>
    </div>
    <div class="article container py-20 px-8 mx-auto" v-else>
      <div v-html="data.privacy.translations[0].content"></div>
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
        privacy {
          translations(filter: {languages_code: {code: { _eq: "${lang}" }}}) {
            id
            content
          }
        }
      }
    `,
  });
</script>
