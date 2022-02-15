<template>
  <app-not-found v-if="p.notFound"></app-not-found>
  <div v-else class="text-normal">
    <div class="mx-auto">
      <div
        class="relative bg-cover bg-center h-[40rem] md:h-[25rem] lg:h-[37.5rem] md:container md:mx-auto md:mt-8 md:rounded-lg"
        :style="`background-image: url('${
          config.CDN_BASE + p('section_1_cover').filename_disk
        }')`"
      ></div>
      <div
        class="pt-[3.75rem] pb-[2.5rem] md:pt-[5rem] md:pb-[3.75rem] px-[1.875rem]"
      >
        <div
          class="xl:max-w-[64rem] container mx-auto flex flex-col md:flex-row md:items-center relative"
        >
          <div class="md:w-72">
            <h1
              class="text-[3rem] text-center md:text-left md:text-[4rem] font-black leading-none mb-12"
            >
              {{ p("section_1_title") }}
            </h1>
          </div>
          <div class="flex-1 article" v-html="p('section_1_content')"></div>
          <img
            class="absolute top-[4.85rem] left-[6.8rem] w-[7.25rem] z-[-1]"
            src="/images/sections/our-story-section-1/ball.png"
            alt=""
          />
          <img
            class="absolute bottom-0 right-24 w-[7.25rem] z-[-1]"
            src="/images/sections/our-story-section-1/ball.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <section>
      <div
        class="relative bg-cover bg-center h-[31rem] lg:h-[40rem] mt-8"
        :style="`background-image: url('${
          config.CDN_BASE + p('section_2_cover').filename_disk
        }')`"
      >
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <h2
            class="text-white font-black text-[4rem] leading-none text-center mb-6"
          >
            {{ p("section_2_title") }}
          </h2>
          <p class="text-white text-center text-[1.375rem]">
            {{ p("section_2_content") }}
          </p>
        </div>
      </div>
      <div
        class="container mx-auto flex flex-col md:flex-row gap-[1.25rem] md:gap-5 -translate-y-6 flex-wrap px-8 md:px-0"
      >
        <div
          class="rounded-xl shadow-md bg-white p-6 w-full md:w-[calc(25%-1.25rem)]"
          v-for="card in p('section_2_cards')"
        >
          <h3
            class="font-bold text-2xl leading-none mb-4 overflow-hidden"
            style="
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            "
          >
            {{ card.item.title }}
          </h3>
          <p
            class="text-[#707070] overflow-hidden text-xl md:text-base"
            style="
              display: -webkit-box;
              -webkit-line-clamp: 6;
              -webkit-box-orient: vertical;
            "
          >
            {{ card.item.content }}
          </p>
        </div>
      </div>
    </section>
    <section class="py-10 relative">
      <div
        class="absolute h-[7.5rem] bg-[#F4F6FA] w-full bottom-1/2 md:bottom-[13%] z-[-1]"
      ></div>
      <h2
        class="font-black text-[3rem] md:text-[4rem] leading-none text-center mb-6"
      >
        {{ p("section_3_title") }}
      </h2>
      <p
        class="md:max-w-[27rem] mx-auto mb-10 px-8 md:px-0 text-xl md:text-base"
      >
        {{ p("section_3_content") }}
      </p>
      <div
        class="container flex flex-row gap-4 md:gap-5 flex-wrap md:justify-center px-8 md:px-0 mx-auto"
      >
        <div
          class="rounded-xl shadow-md bg-white p-2 pb-4 text-center w-[calc(50%-0.5rem)] md:w-auto"
          v-for="card in p('section_3_cards')"
        >
          <div
            class="bg-cover bg-center aspect-square md:w-[8.625rem] rounded-2xl mb-[0.875rem]"
            :style="`background-image: url('${
              config.CDN_BASE + card.item.cover.filename_disk
            }');`"
          ></div>
          <h3
            class="text-[1.375rem] leading-none mb-4 overflow-hidden text-[#565656]"
            style="
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            "
          >
            {{ card.item.title }}
          </h3>
          <button
            type="button"
            class="rounded-full p-1 leading-none font-bold w-[6.5rem] border border-black hover:bg-black hover:text-white"
          >
            {{ p("section_3_btn_label") }}
          </button>
        </div>
      </div>
    </section>
    <section class="bg-white py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <div
        class="flex flex-col md:flex-row-reverse gap-8 md:gap-16 md:max-w-[56.5rem] container mx-auto"
      >
        <div class="md:w-[21.25rem] flex flex-col md:justify-center">
          <h2
            class="text-[3rem] md:text-[4rem] font-black leading-none text-center md:text-left mb-6 md:mb-8"
          >
            {{ p("section_4_title") }}
          </h2>
          <p class="text-xl md:text-base text-light">
            {{ p("section_4_content") }}
          </p>
        </div>
        <div class="flex-1">
          <img
            class="rounded-2xl"
            :src="config.CDN_BASE + p('section_4_cover').filename_disk"
            alt=""
          />
        </div>
      </div>
    </section>
    <section
      class="bg-[#F4F6FA] py-[3.75rem] md:py-20 px-[1.125rem] md:px-8"
      v-if="p('section_5_cards').length > 0"
    >
      <h2
        class="text-[3rem] md:text-[4rem] font-black leading-none text-center mb-8 md:mb-10 md:max-w-[34rem] mx-auto"
      >
        {{ p("section_5_title") }}
      </h2>
      <div class="flex-row gap-6 flex-wrap container mx-auto flex md:hidden">
        <a
          class="block bg-white rounded-2xl overflow-hidden w-[calc(50%-0.75rem)]"
          :href="card.item.url"
          v-for="card in p('section_5_cards').slice(0, 2)"
        >
          <div
            class="h-[6.375rem] bg-cover bg-center"
            :style="`background-image: url('${
              config.CDN_BASE + card.item.cover.filename_disk
            }');`"
          ></div>
          <div class="px-6 pt-4 pb-5">
            <h3
              class="font-bold text-[1.375rem] leading-none mb-2 overflow-hidden"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              "
            >
              {{ card.item.title }}
            </h3>
            <p
              class="text-light overflow-hidden mb-3"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
              "
            >
              {{ card.item.content }}
            </p>
            <p class="text-light text-xs">
              {{ moment(card.item.date).format("MMM D, YYYY") }}
            </p>
          </div>
        </a>
      </div>
      <div
        class="flex-row gap-6 md:gap-5 flex-wrap container mx-auto hidden md:flex xl:hidden max-w-[55.25rem]"
      >
        <a
          class="bg-white rounded-2xl overflow-hidden w-full flex"
          :href="card.item.url"
          v-for="card in p('section_5_cards').slice(0, 1)"
        >
          <div
            class="bg-cover bg-center flex-1"
            :style="`background-image: url('${
              config.CDN_BASE + card.item.cover.filename_disk
            }');`"
          ></div>
          <div class="px-6 pt-4 pb-5 flex-1">
            <h3
              class="font-bold text-[2rem] leading-none mb-5 overflow-hidden"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              "
            >
              {{ card.item.title }}
            </h3>
            <p
              class="text-light text-xl md:text-base overflow-hidden mb-3"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 5;
                -webkit-box-orient: vertical;
              "
            >
              {{ card.item.content }}
            </p>
            <p class="text-light text-xs">
              {{ moment(card.item.date).format("MMM D, YYYY") }}
            </p>
          </div>
        </a>
      </div>
      <div
        class="flex-row gap-6 md:gap-5 flex-wrap container mx-auto px-[1.375rem] md:px-0 hidden xl:flex"
      >
        <a
          class="block bg-white rounded-2xl overflow-hidden w-[calc(16.67%-1.045rem)]"
          :href="card.item.url"
          v-for="card in p('section_5_cards').slice(0, 6)"
        >
          <div
            class="h-[6.375rem] bg-cover bg-center"
            :style="`background-image: url('${
              config.CDN_BASE + card.item.cover.filename_disk
            }');`"
          ></div>
          <div class="px-6 pt-4 pb-5">
            <h3
              class="font-bold text-2xl leading-none mb-2 overflow-hidden"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              "
            >
              {{ card.item.title }}
            </h3>
            <p
              class="text-light text-xl md:text-base overflow-hidden mb-3"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
              "
            >
              {{ card.item.content }}
            </p>
            <p class="text-light text-xs">
              {{ moment(card.item.date).format("MMM D, YYYY") }}
            </p>
          </div>
        </a>
      </div>
    </section>
    <section class="py-10">
      <h2
        class="font-black text-[3rem] md:text-[4rem] leading-none text-center mb-6"
      >
        {{ p("section_6_title") }}
      </h2>
      <div
        class="container mx-auto px-3 md:px-0 flex gap-2 md:gap-5 flex-wrap justify-center"
      >
        <div
          class="rounded-xl shadow-sm md:shadow-md bg-contain bg-center bg-no-repeat bg-origin-content p-2 md:p-6 w-[calc(25%-0.375rem)] aspect-[78/30]"
          v-for="card in p('section_6_cards')"
          :style="`background-image: url('${
            config.CDN_BASE + card.item.cover.filename_disk
          }');`"
        ></div>
      </div>
    </section>
    <section
      class="h-[25rem] px-8 md:px-8 bg-cover bg-center flex flex-col md:flex-row justify-center items-center"
      :style="`background-image: url('${
        config.CDN_BASE + p('section_7_bg').filename_disk
      }');`"
    >
      <h2
        class="font-black text-[3rem] md:text-[2rem] leading-none text-center text-black md:mr-10 mb-10 md:mb-0"
      >
        {{ p("section_7_title") }}
      </h2>
      <app-link to="lang-careers">
        <button
          type="button"
          class="border-black border hover:bg-black hover:text-white rounded-full p-3 text-lg leading-none font-bold w-[16rem] md:w-[10.75rem]"
        >
          {{ p("section_7_btn_label") }}
        </button>
      </app-link>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useLabels } from "~~/composables/useLabels";
  import { usePageLabels } from "~~/composables/usePageLabels";
  import moment from "moment";
  const l = await useLabels();
  const p = await usePageLabels("our_story", [
    "section_1_content",
    `section_1_cover {
      filename_disk
    }`,
    "section_1_title",
    `section_2_cards {
      item {
        ... on our_story_section_2_card {
          id
          title
          content
        }
      }
    }`,
    "section_2_content",
    `section_2_cover {
      filename_disk
    }`,
    "section_2_title",
    "section_3_btn_label",
    `section_3_cards {
      item {
        ... on our_story_section_3_card {
          id
          title
          cover {
            filename_disk
          }
        }
      }
    }`,
    "section_3_content",
    "section_3_title",
    "section_4_content",
    `section_4_cover {
      filename_disk
    }`,
    "section_4_title",
    "section_5_title",
    `section_5_cards {
      item {
        ... on press {
          id
          title
          content
          date
          url
          cover {
            filename_disk
          }
        }
      }
    }`,
    `section_6_cards {
      item {
        ... on our_story_section_6_card {
          id
          cover {
            filename_disk
          }
        }
      }
    }`,
    "section_6_title",
    `section_7_bg {
      filename_disk
    }`,
    "section_7_btn_label",
    "section_7_title",
  ]);
  const config = useRuntimeConfig();
</script>
