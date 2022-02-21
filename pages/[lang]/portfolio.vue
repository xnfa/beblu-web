<template>
  <app-not-found v-if="p.notFound"></app-not-found>
  <div v-else class="text-normal">
    <div class="mx-auto">
      <div
        class="md:container md:mx-auto md:mt-8 md:rounded-lg aspect-video bg-cover bg-center rounded-2xl overflow-hidden"
        v-if="p('section_1_cover')"
        :style="
          !p('section_1_video')
            ? `background-image: url('${
                config.CDN_BASE + p('section_1_cover')?.filename_disk
              }')`
            : ''
        "
      >
        <app-player
          v-if="p('section_1_video')"
          :video-url="config.CDN_BASE + p('section_1_video')?.filename_disk"
          :cover-url="config.CDN_BASE + p('section_1_cover')?.filename_disk"
        ></app-player>
      </div>
      <div
        class="py-[3.75rem] md:pt-12 md:pb-20 px-[1.875rem] md:px-0 md:max-w-[33.375rem] container mx-auto"
      >
        <div class="flex items-center justify-center gap-5 mb-6 md:mb-8">
          <h2 class="text-[3rem] md:text-[4rem] font-black leading-[1.15]">
            {{ p("section_1_title_1") }}
          </h2>
          <svg
            class=""
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_173_3211)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.39335 2.70626L2.54482 3.55479L14.9901 16.0001L2.54516 28.4451L3.39369 29.2936L15.8387 16.8486L28.5663 29.5763L29.4149 28.7278L16.6872 16.0001L29.4152 3.27207L28.5667 2.42354L15.8387 15.1516L3.39335 2.70626Z"
                fill="#353535"
              />
            </g>
            <defs>
              <clipPath id="clip0_173_3211">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <h2 class="text-[3rem] md:text-[4rem] font-black leading-[1.15]">
            {{ p("section_1_title_2") }}
          </h2>
        </div>
        <p class="text-xl md:text-base text-light">
          {{ p("section_1_content") }}
        </p>
      </div>
    </div>
    <section class="bg-[#F4F6FA] py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <h2
        class="text-[3rem] md:text-[4rem] font-black leading-[1.15] text-center mb-5 md:mb-10"
      >
        {{ p("section_2_title") }}
      </h2>
      <div
        class="flex flex-row gap-6 md:gap-7 flex-wrap mb-10 md:mb-12 container mx-auto md:max-w-[47.25rem]"
      >
        <div
          class="w-[calc(33.33%-1rem)] md:w-[calc(14.285%-1.5rem)] flex flex-col items-center text-center"
          v-for="card in p('section_2_cards')"
        >
          <img
            class="block w-12 h-12 overflow-hidden mb-2"
            :src="config.CDN_BASE + card.item.cover?.filename_disk"
            alt=""
          />
          <h3 class="text-light">
            {{ card.item.title }}
          </h3>
        </div>
      </div>
      <div class="text-center text-[#37C0BA] text-xl">
        {{ l("and_many_more") }}
      </div>
    </section>
    <section class="bg-white py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <div
        class="flex flex-col md:flex-row-reverse gap-8 md:gap-16 md:max-w-[56.5rem] container mx-auto"
      >
        <div class="md:w-[21.25rem] flex flex-col md:justify-center">
          <h2
            class="text-[3rem] md:text-[4rem] font-black leading-[1.15] text-center md:text-left mb-6 md:mb-8"
          >
            {{ p("section_3_title") }}
          </h2>
          <p class="text-xl md:text-base text-light">
            {{ p("section_3_content") }}
          </p>
        </div>
        <div class="flex-1 flex items-center">
          <img
            class="rounded-2xl"
            :src="config.CDN_BASE + p('section_3_cover')?.filename_disk"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="bg-white py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <div
        class="flex flex-col md:flex-row gap-8 md:gap-16 md:max-w-[56.5rem] container mx-auto"
      >
        <div class="md:w-[21.25rem] flex flex-col md:justify-center">
          <h2
            class="text-[3rem] md:text-[4rem] font-black leading-[1.15] text-center md:text-left mb-6 md:mb-8"
          >
            {{ p("section_4_title") }}
          </h2>
          <p class="text-xl md:text-base text-light">
            {{ p("section_4_content") }}
          </p>
        </div>
        <div class="flex-1 flex items-center">
          <img
            class="rounded-2xl"
            :src="config.CDN_BASE + p('section_4_cover')?.filename_disk"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="bg-white py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <div
        class="flex flex-col md:flex-row-reverse gap-8 md:gap-16 md:max-w-[56.5rem] container mx-auto"
      >
        <div class="md:w-[21.25rem] flex flex-col md:justify-center">
          <h2
            class="text-[3rem] md:text-[4rem] font-black leading-[1.15] text-center md:text-left mb-6 md:mb-8"
          >
            {{ p("section_5_title") }}
          </h2>
          <p class="text-xl md:text-base text-light">
            {{ p("section_5_content") }}
          </p>
        </div>
        <div class="flex-1 flex items-center">
          <img
            class="rounded-2xl"
            :src="config.CDN_BASE + p('section_5_cover')?.filename_disk"
            alt=""
          />
        </div>
      </div>
    </section>
    <section
      class="bg-cover bg-center h-[37.5rem] bg-black flex flex-col gap-4 md:gap-0 py-[3.75rem] px-[1.875rem] items-center justify-center"
      :style="`background-image: url('${
        config.CDN_BASE + p('section_6_cover')?.filename_disk
      }')`"
    >
      <h3 class="text-lg text-white font-bold text-center md:mb-3">
        {{ p("section_6_subtitle") }}
      </h3>
      <h2
        class="text-5xl md:text-[4rem] text-white font-bold text-center md:mb-6"
      >
        {{ p("section_6_title") }}
      </h2>
      <p class="text-xl md:text-base text-white text-center md:mb-10">
        {{ p("section_6_content") }}
      </p>
      <app-link
        to="lang-contact-us"
        class="block relative group border-white hover:bg-white text-white hover:text-black text-center border rounded-full p-3 text-lg leading-none w-full md:w-[10.75rem]"
      >
        {{ l("contact_us") }}
      </app-link>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useLabels } from "~~/composables/useLabels";
  import { usePageLabels } from "~~/composables/usePageLabels";
  import { useTitle } from "~~/composables/useTitle";
  useMeta({
    title: `${useTitle("portfolio")} | Beblu`,
  });
  const config = useRuntimeConfig();
  const l = await useLabels();
  const p = await usePageLabels("portfolio", [
    "section_1_content",
    "section_1_title_1",
    "section_1_title_2",
    `section_1_cover {
      filename_disk
    }`,
    `section_1_video {
      filename_disk
    }`,
    `section_2_cards {
      item {
        ... on portfolio_section_2_card {
          id
          title
          cover {
            filename_disk
          }
        }
      }
    }`,
    "section_2_title",
    "section_3_content",
    `section_3_cover {
      filename_disk
    }`,
    "section_3_title",
    "section_4_content",
    `section_4_cover {
      filename_disk
    }`,
    "section_4_title",
    "section_5_content",
    `section_5_cover {
      filename_disk
    }`,
    "section_5_title",
    "section_6_content",
    `section_6_cover {
      filename_disk
    }`,
    "section_6_subtitle",
    "section_6_title",
  ]);
</script>
