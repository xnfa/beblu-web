<template>
  <app-not-found></app-not-found>
</template>
<script setup>
const { ssrContext } = useNuxtApp();
if (ssrContext?.nuxt) {
  ssrContext.nuxt.error = {
    statusCode: 404,
  };
}
</script>
