<template>
  <div class="text-normal">
    <div class="mx-auto">
      <img
        :src="
          'http://nathan.local.deansel.com:8055/assets/' +
          p('cover').filename_disk
        "
        alt=""
        class="container mx-auto hidden md:block rounded-lg mt-8"
      />
      <img
        :src="
          'http://nathan.local.deansel.com:8055/assets/' +
          p('cover_sm').filename_disk
        "
        alt=""
        class="block w-full md:hidden"
      />
      <div
        class="article pt-[3.75rem] pb-[2.5rem] md:pt-[5rem] md:pb-[3.75rem] px-[1.875rem]"
      >
        <div class="max-w-[34rem] md:text-center mx-auto">
          <div v-html="p('content')"></div>
        </div>
      </div>
    </div>

    <section class="bg-[#F4F6FA]">
      <div class="container mx-auto py-[3.75rem] md:py-[5rem]">
        <h1 class="text-center text-[3rem] md:text-[4rem] font-black">
          {{ p("title") }}
        </h1>
        <p
          class="text-center text-[1.25rem] md:text-[2rem] text-[#37C0BA] mb-[2.5rem] md:mb-[4rem]"
        >
          30 openings
        </p>
        <div class="flex flex-col md:flex-row px-[1.875rem]">
          <div class="md:w-[257px] md:mr-[91px] mb-[3.75rem] md:mb-0">
            <h2 class="text-[2rem] font-bold mb-4 hidden md:block">Search</h2>
            <form class="group relative mb-4">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
              <button
                type="button"
                class="absolute right-3 top-1/2 -mt-4 bg-[#37C0BA] text-white text-sm leading-8 font-medium px-4 rounded-lg"
              >
                Search
              </button>
              <input
                class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Job role"
                placeholder="Job role"
              />
            </form>
            <h2 class="text-[2rem] font-bold mb-4">Filter by</h2>
            <form>
              <input
                class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 px-4 ring-1 ring-slate-200 shadow-sm mb-4"
                type="text"
                aria-label="Location"
                placeholder="Location"
              />
              <input
                class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 px-4 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Department"
                placeholder="Department"
              />
            </form>
          </div>
          <div class="border-t-[#E9E9E9] border-t flex-1">
            <div
              v-for="position in positions"
              class="border-t-[#E9E9E9] border-b py-4"
            >
              <h3 class="font-bold text-[2rem]">
                {{ position.title }}
              </h3>
              <p class="text-light">
                {{ position.department }}, {{ position.location }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from "vue-router";
  import { usePageLabels } from "~~/composables/usePageLabels";
  import { useQuery } from "@urql/vue";
  const p = await usePageLabels("careers", [
    `cover {
      filename_disk
    }`,
    `cover_sm {
      filename_disk
    }`,
    "content",
    "title",
    "unit",
    "search_unit",
  ]);

  const route = useRoute();
  const lang = route.params.lang || "en";

  const { data, error } = await useQuery({
    query: `
      {
        position {
          translations(filter: {languages_code: {code: {_eq: "${lang}"}}}) {
            id
            department
            location
            title
          }
        }
      }
    `,
  });
  const positions = data.value.position
    .filter((v) => v.translations.length > 0)
    .map((v) => v.translations[0]);
</script>
