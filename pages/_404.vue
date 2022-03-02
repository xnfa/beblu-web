<template>
  <app-not-found></app-not-found>
</template>
<script setup>
  const { ssrContext } = useNuxtApp();
  ssrContext.nuxt.error = {
    statusCode: 404,
  };
</script>
