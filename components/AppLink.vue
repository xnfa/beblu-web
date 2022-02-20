<template>
  <router-link
    :to="{
      name: to,
      params: { lang: $route.params.lang || 'en', ...params },
    }"
    custom
    v-slot="{ isActive }"
  >
    <a
      :class="[isActive ? 'text-[#37C0BA] font-semibold' : '', $attrs.class]"
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
  </router-link>
</template>
<script>
  export default {
    props: ["to", "hash", "params"],
  };
</script>
