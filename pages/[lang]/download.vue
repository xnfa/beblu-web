<template>
  <div
    class="bg-fixed bg-cover bg-center h-[calc(100vh-4rem)]"
    style="background-image: url('/images/sections/download/bg.jpg')"
  >
    <div
      class="h-full bg-black/[0.3] flex flex-col justify-center items-center"
    >
      <h1
        class="text-5xl md:text-[4.875rem] text-white font-bold text-center leading-none"
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
          <a :href="s.settings.play_store" target="_blank">
            <img
              class="block w-[7.5rem] mt-[0.875rem]"
              src="/images/sections/download/google-play.png"
              alt=""
            />
          </a>
        </div>
        <div
          class="mt-[2.375rem] md:mt-0 flex flex-col items-center md:ml-[3.75rem]"
        >
          <img
            class="block w-[7.5rem] md:w-[10rem]"
            src="/images/sections/download/app-store-qrcode.jpg"
            alt=""
          />
          <a :href="s.settings.app_store" target="_blank">
            <img
              class="block w-[7.5rem] mt-[0.875rem]"
              src="/images/sections/download/app-store.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useQuery } from "@urql/vue";
  import { usePageLabels } from "~~/composables/usePageLabels";
  import { useTitle } from "~~/composables/useTitle";
  useMeta({
    title: `${useTitle("download")} | Beblu`,
  });
  const config = useRuntimeConfig();
  const p = await usePageLabels("download", ["title", "content"]);
  const { data: s } = await useQuery({
    query: `
    {
      settings {
        app_store
        play_store
      }
    }
  `,
  });
</script>
