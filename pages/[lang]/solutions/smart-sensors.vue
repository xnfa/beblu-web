<template>
  <app-not-found v-if="p.notFound"></app-not-found>
  <div v-else class="text-normal">
    <div class="mx-auto">
      <div
        class="flex flex-col items-center justify-center bg-cover bg-center h-[40rem] md:h-[25rem] lg:h-[37.5rem] md:container md:mx-auto md:mt-8 md:rounded-lg"
        :style="`background-image: url('${
          'http://nathan.local.deansel.com:8055/assets/' +
          p('cover').filename_disk
        }')`"
      >
        <h1
          class="text-white text-center font-black text-[3.375rem] md:text-[4rem]"
        >
          {{ p("title") }}
        </h1>
        <p class="text-xl md:text-base text-white text-center">
          {{ p("content") }}
        </p>
      </div>
    </div>

    <section class="py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <div
        class="flex flex-col-reverse md:flex-row-reverse gap-8 md:gap-16 md:max-w-[56.5rem] container mx-auto"
        v-for="product in products"
      >
        <div class="md:w-[21.25rem] flex flex-col md:justify-center">
          <h2
            class="text-[3rem] md:text-[4rem] font-black leading-none mb-6 md:mb-8"
          >
            {{ product.title }}
          </h2>
          <div class="product" v-html="product.description"></div>
          <div class="flex flex-col gap-6 px-8">
            <button
              type="button"
              class="border-black border hover:bg-black hover:text-white rounded-full p-3 text-lg leading-none flex-1 font-bold w-[full]"
            >
              Spec Sheet
            </button>
            <button
              type="button"
              class="border-black border hover:bg-black hover:text-white rounded-full p-3 text-lg leading-none flex-1 font-bold w-[full]"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div class="flex-1">
          <img
            class="rounded-2xl"
            :src="
              'http://nathan.local.deansel.com:8055/assets/' +
              product.images[0].directus_files_id.filename_disk
            "
            alt=""
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useLabels } from "~~/composables/useLabels";
  import { usePageLabels } from "~~/composables/usePageLabels";
  import { useQuery } from "@urql/vue";
  const l = await useLabels();
  const p = await usePageLabels("smart_sensor", [
    "title",
    `cover {
        filename_disk
      }`,
    "content",
  ]);
  const route = useRoute();
  const lang = route.params.lang || "en";

  const { data, error } = await useQuery({
    query: `
      {
        product {
          translations(filter: {languages_code: {code: {_eq: "${lang}"}}}) {
            title
            spec_url
            images {
              directus_files_id {
                filename_disk
              }
            }
            description
          }
        }
      }
    `,
  });
  const products = data.value.product
    .filter((v) => v.translations.length > 0)
    .map((v) => v.translations[0]);
</script>

<style>
  .product h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    line-height: 1;
  }
  .product p {
    font-size: 1.25rem;
    color: #707070;
    margin-bottom: 2rem;
  }
  .product ul {
    margin-bottom: 2.5rem;
  }
  .product ul li {
    font-size: 1.125rem;
    list-style-type: disc;
    margin-left: 2rem;
    color: #707070;
  }
  @media (min-width: 768px) {
    .product p {
      font-size: 1rem;
    }
    .product ul li {
      font-size: 1rem;
      list-style-type: disc;
      margin-left: 1rem;
      color: #707070;
    }
  }
</style>
