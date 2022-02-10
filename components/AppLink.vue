<template>
  <NuxtLink
    :class="$attrs.class"
    :to="{
      name: to,
      params: { lang: $route.params.lang || 'en', ...params },
    }"
  >
    <slot />
  </NuxtLink>
</template>
<script>
  export default {
    props: ["to", "params"],
  };
</script>
