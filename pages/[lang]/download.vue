<template>
  <div
    class="bg-fixed bg-cover bg-center h-[45rem] md:h-[67.5rem]"
    style="background-image: url('/images/sections/download/bg.jpg')"
  >
    <div class="h-full bg-black/[0.3]">
      <h1
        class="text-5xl md:text-[4.875rem] text-white pt-[6.25rem] md:pt-[22.25rem] font-bold text-center leading-none"
      >
        {{ p("title") }}
      </h1>
      <p
        class="text-[1.375rem] text-white pt-[1.375rem] text-center leading-none"
      >
        {{ p("content") }}
      </p>
      <div
        class="flex mt-[3.125rem] md:mt-[2.5rem] flex-col md:flex-row justify-center"
      >
        <div class="flex flex-col items-center">
          <img
            class="block w-[7.5rem] md:w-[10rem]"
            src="/images/sections/download/google-play-qrcode.jpg"
            alt=""
          />
          <img
            class="block w-[7.5rem] mt-[0.875rem]"
            src="/images/sections/download/google-play.png"
            alt=""
          />
        </div>
        <div
          class="mt-[2.375rem] md:mt-0 flex flex-col items-center md:ml-[3.75rem]"
        >
          <img
            class="block w-[7.5rem] md:w-[10rem]"
            src="/images/sections/download/app-store-qrcode.jpg"
            alt=""
          />
          <img
            class="block w-[7.5rem] mt-[0.875rem]"
            src="/images/sections/download/app-store.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { usePageLabels } from "~~/composables/usePageLabels";
  const p = await usePageLabels("download", ["title", "content"]);
</script>
