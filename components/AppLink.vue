<template>
  <a
    :class="$attrs.class"
    :href="
      $router.resolve({
        name: to,
        hash: hash,
        params: { lang: $route.params.lang || 'en', ...params },
      }).fullPath
    "
  >
    <slot />
  </a>
</template>
<script>
  export default {
    props: ["to", "hash", "params"],
  };
</script>
