<template>
  <div class="bg-[#F4F6FA]">
    <app-contact-us></app-contact-us>
  </div>
</template>
<script setup lang="ts">
  import { useTitle } from "~~/composables/useTitle";
  useMeta({
    title: `${useTitle("contact_us")} | Beblu`,
  });
</script>
