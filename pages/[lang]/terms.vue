<template>
  <app-not-found v-if="p.notFound"></app-not-found>
  <div v-else class="article container py-20 px-8 mx-auto">
    <h1>{{ p("title") }}</h1>
    <div v-html="p('content')"></div>
  </div>
</template>

<script setup lang="ts">
  import { usePageLabels } from "~~/composables/usePageLabels";
  const p = await usePageLabels("terms", ["title", "content"]);
</script>
