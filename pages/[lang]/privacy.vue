<template>
  <div class="article container max-w-[80rem] py-20 px-8 mx-auto xl:px-0">
    <h1>{{ p("title") }}</h1>
    <div v-html="p('content')"></div>
  </div>
</template>

<script setup lang="ts">
  import { usePageLabels } from "~~/composables/usePageLabels";
  const p = await usePageLabels("privacy", ["title", "content"]);
  const config = useRuntimeConfig();
</script>
