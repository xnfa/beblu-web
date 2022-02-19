<template>
  <NuxtLink
    :class="$attrs.class"
    :to="{
      name: to,
      hash: hash,
      params: { lang: $route.params.lang || 'en', ...params },
    }"
  >
    <slot />
  </NuxtLink>
</template>
<script>
  export default {
    props: ["to", "hash", "params"],
  };
</script>
