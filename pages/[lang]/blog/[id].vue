<template>
  <div class="mx-auto text-normal">
    <div
      class="relative bg-cover bg-center h-[40rem] md:h-[25rem] lg:h-[37.5rem] md:container md:mx-auto md:mt-8 md:rounded-lg"
      :style="`background-image: url('${
        'http://nathan.local.deansel.com:8055/assets/' +
        blog.cover.filename_disk
      }')`"
    ></div>
    <div class="article container py-20 px-8 mx-auto">
      <h1>{{ blog.title }}</h1>
      <div v-html="blog.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from "vue-router";
  import { useQuery } from "@urql/vue";

  const route = useRoute();
  const lang = route.params.lang || "en";
  const id = route.params.id;

  const { data, error } = await useQuery({
    query: `
      {
        blog_by_id(id: "${id}") {
          translations(filter: {languages_code: {code: {_eq: "${lang}"}}}) {
            id
            content
            title
            cover {
              filename_disk
            }
          }
        }
      }
    `,
  });
  const blog = data.value.blog_by_id.translations[0];
</script>
