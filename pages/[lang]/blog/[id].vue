<template>
  <app-not-found v-if="!blog"></app-not-found>
  <div v-else class="mx-auto text-normal">
    <div
      class="relative bg-cover bg-center h-[40rem] md:h-[25rem] lg:h-[37.5rem] md:container md:mx-auto md:mt-8 md:rounded-lg"
      :style="`background-image: url('${
        config.CDN_BASE + blog.cover?.filename_disk
      }')`"
    ></div>
    <div class="article container py-20 px-8 xl:px-0 lg:w-[64rem] mx-auto">
      <h1>{{ blog.title }}</h1>
      <div v-html="blog.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from "vue-router";
  import { useQuery } from "@urql/vue";
  import { useTitle } from "~~/composables/useTitle";

  const route = useRoute();
  const config = useRuntimeConfig();
  const lang = route.params.lang || "en";
  const l = await useLabels();
  const id = route.params.id;

  const { data, error } = await useQuery({
    query: `
      {
        blog_translations_by_id(id: "${id}") {
          id
          content
          title
          cover {
            filename_disk
          }
        }
      }
    `,
  });
  const blog = data.value.blog_translations_by_id;
  useMeta({
    title: `${blog?.title || "Page not found"} | ${useTitle("blog")} | Beblu`,
  });
</script>
