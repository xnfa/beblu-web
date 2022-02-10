<template>
  <div class="text-normal">
    <div class="mx-auto">
      <div
        class="relative bg-cover bg-center h-[40rem] md:h-[25rem] lg:h-[37.5rem] md:container md:mx-auto md:mt-8 md:rounded-lg"
        :style="`background-image: url('${
          'http://localhost:8055/assets/' + p('section_1_cover').filename_disk
        }')`"
      ></div>
      <div
        class="pt-[3.75rem] pb-[2.5rem] md:pt-[5rem] md:pb-[3.75rem] px-[1.875rem]"
      >
        <div
          class="max-w-[64rem] mx-auto flex flex-col md:flex-row md:items-center"
        >
          <div class="md:w-72">
            <h1
              class="text-[3rem] text-center md:text-left md:text-[4rem] font-black leading-none mb-12"
            >
              {{ p("section_1_title") }}
            </h1>
          </div>
          <div class="flex-1 article" v-html="p('section_1_content')"></div>
        </div>
      </div>
    </div>
    <section>
      <div
        class="relative bg-cover bg-center h-[31rem] lg:h-[40rem] mt-8"
        :style="`background-image: url('${
          'http://localhost:8055/assets/' + p('section_2_cover').filename_disk
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
        class="container mx-auto flex flex-col md:flex-row gap-5 -translate-y-6 flex-wrap"
      >
        <div
          class="rounded-xl shadow-md bg-white p-6"
          style="width: calc(25% - 1.25rem)"
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
            class="text-[#707070] overflow-hidden"
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
        class="absolute h-[7.5rem] bg-[#F4F6FA] w-full bottom-[13%] z-[-1]"
      ></div>
      <h2 class="font-black text-[4rem] leading-none text-center mb-6">
        {{ p("section_3_title") }}
      </h2>
      <p class="max-w-[27rem] mx-auto mb-10">{{ p("section_3_content") }}</p>
      <div
        class="container mx-auto flex flex-col md:flex-row gap-5 flex-wrap justify-center"
      >
        <div
          class="rounded-xl shadow-md bg-white p-2 pb-4 text-center"
          v-for="card in p('section_3_cards')"
        >
          <div
            class="bg-cover bg-center w-[8.625rem] h-[8.625rem] rounded-2xl mb-[0.875rem]"
            :style="`background-image: url('${
              'http://localhost:8055/assets/' + card.item.cover.filename_disk
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
            class="rounded-full p-1 leading-none font-bold w-[6.5rem] border border-[#353535]"
          >
            {{ p("section_3_btn_label") }}
          </button>
        </div>
      </div>
    </section>
    <section class="py-10">
      <div class="container mx-auto flex flex-col md:flex-row">
        <img
          class="block mr-[3.75rem] h-[27.75rem]"
          :src="
            'http://localhost:8055/assets/' + p('section_4_cover').filename_disk
          "
          alt=""
        />
        <div class="flex-1 flex flex-col justify-center">
          <h2 class="text-[3rem] font-bold leading-none mb-6">
            {{ p("section_4_title") }}
          </h2>
          <p class="text-[#707070]">{{ p("section_4_content") }}</p>
        </div>
      </div>
    </section>
    <section class="py-10 bg-[#F4F6FA]">
      <div class="container mx-auto">
        <h2 class="font-black text-[4rem] leading-none text-center mb-6">
          {{ p("section_5_title") }}
        </h2>
        <div class="flex w-[55.25rem]"></div>
      </div>
    </section>
    <section class="py-10">
      <h2 class="font-black text-[4rem] leading-none text-center mb-6">
        {{ p("section_6_title") }}
      </h2>
      <div class="container mx-auto flex gap-5 flex-wrap justify-center">
        <div
          class="rounded-xl shadow-md w-[16rem] h-[6.25rem] bg-contain bg-center bg-no-repeat bg-origin-content p-6"
          v-for="card in p('section_6_cards')"
          :style="`background-image: url('${
            'http://localhost:8055/assets/' + card.item.cover.filename_disk
          }'); width: calc(25% - 1.25rem);`"
        ></div>
      </div>
    </section>
    <section
      class="h-[25rem] bg-cover bg-center flex justify-center items-center"
      :style="`background-image: url('${
        'http://localhost:8055/assets/' + p('section_7_bg').filename_disk
      }');`"
    >
      <h2
        class="font-black text-[2rem] leading-none text-center text-black mr-10"
      >
        {{ p("section_7_title") }}
      </h2>
      <button
        type="button"
        class="border-black border-2 rounded-full p-3 text-lg leading-none font-bold w-[10.75rem]"
      >
        {{ p("section_7_btn_label") }}
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useLabels } from "~~/composables/useLabels";
  import { usePageLabels } from "~~/composables/usePageLabels";
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
    "section_5_content",
    `section_5_cover {
      filename_disk
    }`,
    "section_5_time",
    "section_5_title",
    "section_5_title_2",
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
</script>
